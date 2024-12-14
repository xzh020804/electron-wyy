import { createApp } from 'vue'
import App from './App.vue'

//路由
import router from './router'

//状态管理
import pinia from './store'

const app = createApp(App)

app.use

app.use(pinia)
app.use(router)

app.mount('#app')
