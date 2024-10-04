<template>
  <div class="text-center">
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  </div>
  <div class="text-center">
    <BookList />
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import db from '../firebase/init.js'
// import { collection, addDoc } from 'firebase/firestore'
import BookList from '../components/BookList.vue'
import axios from 'axios'

const isbn = ref('')
const name = ref('')

const addBook = async () => {
  try {
    const response = await axios.post('https://addbooks-pzy5vuw4kq-uc.a.run.app', {
      isbn: isbn.value,
      name: name.value
    })
    console.log('response', response.data)
    alert('Add succeed')
  } catch (error) {
    console.error('Error fetching book count:', error)
  }
}
</script>
