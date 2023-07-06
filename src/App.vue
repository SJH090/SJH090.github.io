<script setup lang="ts">
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Notice from './components/Notice.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <Main />
  <!-- <Notice /> -->
  <Footer />
</template>

<style scoped>
.all {
  width: 100%;
  background: url(./assets/15.jpg) no-repeat fixed;
  background-size: cover;
}
</style>
