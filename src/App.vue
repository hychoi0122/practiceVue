<template>
  <div id="app">
    <topBar></topBar>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/index.vue'
import topBar from './template/topBar'
export default {
  name: 'App',
  components: {
    topBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
<style>
.img-fluid{
  height: 500px;
}

</style>
