<template>
    <div>
      <h1 v-if="loading">Loading...</h1>
      <slot v-else></slot>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '../stores/userStore'; // Correct the import
  
  const loading = ref(true);
  const router = useRouter();
  const userStore = useUserStore(); // Ensure the store is correctly used
  
  onMounted(() => {
    if (userStore.user) {
      loading.value = false; // Stop loading if the user is present
    } else {
      router.push('/'); // Redirect if no user is found
    }
  });
  </script>
  
  <style scoped>
  /* Add any scoped styling here */
  </style>
  