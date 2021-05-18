<template>
  <div>
   <router-link to="/"> <span>전 페이지</span></router-link>
    <button @click="con($data.test)">버튼 클릭 요망</button>
    안녕{{ test }}하세요


  </div>

</template>

<script>
const parentProp = {
  template : `<button>{{dataObj}}</button>`,
  props : ["dataObj"],
}

export default {
  name : "testPage",
  data : () =>({
    test : "2",

  }),
  methods : {
    con(da){
      console.log(da);
    }
  },
  mounted() {
    console.log(parentProp);
  },


}
</script>

<style scoped>

</style>