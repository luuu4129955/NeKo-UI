<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <span>NeKo-UI</span>
      <p class="subTitle">一个基于 Vue 3 的 UI 组件库</p>
      <p class="actions">
        <a href="https://github.com/luuu4129955/NeKo-UI"
          ><svg class="icon">
            <use xlink:href="#icon-github"></use></svg
        ></a>
        <router-link to="/doc">Get Started →</router-link>
      </p>
    </div>

    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于Vue 3</h3>
          <p>骄傲地使用了Vue 3 Composition</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 Typescript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-lights"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的代码极其简洁</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-phone"></use>
          </svg>
          <h3>页面响应式</h3>
          <p>不如试试用手机打开吧</p>
        </li>
      </ul>
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
  min-height: 100vh;
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
  padding: 200px 0 140px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fc6c2e;
  & > span {
    font-size: 48px;
    font-family: Lobster, cursive;
  }
  & > .subTitle {
    color: #fff;
    font-size: 16px;
    padding-top: 16px;
  }
  > .actions {
    padding: 60px 0 20px 0;
    a {
      margin: 0 32px;
      $h: 44px;
      font-weight: 700;
      display: inline-block;
      text-decoration: underline;

      // height: $h;
      // line-height: $h;
      // border-radius: $h * 2;
      // padding: 0 22px;
      &:first-child > svg {
        width: 32px;
        height: 32px;
      }
      &:last-child {
        // background: #fc6c2e;
        // border: 2px #fc6c2e solid;
        color: #393f75;
      }
    }
  }
}
.features {
  color: #262e79;
  margin: 0 auto;
  font-family: STKaiti;

  @media (min-width: 1200px) {
    width: 1200px;
  }
  @media (max-width: 360px) {
    width: 360px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      @media (min-width: 1200px) {
        width: 300px;
      }

      // width: 300px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 60px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 48px;
        height: 48px;
      }
      > h3 {
        grid-area: title;
        font-size: 24px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
