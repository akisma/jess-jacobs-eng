<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-banner">
    <h1>Jess Jacobs</h1>
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
  align-items: left; 
  justify-content: left; 
  color: rgb(255, 255, 255); 
  font-size: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.app-content {
  padding-top: 60px; 
  width: 96vw;
  box-sizing: border-box;
}
</style>

