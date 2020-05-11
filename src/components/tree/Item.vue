<template>
  <li>
    <div @click="toggle">
      {{model.title}}
      <span v-if="isFolder">[{{isOpen ? '-': '+'}}]</span>
    </div>
    <ul
      v-show="isOpen"
      v-if="isFolder"
    ><item class="item" v-for="model in model.children" :model="model" :key="model.title" /></ul>
  </li>
</template>

<script>
export default {
    name: 'Item',
    props: {
      model: {
          type: Object,
          required: true
      }
    },
    data() {
        return {
            isOpen: false
        }
    },
    computed: {
        isFolder() {
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        toggle() {
            if (this.isFolder) {
                this.isOpen = !this.isOpen
            }
        }
    }
};
</script>

<style>
</style>