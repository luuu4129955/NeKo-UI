<template>
  <div>DialogD 示例1：toggle切换</div>
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
  <br />
  <br />
  <div>DialogD 示例2：show函数</div>
  <ButtonD @click="showDialog">show</ButtonD>
</template>

<script lang="ts">
import { openDialog } from "../lib/openDialog";
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
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
        closeOnClickOverlay: false,
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>
