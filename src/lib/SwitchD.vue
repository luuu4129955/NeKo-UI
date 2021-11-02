<template>
  <button @click="toggle" :class="{ checked: value }">
    <span></span>
  </button>
  <div class="text">{{ value }}</div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
    btnStatus: String,
  },
  setup(props, context) {
    let btnStatus;
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h -4px;
button {
  &:focus {
    outline: none; //去掉button外面那个框
  }
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
    transition: left 250ms;
  }
  &.checked {
    background-color: blue;
  }
  &.checked > span {
    left: calc(100% - 20px);
  }
}
</style>
