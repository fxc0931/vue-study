<template>
  <div class="home">
    Home
    <div>冲啊，手榴弹扔了{{$store.state.count}}</div>
    <p>{{$store.getters.score}}</p>
    <button @click="add">扔一个</button>
    <button @click="addAsync">蓄力仍两个</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
      add() {
          // 修改状态用commit
          this.$store.commit("increment")
      },
      addAsync() {
          this.$store.dispatch("incrementAsync")
      }
  }

}
</script>
