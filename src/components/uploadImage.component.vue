<script>
export default {
  data() {
    return {
        selectFile: null,
        rawImg:null
      }
  },
  methods: {
      onFileSelected(e) {
        this.selectFile=e.target.files[0]
        // console.log(e)
        // console.log(this.selectFile)
      },
      UploadImage() {

        const reader = new FileReader()

        reader.onloadend = () => {
          this.rawImg = reader.result;
          
          console.log(this.rawImg);
          
        }
        reader.readAsDataURL(this.selectFile);
        // console.log(this.selectFile)
        
      }
    },
}
</script>
<template>
  <div>
    <input type="file" @change="onFileSelected">
    <button @click="UploadImage">Click</button>
  </div>
</template>