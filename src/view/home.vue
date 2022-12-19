<script>
  import postPhotos from '../components/images.component.vue'
  import UploadPhotos from '../components/uploadImage.component.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
      postPhotos,
      UploadPhotos
    }
  }
</script>

<template>
  <UploadPhotos />
  <postPhotos />
</template>