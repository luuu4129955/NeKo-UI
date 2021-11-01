<template>
  <button @click="toggle" :class="{ checked: x }"><span></span></button>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    return { x, toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h -4px;
button {
  border: none;
  background-color: grey;
  width: $h * 2;
  height: $h;
  border-radius: $h/2;
  position: relative;
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 9px;
  }
  &.checked {
    background-color: blue;
  }
  &.checked > span {
    left: calc(100% - 20px);
  }
}
</style>
