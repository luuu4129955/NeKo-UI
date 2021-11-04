<template>
  <div>DialogD 组件 示例</div>
  <ButtonD @click="toggle">toggle</ButtonD>
  <DialogD :visible="x"></DialogD>
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
    return { x, toggle };
  },
};
</script>
