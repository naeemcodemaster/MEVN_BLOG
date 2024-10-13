<template>
  <header class="shadow">
    <nav
      class="w-full md:w-[80%] mx-auto flex flex-col text-center  md:flex-row  justify-center  items-center md:justify-between py-4 px-2 f-1">
      <router-link to="/" class="text-1xl md:text-2xl text-[color-primary] font-semibold">Vue 3 Blog App</router-link>
      <ul class="flex space-x-4 items-center">
        <li>
          <router-link to="/">Blogs</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li v-if="!token">
          <router-link to="/login"
            class="bg-primary inline-block hover:onHover-primary cursor-pointer px-3 py-2 md:px-5 md:py-2 rounded-md text-white">Login</router-link>
        </li>
        <li v-if="token">
          <router-link to="/dashboard"
            class="bg-primary inline-block hover:onHover-primary cursor-pointer px-3 py-2 md:px-5 md:py-2 rounded-md text-white">Add Post</router-link>
        </li>
        <li v-if="token">
          <button @click="logout"
            class="bg-primary inline-block hover:bg-indigo-600 cursor-pointer px-3 py-2 md:px-5 md:py-2 rounded-md text-white">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { toast } from 'vue3-toastify';
const store = useUserStore();
const token = computed(() => store.token);
const router = useRouter();

console.log("users",store.user);

const logout = () => {
  try {
    // Clear the token from the store and localStorage
    store.removeToken();
    localStorage.removeItem('token');

    // Replace the current history entry with the login page and force reload
    router.replace('/'); // Use replace to avoid adding this to history

    // Clear the session history by pushing a new state and reloading
    setTimeout(() => {
      window.history.pushState({}, '', '/');
      window.location.reload(); // Ensure any cached data is reset
    }, 100);
  } catch (error) {
    toast.error(error.message);
  }
};

</script>