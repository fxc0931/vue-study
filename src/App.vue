<template>
  <div id="app">
  <Form />
  <Tree />
  </div>
</template>

<script>

import Form from './components/form'
import Tree from './components/tree'

export default {
  name: 'App',
  components: {
    Form,
    Tree
  }
}
</script>

<style>
#app {

}
</style>
