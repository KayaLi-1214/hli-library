<template>
  <pre class="text-center">{{ count }}</pre>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'
const count = ref('')
const error = ref('')
const getBookCount = async () => {
  try {
    const response = await axios.get('https://countbooks-pzy5vuw4kq-uc.a.run.app')
    count.value = response.data
  } catch (eroor) {
    console.error('Error fetching book count:', eroor)
    error.value = eroor
  }
}
getBookCount()
</script>
