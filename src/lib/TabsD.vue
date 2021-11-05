<template>
  <div>
    <div v-for="(t, index) in titles" :key="index">{{ t }}</div>
    <component v-for="(c, index) in defaults" :is="c" :key="index" />
  </div>
</template>

<script lang="ts">
import TabD from "./TabD.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== TabD) {
        throw new Error("TabsD 子标签必须是 TabD ");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return {
      defaults,
      titles,
    };
  },
};
</script>
