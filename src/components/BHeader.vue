<script setup>
import { getAuth, signOut } from 'firebase/auth'
import { skip } from '../router/index'
import router from '../router/index'
// const { isAuthenticated } = skip()
// const logOut = () => {
//   isAuthenticated.value = false
//   alert('Log Out!')
//   router.push({ name: 'Login' })
// }
const auth = getAuth()
const FirebaseLogOut = () => {
  signOut(auth)
    .then(() => {
      alert('log out success')
      console.log(auth.currentUser)
      console.log('log out success')
      console.log(auth.currentUser)
    })
    .catch((error) => {
      console.log('log out error', error)
    })
}
</script>

<template>
  <!-- Using Bootstrap's Header template (starter code) -->
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->

  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page"
            >Home (Week 5)</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">Login</router-link>
        </li> -->
        <li class="nav-item">
          <router-link to="/FireLogin" class="nav-link" active-class="active"
            >FireLogin</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/FireRegister" class="nav-link" active-class="active"
            >FireRegister</router-link
          >
        </li>
        <!-- <li class="nav-item">
          <button to="/logout" class="nav-link" @click="logOut" active-class="active">
            Logout
          </button>
        </li> -->
        <li class="nav-item">
          <button to="/logout" class="nav-link" @click="FirebaseLogOut" active-class="active">
            FirebaseLogOut
          </button>
        </li>
        <li class="nav-item">
          <router-link to="/addbook" class="nav-link" active-class="active">Add Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/editBook" class="nav-link" active-class="active">Edit Book</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/booklist" class="nav-link" active-class="active">Book List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/GetBookCount" class="nav-link" active-class="active"
            >Get Book Count</router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/WeatherCheck" class="nav-link" active-class="active"
            >Get Weather</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/CountBookAPI" class="nav-link" active-class="active"
            >Count Book API</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/GetAllBookAPI" class="nav-link" active-class="active"
            >Get All Book API</router-link
          >
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
