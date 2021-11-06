<template>
  <div class="neko-tabs">
    <div class="neko-tabs-nav">
      <div
        class="neko-tabs-nav-item"
        v-for="(t, index) in titles"
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
    </div>
    <div class="neko-tabs-content">
      <component
        class="neko-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="c in defaults"
        :is="c"
        :key="c"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import TabD from "./TabD.vue";
export default {
  props: {
    title: String,
    selected: String,
  },
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
    const current = computed(() => {
      console.log("重新 return");
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };
    return {
      defaults,
      titles,
      current,
      select,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.neko-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
