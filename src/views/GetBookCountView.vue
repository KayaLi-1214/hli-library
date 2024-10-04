<template>
  <div class="text-center" id="app">
    <h1>Book Count</h1>
    <button @click="getBookCount">Get Book Count</button>
    <p v-if="count != null">Total number of books:{{ count }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
const count = ref('')
const error = ref('')
const getBookCount = async () => {
  try {
    const response = await axios.get('https://countbooks-pzy5vuw4kq-uc.a.run.app')
    count.value = response.data.count
  } catch (eroor) {
    console.error('Error fetching book count:', eroor)
    error.value = eroor
  }
}
</script>
