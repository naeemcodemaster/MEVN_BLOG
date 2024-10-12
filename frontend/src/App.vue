<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { onMounted } from 'vue';
import axios from 'axios'
import { useBlogStore } from './stores/blogStore';
import { useUserStore } from './stores/userStore';

const blogStore = useBlogStore();
const userStore = useUserStore();

const fetchBlog = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/api/v1/post`);
    const data = await res.data;
    console.log("fetched", data);
    blogStore.setBlogs(data.posts);
  } catch (error) {
    console.log(error)
  }
}

const fetchUser = async (token) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/v1/profile`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await res.data;
    console.log("fetched users",data);
    userStore.setUser(data);


  } catch (error) {
    console.log(error)
  }
}


onMounted(async () => {
  await fetchBlog()
  const token = localStorage.getItem('token');
  if (token) {
    await fetchUser(token)
  }
})


</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped></style>
