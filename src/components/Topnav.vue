<template>
  <div>
    <div class="topnav">
      <div
        v-if="toggleMenuButtonVisible"
        class="toggleAside"
        @click="toggleAside"
      ></div>
      <router-link to="/" class="logo">
        <svg class="icon">
          <use xlink:href="#icon-neko"></use>
        </svg>
      </router-link>
      <ul class="menu">
        <router-link to="/doc">文档</router-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    const toggleAside = () => {
      console.log("点击了切换");
      console.log(`值变为：${asideVisible.value}`);
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  color: #fff;
  font-weight: bold;
  padding: 32px;
  position: fixed;
  display: flex;
  width: 100vw;
  height: 72px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 48px;
      height: 48px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    &::before {
      top: 24px;
    }
    &::after {
      bottom: 28px;
    }
    &:before,
    &:after {
      content: "";
      width: 30px;
      height: 2px;
      background-color: #3d4c66;
      display: none;
      position: absolute;
      left: 10px;
      transition-duration: 0.5s;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      &::before,
      &::after {
        display: block;
      }
    }
  }
}
</style>
