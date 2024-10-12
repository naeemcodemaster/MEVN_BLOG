
<template>
  <main>
    <h2 class="text-center border-b-1 border-indigo-500 text-3xl pt-2">Blogs</h2>

    <section class="container">
      <div v-for="(item,index) in data" :key="index"
        class="mx-auto w-[90%] duration-300 transition-all shadow hover:shadow-xl md:w-1/2 py-10 pt-4 px-5 mt-4">
        <h1 class="font-bold text-3xl">{{ item.title }}</h1>
        <p class="">{{ item.description }}</p>
        <div class="flex justify-end px-10">
          <router-link :to="`/blog/${item._id}`"
            class="bg-primary text-white rounded-md px-12 py-2 text-1xl font-semibold">Explore</router-link>

        </div>
      </div>

    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useBlogStore } from '@/stores/blogStore';
import { RouterLink } from 'vue-router';
const blogStore = useBlogStore();
const data = computed(()=>blogStore.blogs)
</script>

