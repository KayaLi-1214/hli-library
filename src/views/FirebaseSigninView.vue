<template>
  <div class="text-center">
    <h1>Sign in</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="sigin">Sign in via Firebase</button></p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()
const adminEmai = 'admin@gmail.com'
const sigin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user
      if (user.email == adminEmai) {
        alert('Admin signin succeed')
        router.push('/Login')
      } else {
        router.push('/')
      }
      console.log('Firebase Sign in Successful!')
      console.log(auth.currentUser)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    })
}
</script>
