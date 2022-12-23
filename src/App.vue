<script>
  import Nav from './components/nav.component.vue'
  export default {
    name:'app',
    components:{
      Nav
    }
  }
</script>

<template>
  <Nav/>
  <RouterView></RouterView>
</template>

<style scoped>
</style>
