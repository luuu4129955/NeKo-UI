<template>
  <div>ButtonD 示例</div>
  <div>
    <ButtonD @click="onClick" @focus="onClick" @mouseover="onClick"
      >你好</ButtonD
    >
  </div>
</template>

<script lang="ts">
import ButtonD from "../lib/ButtonD.vue";
export default {
  components: { ButtonD },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>
