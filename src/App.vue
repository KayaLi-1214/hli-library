<script setup>
import JSONLab from './components/JSONLab.vue'
import BHeader from './components/BHeader.vue'
import LibraryRegistrationForm from './views/HomeView.vue'
import CountBookAPI from './views/CountBookAPI.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Use computed to determine if header should be shown
const showHeader = computed(() => {
  return route.name !== 'CountBookAPI'
})
</script>

<template>
  <header v-if="showHeader">
    <BHeader />
  </header>

  <main>
    <!-- <LibraryRegistrationForm /> -->
    <!-- <JSONLab /> -->
    <router-view></router-view>
  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
