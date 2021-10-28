<template>
  <div>
    导航栏| <router-link to="/">LULU</router-link>|
    <router-link to="/xxx">LULU2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
