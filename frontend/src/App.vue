<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import { onMounted } from 'vue';
import axios from 'axios'
import { useBlogStore } from './stores/blogStore';

const blogStore = useBlogStore();

const fetchBlog = async()=>{
  try {
      const res = await axios.get(`http://localhost:3000/api/v1/post`);
      const data = await res.data;
      console.log("fetched",data);
      blogStore.setBlogs(data.posts);
  } catch (error) {
    console.log(error)
  }
}

onMounted(async()=>{
  await fetchBlog()
})


</script>

<template>
  <Navbar/>
  <RouterView />
</template>

<style scoped></style>
