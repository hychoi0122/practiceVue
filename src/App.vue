<template>
  <div id="app">

    <topBar ></topBar>
    <router-view ></router-view>
    <index-loading></index-loading>
  </div>
</template>

<script>
import topBar from './template/topBar'
import indexLoading from "@/template/indexLoading";
export default {
  name: 'App',
  data : ()=> ({
    test : false,
  }),
  components: {
    topBar,
    indexLoading
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
