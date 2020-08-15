import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Swal from 'sweetalert2'
import './../node_modules/bulma/css/bulma.css';

export const swal2 = Swal;


createApp(App).use(router).mount('#app')
