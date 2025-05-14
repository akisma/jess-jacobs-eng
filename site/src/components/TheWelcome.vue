<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path) => {
  router.push(path)
}
</script>

<template>
  <div class="content-container">
    <div class="content-item engineering shadow-5g" @click="navigateTo('/engineering')">
      <div class="container-background bg-[#7cc0ff]/66 w-full h-full">
        <h2 class="text-right">Engineering</h2>
      </div>
    </div>
    <div class="content-item management shadow-5g" @click="navigateTo('/management')">
      <div class="container-background bg-[#7cc0ff]/66 w-full h-full">
        <h2>Management</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

h2 {
  background-color: rgba(11, 34, 75, 0.5);
}

.header-container {
  width: 100%; 
  text-align: center;
  margin: 0; 
  padding: 20px 0; 
  background-color: white; 
  display: block; 
}

.header {
  font-size: 2rem;
}

.content-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px; 
  width: 100%;
  padding: 0 10px; 
  box-sizing: border-box; 
}

.content-item {
  width: 50%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid rgba(12, 57, 121, 0.844);
  color: #f1eaea;
}

.container-background {
  display: flex;
  align-items: center;
}

.content-item.engineering {
  background: rgba(11, 34, 75, 0.5);
  background-image: url('/eng.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; 
}

.content-item.management {
  background: rgba(11, 34, 75, 0.5);
  background-image: url('/mgmt.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; 
}

</style>
