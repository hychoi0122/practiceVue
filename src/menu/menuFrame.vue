<template>
  <div>
      <router-view v-bind:dataObj="$data"></router-view>
      <div v-bind:datafld="$data.test">{{ test }}</div>
  </div>
</template>

<script>
export default {
  name: "menu",
  data : () => ({
    test : "1",



  }),


}
</script>

<style scoped>

</style>