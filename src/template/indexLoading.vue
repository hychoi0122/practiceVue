<template>

  <div class="css_container" v-if="test" @click="test=false">
    <div class="css_body" >
      <ul class="ul_Words">
        <li class="Words-line">
          <p class="Words-line-p">&nbsp;</p>
          <p class="Words-line-p">HY BLOG</p>
        </li>
        <li class="Words-line">
          <p class="Words-line-p">HY BLOG</p>
          <p class="Words-line-p">Screen</p>
        </li>
        <li class="Words-line">
          <p class="Words-line-p">Screen</p>
          <p class="Words-line-p">Loading </p>
        </li>
        <li class="Words-line">
          <p class="Words-line-p">Loading</p>
          <p class="Words-line-p">Test</p>
        </li>
        <li class="Words-line">
          <p class="Words-line-p">Test</p>
          <p class="Words-line-p">2021.05.28</p>
        </li>
        <li class="Words-line">
          <p class="Words-line-p">2021.05.28</p>
          <p class="Words-line-p">Click</p>
        </li>
        <li class="Words-line">
          <p class="Words-line-p">Click</p>
          <p class="Words-line-p">&nbsp;</p>
        </li>
      </ul>

    </div>
  </div>



</template>

<script>
export default {
  name: "indexLoading",
  data : ()=>({
    test : true,
  })
}
</script>

<style scoped>

html {
  background-color: #5138BE;
  height: 100%;
}

body {
  color: #FFFFFF;
  display: flex;
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

}

.css_container {
  /*background-color: #5138BE;*/
  background-color: #2c3e50;
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

/*
** The hover interaction
*/
.ul_Words:hover .Words-line-p {
  transform: translate3d(0, -50px, 0);
}
</style>
<style>


</style>