<script>
  export default {
    data() {
      return {
        info: [],
        url:`http://${import.meta.env.VITE_HOST}/api/all`
      }
    },
    created() {
      try{
        fetch(this.url)
         .then(res => res.json())
         .then(data => this.info = data)
      } catch(e){
        console.log(e)
      }
    },
  }
</script>
<template>
  <div class="mx-5">
    <div class="mx-3 d-inline-flex card my-2" v-for="item in info">
      <div class="card-body bg-light" style="width: 16rem;" :key="item.id">
        <p class="card-title">{{ item.characters }}</p>
        <img id="img" class="img-thumbnail" :src="item.image">
      </div>
    </div>
  </div>
</template>
<style>
#img{
  height: 300px !important;
  object-fit: cover !important;
}
</style>