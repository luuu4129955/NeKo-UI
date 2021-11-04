<template>
  <h1>ButtonD</h1>
  <h1>示例1</h1>
  <div>
    <ButtonD>Hello</ButtonD>
    <ButtonD @click="onClick">Hello</ButtonD>
    <ButtonD theme="button">Hello</ButtonD>
    <ButtonD theme="link">Hello</ButtonD>
    <ButtonD theme="text">Hello</ButtonD>
  </div>
  <h1>示例2</h1>
  <div>
    <div>
      <ButtonD size="big">Big</ButtonD>
      <ButtonD>Normal</ButtonD>
      <ButtonD size="small">Small</ButtonD>
    </div>
    <div>
      <ButtonD theme="link" size="big">Big</ButtonD>
      <ButtonD theme="link">Normal</ButtonD>
      <ButtonD size="small" theme="link">Small</ButtonD>
    </div>
    <div>
      <ButtonD size="big" theme="text">Big</ButtonD>
      <ButtonD theme="text">Normal</ButtonD>
      <ButtonD size="small" theme="text">Small</ButtonD>
    </div>
  </div>
  <h1>示例3</h1>
  <div>
    <div>
      <ButtonD level="main">主要按钮</ButtonD>
      <ButtonD>普通按钮</ButtonD>
      <ButtonD level="danger">危险按钮</ButtonD>
    </div>
    <div>
      <ButtonD theme="link" level="main">主要链接按钮</ButtonD>
      <ButtonD theme="link">普通链接按钮</ButtonD>
      <ButtonD theme="link" level="danger">危险链接按钮</ButtonD>
    </div>
    <div>
      <ButtonD theme="text" level="main">主要文字按钮</ButtonD>
      <ButtonD theme="text">普通文字按钮</ButtonD>
      <ButtonD theme="text" level="danger">危险文字按钮</ButtonD>
    </div>
  </div>
  <h1>示例4</h1>
  <div>
    <ButtonD disabled>禁用按钮</ButtonD>
    <ButtonD theme="link" disabled>禁用链接按钮</ButtonD>
    <ButtonD theme="text" disabled>禁用按钮</ButtonD>
  </div>
  <h1>示例5</h1>
  <div>
    <ButtonD loading>加载中</ButtonD>
    <ButtonD>加载完毕</ButtonD>
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
