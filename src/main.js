import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import { createRouter , createWebHistory } from "vue-router"
import App from './App.vue'

import Main_Inicio from '@/components/Hoteles/main_Inicio.vue';
import Hotel_Principal from '@/components/Hoteles/Hotel_Principal.vue';
import Tipo_Habitaciones from '@/components/Tipo_Habitaciones/Tipo_Habitaciones.vue';
import Acomodaciones_Principal from '@/components/Acomodaciones/Acomodaciones_Principal.vue';
import Crear_Hotel from '@/components/Hoteles/Crear_Hotel.vue';
import Lista_Habitaciones from '@/components/habitaciones/Lista_Habitaciones.vue';
import Crear_Habitaciones from '@/components/habitaciones/Crear_Habitacion.vue';
import Vista_Detalle from '@/components/Detalle/Vista_Detalle.vue';
import Editar_Habitaciones from '@/components/Detalle/Editar_Habitaciones.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/',                         name:'Main_Inicio',               component: Main_Inicio},
        {path: '/Hoteles',                  name:'Hotel_Principal',           component: Hotel_Principal},
        {path: '/TipoHabitaciones',         name:'TipoHabitaciones',          component: Tipo_Habitaciones},
        {path: '/Acomodaciones',            name:'Acomodaciones',             component: Acomodaciones_Principal},
        {path: '/CrearHotel',               name:'CrearHotel',                component: Crear_Hotel},
        {path: '/ListaHabitaciones/:id',    name:'Lista_Habitaciones',        component: Lista_Habitaciones},
        {path: '/CrearHabitaciones/:id',    name:'Crear_Habitaciones',        component: Crear_Habitaciones},
        {path: '/VistaDetalle/:id',         name:'Vista_Detalle',             component: Vista_Detalle},
        {path: '/EditarHabitacion/:id',     name:'Editar_Habitacion',         component: Editar_Habitaciones}
    ]
})

createApp(App)
.use(router)
.mount('#app')