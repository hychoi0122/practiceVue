<template>
  <div class="index">
    <div class="main-slide">
      <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=29"
        ></b-carousel-slide>

        <b-carousel-slide
            caption="Second slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=53"
        ></b-carousel-slide>

        <b-carousel-slide
            caption="Third slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=19"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <div style="display: flex; justify-content: space-evenly; margin-top:150px;">
      <h1 style="margin-top:30px; ">S K I L L</h1>
    </div>
    <div>
      <div :class="[isPc? main1_container : main1_containerM]">
        <div class="main1_inline" v-for="(item,idx) of iconImg" :key="idx">
          <b-card :title=item.name :img-src=item.img img-alt="Image" img-top>
          </b-card>
        </div>
      </div>
    </div>


    <br>
    <br>
    <br>
    <br>
    <br>
  </div>



</template>

<script>
import javaImg from "@/assets/img/JAVA.png"
import jsImg from "@/assets/img/JS.png"
import nodeImg from "@/assets/img/NODE.png"
import oracleImg from "@/assets/img/ORACLE.png"
import vueImg from "@/assets/img/Vue.png"

export default {
  name: 'index',
  components : {

  },
  data : ()=> ({
    slide: 0,
    sliding: null,
    paData : '',
    iconImg : [
      { name : "JAVA", img : javaImg },
      { name : "JAVA SCRIPT", img : jsImg },
      { name : "NODE", img : nodeImg },
      { name : "ORACLE", img : oracleImg },
      { name : "VUE", img : vueImg },
    ],
    isPc : true,
    main1_container : {
      main1_container : true
    },
    main1_containerM : {
      main1_containerM : true
    },



  }),
  methods : {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    getPlatform(){
      const filter = "win16|win32|win64|mac";
      this.isPc = true;
      if (navigator.platform ) {
        if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {
          this.isPc = false;
        } else {
          this.isPc = true;
        }
      }else{
        //기본값
        this.isPc = true;
      }
    }

  },
  mounted() {
   this.paData = this.$store.state;
   this.getPlatform();
  },
  computed: {

  },

}
</script>
<style scoped>
.index{
  display: flex;
  flex-direction: column;
}
.main1_container{
  margin-top:100px;
  display: flex;
  justify-content: space-evenly;

}
.main1_containerM{
  margin-top:100px;
  display: flex;
  justify-content: start;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.main1_inline{
  display: inline-flex;
  flex: 0 0 auto;
}
.main-slide{
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top:20px;

}

</style>
<style>
.card-img{
  width: 300vh;
  height: 300vh;
}
.btn-secondary{
  background-color: transparent;
  border-color: #2c3e50;
  color: rgba(0, 0, 0, 0.5);
}
.img-fluid{
  height: 500px;
}
.card-img-top{
  width: 30vh;
  height: 30vh;
  padding:20%
}

</style>
