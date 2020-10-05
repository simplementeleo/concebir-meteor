import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/buscar-medicos',
    name: 'Medicos',
    component: () => import('../views/Medicos.vue')
  },
  {
    path: '/buscar-sedes',
    name: 'Sedes',
    component: () => import('../views/Sedes.vue')
  },
  {
    path: '/citas',
    name: 'Citas',
    component: () => import('../views/Citas.vue')
  },
  {
    path: '/pagos',
    name: 'Pagos',
    component: () => import('../views/Pagos.vue')
  },
  {
    path: '/horarios',
    name: 'Horarios',
    component: () => import('../views/Horarios.vue')
  },
  {
    path: '/medicos',
    name: 'MedicosRegistro',
    component: () => import('../views/MedicosRegistro.vue')
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: () => import('../views/Pacientes.vue')
  },
  {
    path: '/especialidades',
    name: 'Especialidades',
    component: () => import('../views/Especialidades.vue')
  },
  {
    path: '/sedes',
    name: 'SedesRegistro',
    component: () => import('../views/SedesRegistro.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
