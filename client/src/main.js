import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/authStore';

const app = createApp(App)

app.use(createPinia())
app.use(router)

const authStore = useAuthStore();
// Vérifiez l'authentification avant de monter l'application
authStore.checkAuth().then(() => {
  app.mount('#app');
});

//app.mount('#app')