<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <LULU msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import LULU from "./components/LULU.vue";

export default {
  name: "App",
  components: {
    LULU,
  },
};
</script>
