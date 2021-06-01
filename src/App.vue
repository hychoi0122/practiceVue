<template>
  <div id="app">
    <div v-if="test">
      <topBar></topBar>
      <router-view ></router-view>
    </div>
    <div v-else @click="test = !test">
      <index-loading></index-loading>
    </div>


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
  },

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
.ul_Words {
  margin: 0 auto;
  padding: 20vh 0;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  font-size: 68px;
  font-weight: 900;
  letter-spacing: -2px;
  text-transform: uppercase;
  transform: translate3d(0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -webkit-font-kerning: normal;
  -webkit-text-size-adjust: 100%;
}

.Words-line {
  height: 50px;
  overflow: hidden;
  position: relative;
}
.Words-line:nth-child(odd) {
  transform: skew(60deg, -30deg) scaleY(0.66667);
}
.Words-line:nth-child(even) {
  transform: skew(0deg, -30deg) scaleY(1.33333);
}
.Words-line:nth-child(1) {
  left: 29px;
}
.Words-line:nth-child(2) {
  left: 58px;
}
.Words-line:nth-child(3) {
  left: 87px;
}
.Words-line:nth-child(4) {
  left: 116px;
}
.Words-line:nth-child(5) {
  left: 145px;
}
.Words-line:nth-child(6) {
  left: 174px;
}
.Words-line:nth-child(7) {
  left: 203px;
}

.Words:hover p {
  transform: translate3d(0, -50px, 0);
}

/*
** Fine-grained text styles
*/
.Words-line-p {
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  transition: all 0.4s ease-in-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
  margin-bottom:0px;
  bottom: 28px;
  position: relative;
  text-align: left;
  cursor: pointer;

}

.css_container {
  /*background-color: #5138BE;*/
  background-color: #1E96FF;
  height: 100%;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 999;
}
.css_body{
  color: #FFFFFF;
  display: flex;
}
.btn_message{
  color:#FFFFFF;
  background-color: #0064FF;
  border: 1px solid #1E96FF;
  font-weight: 900;
  position: relative;
  top:1px;
}
/*
** The hover interaction
*/
.ul_Words:hover .Words-line-p {
  transform: translate3d(0, -50px, 0);
}

</style>
