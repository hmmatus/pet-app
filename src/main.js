import {createApp} from 'vue'
import Vuelidate from 'vuelidator'
import App from './App.vue'
import router from './router'
import Swal from 'sweetalert2'
import './../node_modules/bulma/css/bulma.css'

export const swal2 = Swal;
//Vue.use(Vuelidate)

createApp(App).use(router).use(Vuelidate).mount('#app')
// new Vue({
//     router,
//     render: h => h(App)
//     }).$mount("#app")
