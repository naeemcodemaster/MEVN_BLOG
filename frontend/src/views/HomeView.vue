
<template>
  <main>
   <h2 class="text-center border-b-1 border-indigo-500 text-3xl pt-2">Blogs</h2>

   <section class="container">
    <div v-for="i in 10" :key="i" class="mx-auto w-[90%] duration-300 transition-all shadow hover:shadow-xl md:w-1/2 py-10 pt-4 px-5 mt-4">
      <h1 class="font-bold text-3xl">Title</h1>
      <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eaque recusandae reprehenderit voluptas cum at quod est magni mollitia odit, ipsam minima aspernatur magnam id veniam beatae ab sint et!</p>
      <div class="flex justify-end px-10">
        <router-link :to="`blog/${i}`" class="bg-indigo-500 text-white rounded-md px-12 py-2 text-1xl font-semibold">Explore</router-link>
      </div>
    </div>

   </section>
  </main>
</template>

<script setup>
import router from '@/router';
</script>

