import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
//import { skip } from './authentic'
//const { isAuthenticated } = skip()
import { ref } from 'vue'
const isAuthenticated = ref(false)
export function skip() {
  const login = () => {
    isAuthenticated.value = true
    //router.push('/about')
  }
  const logout = () => {
    isAuthenticated.value = false
  }
  return { isAuthenticated, login, logout }
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // Perform logic before every route change
  if (to.name == 'About') {
    if (isAuthenticated.value == true) {
      next()
    }
    // For example, redirect to home if trying to access any other route
    else {
      alert('You should login first!')
      next({ name: 'Login' })
    }
  } else {
    next()
  }
})

export default router
