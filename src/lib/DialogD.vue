<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <ButtonD>OK</ButtonD>
      <ButtonD>Cancel</ButtonD>
    </footer>
  </div>
</template>

<script lang="ts">
import ButtonD from "./ButtonD.vue";
export default {
  components: { ButtonD },
};
</script>
