<script>
export default {
  data() {
    return {
        selectFile: null,
        rawImg:null,
        image:'display:none',
        styleClass:'mx-1',
        characters:[],
        charactersList: ['emo','felicidad','triste','emocion','enojao','secso','duda','femboy'],
      }
  },
  methods: {
      onFileSelected(e) {
        this.selectFile=e.target.files[0]
        try {
          const reader = new FileReader()
          reader.onloadend = () => {
            this.rawImg = reader.result;
            console.log(this.rawImg);
          }
          reader.readAsDataURL(this.selectFile);
          this.image='display:inline'
        } catch (e) {
          let button = document.getElementById('click-button');

          button.classList.remove('btn-outline-success');
          button.classList.add('btn-warning')
          button.innerHTML='SELECCIONE UNA FOTO'
        }
      },
      UploadImage(e) {
        try{
          let characterJsonData=this.characters.filter((e)=>{
            let uploadImage=e
            return uploadImage
          })
          let json=`{"characters":"${characterJsonData}","image":"${this.rawImg}"}`
          fetch('http://localhost:3000/api/',{
            method: 'POST',
            mode: 'cors',
            headers:{
              'Content-Type':'application/json',
              'Connection':'keep-alive',
              'Accept':'*/*',
            },
            body:json})
            .then(res=>res.json())
            .then(data=>{console.log(data)})
          }catch(e){
             console.log(e)
          }
      }
    },
}
</script>
<template>
  <div class="card mx-3">
    <div>
      <div>Caracteristicas: <p @change="UploadImage()" id="characters" class="d-inline">{{ characters }}</p></div>
        <div class="d-inline" v-for="i in charactersList">
          <input :class="this.styleClass" type="checkbox" :value="i" v-model="characters">
          <label :for="i">{{ i }}</label>
        </div>
    </div>
    <input type="file" @change="onFileSelected">
    <div :style="image">
    <img style="width: 400px;height: 300px;" class="img-thumbnail" :src="this.rawImg">
    </div>
    <button id="click-button" class="btn btn-outline-success" @click="UploadImage">Click</button>
  </div>
</template>
