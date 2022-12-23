<script>
  export default{
    name:'Nav',
    data(){
      return{

      }
    }
  }
</script>
<template>
  <nav >
    <ul class="d-flex outline">
      <li class="mx-auto">
        <router-link class="fs-1" to="/">Home</router-link>
      </li>
      <li class="mx-auto">
        <router-link class="fs-1" to="/upload">Upload Image</router-link>
      </li>
    </ul>
  </nav>
</template>
<style>
a:link, a:visited, a:active, a:hover {
    text-decoration:none;
    color:#000 !important;
}
ul,li{
  list-style: none;
}
.outline{
  outline: 1px solid #ccc;
}
</style>