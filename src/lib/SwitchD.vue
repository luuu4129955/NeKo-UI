<template>
  <button><span></span></button>
</template>

<style lang="scss">
$h: 22px;
$h2: $h -4px;
button {
  border: none;
  background-color: blue;
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
  &:hover > span {
    left: calc(100% - 20px);
  }
}
</style>
