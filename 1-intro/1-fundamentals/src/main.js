import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.warnHandler = (warn)=>{
    console.warn('warn:', warn);
}

app.config.errorHandler = (error)=>{
    console.error('error:', error)
}

app.mount('#app')


