<template>
  <div>DialogD 组件 示例</div>
  <ButtonD @click="toggle">toggle</ButtonD>
  <DialogD
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <div>h1</div>
    <div>h2</div>
  </DialogD>
</template>

<script lang="ts">
import DialogD from "../lib/DialogD.vue";
import ButtonD from "../lib/ButtonD.vue";
import { ref } from "vue";
export default {
  components: { DialogD, ButtonD },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return { x, toggle, f1, f2 };
  },
};
</script>
