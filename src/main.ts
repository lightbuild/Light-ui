import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Light from './components/Light.vue'
import Light2 from './components/Light2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history:history,
  routes:[
    {path:'/',component:Light},
    {path:'/xxx',component:Light2}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
