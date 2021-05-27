<template>
  <div class="top-bar-wrapper">
    <b-navbar :class="y100?'top_navbar' : ''" toggleable="lg" :type="y100? `dark` :`light`" variant="faded">
      <b-navbar-brand to="/">HY CHOI<input type="hidden" name="scrollY" v-model="scrollY"></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="item of this.$store.state.menuList" :key="item.value"  :to="item.urlPath">{{item.menuName }}</b-nav-item>
          <b-nav-item to="/" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" >
          <b-nav-form>
            <b-nav-item class="navbar-brand" @click="scrollTop" >T O P ⤴ </b-nav-item>
<!--            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->

          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "topBar",
  data : ()=> ({
    scrollY: window.scrollY,
    timer: null,
    y100 : null,




  }),
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods : {
    handleScroll(){
      if(this.timer === null){
        this.timer = setTimeout(function(){
          this.scrollY = window.scrollY;
          this.y100 = this.scrollY>=100;
          clearTimeout(this.timer);
          this.timer = null;
        }.bind(this),200)
      }

    },

    scrollTop(){
      console.log('위로이동')
      window.scrollTo({top:0,left:0,behavior:'smooth'})
    }


  },
  mounted() {


  }

}
</script>

<style scoped>
.top-bar-wrapper{
  position: sticky;
  top:0;
  z-index : 99;

}
.top_navbar{
  background: #333333;
}


</style>
<style>
.top_navbar{
  background: #333333;
};



</style>
