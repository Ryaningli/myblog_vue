import {createApp, h} from 'vue'
import App from './App.vue'
import router from './router'

// createApp(App).mount('#app')
// App.config.globalProperties.my_router = my_router


// const app = createApp(App)
const app = createApp({
})
app.use(router)
app.mount('#app')
