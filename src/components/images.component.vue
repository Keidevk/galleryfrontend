<script>
  export default {
    data() {
      return {
        info: []
      }
    },
    created() {
      fetch('http://localhost:3000/api/all')
        .then(res => res.json())
        .then(data => this.info = data)
    },
    methods: {
      show(){
        console.log(this.info)
      }
    }
  }
</script>
<template>
  <button @click="show">Click</button>
  <div class="d-flex">
    <div class="card mx-auto my-2" v-for="item in info">
      <div class="card-body bg-light" style="width: 16rem;" :key="item.id">
        <p class="card-title">{{ item.characters }}</p>
        <img class="img-thumbnail" :src="item.image">
      </div>
    </div>
  </div>
</template>