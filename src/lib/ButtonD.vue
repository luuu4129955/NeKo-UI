<template>
  <div :size="size">
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>
<script lang="ts">
export default {
  setup(props, context) {
    const { size, ...rest } = context.attrs;
    return { size, rest };
  },
};
</script>
