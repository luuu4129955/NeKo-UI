<template>
  <div>Tabs示例</div>
  <TabsD v-model:selected="isSelected">
    <TabD title="导航1">内容1</TabD>
    <TabD title="导航2">内容2</TabD>
  </TabsD>
</template>

<script lang="ts">
import TabsD from "../lib/TabsD.vue";
import TabD from "../lib/TabD.vue";
import { ref } from "vue";
export default {
  components: { TabsD, TabD },
  setup() {
    const isSelected = ref("导航1");
    return { isSelected };
  },
};
</script>
