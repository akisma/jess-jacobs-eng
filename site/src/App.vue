<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-banner">
    <h1>App Banner</h1>
  </div>

  <div class="app-content">
    <RouterView />
  </div>
</template>

<style scoped>
.app-banner {
  height: 60px;
  width: 100%;
  background-color: gray;
  display: flex;
  align-items: left; /* Center vertically */
  justify-content: left; /* Center horizontally */
  color: rgb(255, 255, 255); /* Make text white for better contrast */
  font-size: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

/* Add padding to prevent content from overlapping the banner */
.app-content {
  padding-top: 60px; /* Match the height of the banner */
  width: 96vw;
  box-sizing: border-box;
}
</style>

