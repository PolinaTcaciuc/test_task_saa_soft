import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import ru from 'element-plus/es/locale/lang/ru'
import 'element-plus/dist/index.css'
import './assets/styles/main.scss'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, { locale: ru })
app.use(createPinia()).use(router)
app.mount(`#app`)
