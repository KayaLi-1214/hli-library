import { ref } from 'vue'
import router from '../router/index'
const isAuthenticated = ref(false)
export function skip() {
  const login = () => {
    isAuthenticated.value = true
    router.push('/about')
  }
  const logout = () => {
    isAuthenticated.value = false
  }
  return { isAuthenticated, login, logout }
}
