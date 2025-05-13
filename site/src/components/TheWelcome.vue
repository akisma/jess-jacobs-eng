<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path) => {
  router.push(path)
}
</script>

<template>
  <div class="header-container">
    <h1 class="header">Jess Jacobs</h1>
  </div>
  <div class="content-container">
    <div class="content-item engineering" @click="navigateTo('/engineering')">
      <h2>Engineering</h2>
    </div>
    <div class="content-item management" @click="navigateTo('/management')">
      <h2>Management</h2>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  width: 100%; /* Make it span the full width */
  text-align: center;
  margin: 0; /* Remove default margins */
  padding: 20px 0; /* Add vertical padding */
  background-color: white; /* Optional: Add a background color */
  display: block; /* Ensure it takes up its own row */
}

.header {
  font-size: 2rem;
}

.content-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px; /* Add spacing below the header */
  width: 100%;
  padding: 0 10px; /* Add padding to prevent content from touching edges */
  box-sizing: border-box; /* Include padding in width calculation */
}

.content-item {
  width: 50%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc; /* Optional: Add a border for better visibility */
}

.content-item.management {
  background-color: #e0e0e0;
}
</style>
