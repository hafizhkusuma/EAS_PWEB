import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Homepage from './views/Homepage.vue';

// Setelahnya (Vue 3)
const app = createApp(Homepage);
app.mount('#app');

