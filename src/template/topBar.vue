<template>
  <div class="top-bar-wrapper">
    <b-navbar :class="[(scrollY>=500)? top_navbar : '' ]" toggleable="lg" type="light" variant="faded">
      <b-navbar-brand to="/">HY CHOI {{ scrollY }}</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="item of this.$store.state.menuList" :key="item.value"  :to="item.urlPath">{{item.menuName }}</b-nav-item>
          <b-nav-item to="/" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
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
    scrollY: 0,
    timer: null,
    top_navbar:"top_navbar",



  }),
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods : {
    handleScroll: function () {
      if (this.timer === null) {
        this.timer = setTimeout(function () {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null
        }.bind(this), 200)
      }
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
  background: gainsboro;
}


</style>