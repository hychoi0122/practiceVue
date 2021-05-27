<template>
  <div>
    <b-card bg-variant="light" text-variant="black" style="height: 250px; text-align: center;">
      <b-card-text style="margin-top:50px;">
        <h3>STUDY / TEST</h3>
      </b-card-text>
      <b-card-text>
        스티디와 테스트를 위한 페이지입니다.
      </b-card-text>
      <b-card-text>
        현재 vue.js 학습한 것에 대해 기록하였습니다.
      </b-card-text>
    </b-card>

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
        <div>
          <pre>
            <code>
              let array = [];

              for(let i = 0; i<=10000; i++){
                  array.push(i);
                  // array.push(i);
                  array.push(i);
              }

              console.time();
              [...new Set(array)];
              console.timeEnd()

              console.time('타이머');
              array.filter((item, index) => array.indexOf(item) === index);
              console.timeEnd('타이머');

              console.time();
              let test = array.reduce((acc, i) => acc.includes(i) ? acc : [...acc, i], []);
              console.timeEnd();

              console.log(test);


            </code>


          </pre>


        </div>
      </div>




    </div>

  </div>

</template>

<script>
import pic from "@/assets/img/laptop_menu1_slide.jpg"


import menuVueStudyPage from "@/page/menu/menuVueStudyPage";

export default {
  name : "study_test",
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
    titleMessage:"안녕하세요",


  }),
  methods : {
  },
  mounted() {
    let array = [];

    for(let i = 0; i<=10000; i++){
      array.push(i);
      // array.push(i);
      array.push(i);
    }

    console.time();
    [...new Set(array)];
    console.timeEnd()

    console.time('타이머');
    array.filter((item, index) => array.indexOf(item) === index);
    console.timeEnd('타이머');

    console.time();
    let test = array.reduce((acc, i) => acc.includes(i) ? acc : [...acc, i], []);
    console.timeEnd();

    console.log(test);

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