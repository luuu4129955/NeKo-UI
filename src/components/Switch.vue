<template>
  <div>
    <SwitchD v-model:value="bool" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import SwitchD from "../lib/SwitchD.vue";
export default {
  components: { SwitchD },
  setup() {
    const bool = ref(true);
    return { bool };
  },
};
</script>

<style lang="ts"></style>
