<template>
  <div>
    <ul>
      <Item class="item" :model="treeData"></Item>
    </ul>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  components: {
      Item
  },
  data() {
    return {
      treeData: {
        title: "啊啊啊啊啊",
        children: [
          {
            title: "哈哈"
          },
          {
              title: '呀呀呀',
              children: [
                  {
                      title: '888'
                  }
              ]
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>