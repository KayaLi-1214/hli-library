<template>
  <div>
    <h1>Books with ISBN > 10 (Ordered and Limited to 5)</h1>
    <ul>
      <li v-for="book in filteredBooks" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }}
        <button @click="editBook(book.id)">Edit</button>
        <button @click="deleteBook(book.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import db from '../firebase/init.js'
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore'
import router from '../router/index.js'
import { doc, deleteDoc } from 'firebase/firestore'

export default {
  setup() {
    const filteredBooks = ref([])

    // Fetch books with ISBN > 10, ordered and limited to 5
    const fetchFilteredBooks = async () => {
      try {
        const q = query(
          collection(db, 'books'),
          where('isbn', '>', 10),
          orderBy('isbn', 'asc'),
          limit(5)
        )
        const querySnapshot = await getDocs(q)
        const booksArray = []
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() })
        })
        filteredBooks.value = booksArray
      } catch (error) {
        console.error('Error fetching books: ', error)
      }
    }

    // Edit book function
    const editBook = (id) => {
      router.push({ name: 'EditBook', params: { bookid: id } })
    }

    // Delete book function
    const deleteBook = async (id) => {
      try {
        await deleteDoc(doc(db, 'books', id))
        alert('Book deleted successfully!')
        fetchFilteredBooks() // Refetch after deletion
      } catch (error) {
        console.error('Error deleting book: ', error)
      }
    }

    // Fetch filtered books on component mount
    onMounted(() => {
      fetchFilteredBooks()
    })

    return {
      filteredBooks,
      editBook,
      deleteBook
    }
  }
}
</script>
