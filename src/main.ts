import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { seed } from './data'

seed()

createApp(App).mount('#app')
