import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory,} from 'vue-router'
//Routers

import About from './view/uploadImage.vue'
import Home from './view/home.vue'

//Import Style
import './style/bootstrap.min.css'
import './style/bootstrap.css'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About}

]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

const app = createApp(App)

app.use(router)

app.mount('#app')
