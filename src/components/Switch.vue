<template>
  <div>
    <SwitchD v-model:value="y" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import SwitchD from "../lib/SwitchD.vue";
export default {
  components: { SwitchD },
  setup() {
    const y = ref(true);
    return { y };
  },
};
</script>

<style lang="ts"></style>
