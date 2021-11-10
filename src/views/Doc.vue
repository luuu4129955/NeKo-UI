<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <!-- <aside v-show="asideVisible"> -->
      <aside>
        <span>开发指南</span>
        <ol>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <span>组件列表</span>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 弹出框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    return { asideVisible };
  },
};
</script>
<style lang="scss" scoped>
.layout {
  // background-color: #f6f7f9;
  background: linear-gradient(to bottom right, #fa9ca6, #8cbad9);
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .content {
    flex-grow: 1;
    padding: 73px 18px 0 280px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 60px 180px 60px 120px;
    overflow: auto;
    border-radius: 24px;
    background: #fff;
  }
}
aside {
  color: #455a64;
  border-radius: 24px;
  background: #fff;
  width: 260px;
  padding: 60px 16px 16px 36px;
  position: fixed;
  top: 73px;
  left: 0;
  min-height: 100vh;
  > span {
    font-size: 18px;
    font-weight: 700;
  }
  > ol {
    > li {
      font-size: 14px;
      padding: 8px 0;
      height: 44px;
      color: #2a3b4c;
      // border: hotpink 1px solid;
      line-height: 32px;
      > .router-link-active {
        display: block;
        background: #ecd3da;
        padding: 2px 10px;
        border-radius: 20px;
        color: #fa9ca6;
      }
    }
    > li:hover {
      color: #fa9ca6;
    }
  }
}
</style>
