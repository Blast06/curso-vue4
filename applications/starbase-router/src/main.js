import Vue from 'vue'
import VueRouter from 'vue-router' //PARA IMPORTAR EL VUE ROUTER PARA UTILIZAR RUTAS


//AQUI SE LE DICE QUE HAY QUE USARLO
Vue.use(VueRouter)

import App from './App.vue'
import Data from './Components/Data.vue'

//ARREGLO PARA LAS RUTAS A UTILIZAR CON VUE ROUTER
const routes = [
    {path: '/data/:type', component: Data}
]

const router = new VueRouter({
    routes
})
new Vue({
    el:'#app',
    router,
    render: h=> h(App)

})