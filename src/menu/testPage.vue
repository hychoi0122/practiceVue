<template>
  <div>
<!--    <b-carousel-->
<!--        id="carousel-1"-->
<!--        background="#ababab"-->
<!--        style="text-shadow: 1px 1px 2px #333;"-->
<!--    >-->
<!--      &lt;!&ndash; Slides with custom text &ndash;&gt;-->
<!--      <b-carousel-slide  :img-src="pic" >-->
<!--        <h1>TEST PAGE</h1>-->
<!--      </b-carousel-slide>-->

<!--    </b-carousel>-->

<!--    <router-link to="/"> <span>전 페이지</span></router-link>-->
<!--    <button >버튼 클릭 요망</button>-->
<!--    안녕{{ test }}하세요-->
<!--    <button to="/menu/menu3">안녕하세요?</button>-->
    <div class="main_container">
      <div class="study_con ">
        <b-button-group>
          <b-button :class="[pageTab ? classObject:'']" @click="pageTab = true">VUE STUDY</b-button>
          <b-button :class="[!pageTab ? classObject:'']" @click="pageTab = false">TEST</b-button>
        </b-button-group>
      </div>
      <div v-if="pageTab">
        <menuVueStudyPage></menuVueStudyPage>

      </div>
      <div v-if="!pageTab">
        TEST
      </div>




    </div>

  </div>

</template>

<script>
import pic from "@/assets/img/laptop_menu1_slide.jpg"


import menuVueStudyPage from "@/page/menu/menuVueStudyPage";

export default {
  name : "testPage",
  components: {
    menuVueStudyPage

  },
  data : () =>({
    test : "2",
    imgObj : "@/assets/img/laptop_menu1_slide.jpg",
    pic : pic,
    message : "message",
    pageTab : true,
    classObject: {
      active: true,
    },


  }),
  methods : {
  },
  mounted() {
  },


}
</script>

<style scoped>
.img-fluid{
  height: 500px;
}
.main_container{
  margin-top:20px;
  display: flex;
  margin-right: 10%;
  margin-left:10%;
  flex-direction: column;

}
.study_con{
  display: flex;
  flex-direction: column;
  align-items: flex-start

}
.study_card{
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-top : 20px;
}
.btnActive{

}
</style>
<style>
.btn-secondary{
  background-color: transparent;
  border-color: #2c3e50;
  color: rgba(0, 0, 0, 0.5);
}
.btn-secondary:hover{
  color: #181616;
  background-color: transparent;
}

</style>