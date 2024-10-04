<template>
  <pre class="text-center">{{ formattedBooks }}</pre>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'

const error = ref('')
const formattedBooks = ref('')

const getAllBook = async () => {
  try {
    const response = await axios.get('https://getallbooks-pzy5vuw4kq-uc.a.run.app')

    const bookDetails = response.data.books.map((book) => ({
      isbn: book.isbn,
      name: book.name
    }))

    formattedBooks.value = JSON.stringify(bookDetails, null, 2)
  } catch (eroor) {
    console.error('Error fetching book:', eroor)
    error.value = 'Error fetching book'
  }
}

getAllBook()
</script>
