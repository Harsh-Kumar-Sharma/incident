
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'



const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueSidebarMenu)

app.mount('#app')
