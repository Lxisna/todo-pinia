import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia() // 用 createPinia() 就可以得到一个实例化的pinia
const app = createApp(App) // 把 APP 也实例化

app.use(pinia) //把 pinia挂载到 app实例上
app.use(router)
app.mount('#app') //把app实例挂载在 id为app的DOM上
