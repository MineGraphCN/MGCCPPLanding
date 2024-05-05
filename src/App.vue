<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <router-view></router-view>
  <Header class=" fixed top-0 " />
  <Footer />
</template>

<style>
section {
  margin: 8%;
}
</style>