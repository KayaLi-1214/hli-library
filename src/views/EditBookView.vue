<!-- 
<template>
  <div class="text-center">
    <h1>Edit Book</h1>
    <form @submit.prevent="editBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Edit Book</button>
    </form>
  </div>
  <div class="text-center">
    <BookList />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import db from '../firebase/init.js'
import { setDoc, addDoc, getDoc, doc } from 'firebase/firestore'
const bookId = useRoute().params.bookid
console.log('sss' + bookId)
const isbn = ref('')
const name = ref('')
const getBook = async () => {
  try {
 
    const isbnNumber = Number(isbn.value)
    if (isNaN(isbnNumber)) {
      alert('ISBN must be a valid number')
      return
    }
    const docRef = doc(db, 'books', bookId)
    const docSnap = await getDoc(docRef)

    await addDoc(collection(db, 'books'), {
      isbn: isbnNumber,
      name: name.value
    })

    isbn.value = ''
    name.value = ''
    alert('Book added successfully!')
  } catch (error) {
    console.error('Error adding book: ', error)
  }
}
const editBook = async () => {
  try {
    const isbnNumber = Number(isbn.value)
    if (isNaN(isbnNumber)) {
      alert('ISBN must be a valid number')
      return
    }
    await setDoc(doc(db, 'books', bookId), {
      isbn: isbnNumber,
      name: name.value
    })

    isbn.value = ''
    name.value = ''
    alert('Book added successfully!')
  } catch (error) {
    console.error('Error adding book: ', error)
  }
}
</script> -->
-->
<template>
  <div class="text-center">
    <h1>Edit Book</h1>
    <form @submit.prevent="editBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit">Edit Book</button>
    </form>
  </div>
  <!-- <div class="text-center">
    <BookList />
  </div> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import db from '../firebase/init.js'
import { setDoc, getDoc, doc } from 'firebase/firestore'
//import BookList from '../components/BookList.vue'
const route = useRoute()
const bookId = route.params.bookid

const isbn = ref('')
const name = ref('')

const fetchBook = async () => {
  try {
    const docRef = doc(db, 'books', bookId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const bookData = docSnap.data()
      isbn.value = bookData.isbn || ''
      name.value = bookData.name || ''
    } else {
      console.log('No such book!')
    }
  } catch (error) {
    console.error('Error fetching book: ', error)
  }
}

const editBook = async () => {
  try {
    const isbnNumber = Number(isbn.value)
    if (isNaN(isbnNumber)) {
      alert('ISBN must be a valid number')
      return
    }

    await setDoc(doc(db, 'books', bookId), {
      isbn: isbnNumber,
      name: name.value
    })

    isbn.value = ''
    name.value = ''
    alert('Book updated successfully!')
  } catch (error) {
    console.error('Error updating book: ', error)
  }
}

onMounted(() => {
  fetchBook()
})
</script>
