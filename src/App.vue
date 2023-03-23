<script setup lang="ts">
import Header from './components/Header.vue'
import Main from './components/Main.vue'
</script>

<template>
  <div class="all">
    <Header />
    <Main />
  </div>
</template>

<style scoped>
.all {
  width: 100%;
  background: url(./assets/15.jpg) no-repeat fixed;
  background-size: cover;
}
</style>
