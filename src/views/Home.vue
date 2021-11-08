<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>NeKo-UI</h1>
      <h3>一个厉害的UI框架</h3>
      <p class="actions">
        <a href="https://github.com/luuu4129955/NeKo-UI">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
.topnavAndBanner {
  background: linear-gradient(
    to bottom right,
    #f97a87,
    #fa9ca6,
    #edb4c3,
    #b1bbd7,
    #8cbad9,
    #07b6d9
  );
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #2a3b4c;

  > .actions {
    padding: 20px 0;
    a {
      margin: 0 8px;
      background: #fff;
      border: 2px #2a3b4c solid;
      color: #2a3b4c;
      font-weight: 700;
      display: inline-block;
      $h: 44px;
      height: $h;
      line-height: $h;
      border-radius: $h/4;
      padding: 0 22px;
    }
  }
}
</style>
