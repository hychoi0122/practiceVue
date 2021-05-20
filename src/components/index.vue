<template>
  <div class="hello">
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
        <!-- Text slides with image -->
        <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src=@/assets/img/laptop_menu1_slide>
          <h1>Hello world!</h1>
        </b-carousel-slide>


      </b-carousel>
      <img src=@/assets/img/laptop_menu1_slide.jpg>
      <div>
        <p v-bind:title="message">순서</p>
      </div>
    </div>

<!--    <p>store 에 있는 counter :  {{ paData.counter }}</p>-->
<!--    <p>store 에 있는 years : {{ paData.thisYear}}</p>-->
<!--    <p v-for="item of paData.menuList" :key="item.value">{{item}}</p>-->


<!--    <router-link to="/menu/menu1" class="btn">DD</router-link>-->





  </div>
</template>

<script>

export default {
  name: 'index',
  components : {

  },
  data : ()=> ({
    message : "hello man nice to meet you ",
    slide: 0,
    sliding: null,
    paData : '',
  }),
  methods : {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  mounted() {
   this.paData = this.$store.state;


  },
  computed: {
    linkClass() {
      return 'w-100 text-decoration-none text-dark side-menu-link'
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
<style>

</style>