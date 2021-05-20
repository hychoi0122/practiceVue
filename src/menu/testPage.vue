<template>
  <div>
    <b-carousel
        id="carousel-1"
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide  img-src="/img/laptop_menu1_slide.jpg">
        <h1>TEST PAGE</h1>
      </b-carousel-slide>

    </b-carousel>
    <img height="300px" width="100%" src=@/assets/img/laptop_menu1_slide.jpg>


    <router-link to="/"> <span>전 페이지</span></router-link>
    <button >버튼 클릭 요망</button>
    안녕{{ test }}하세요
    <button to="/menu/menu3">안녕하세요?</button>


  </div>

</template>

<script>
export default {
  name : "testPage",
  data : () =>({
    test : "2",

  }),
  methods : {
  },
  mounted() {
  },


}
</script>

<style scoped>

</style>