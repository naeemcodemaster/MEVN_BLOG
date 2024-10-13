<template>
    <div v-if="loading">
        loading...
    </div>
    <section class="w-full md-w-[70%] mx-auto flex flex-col bg-[#f0f0f0]" v-else>
        <div class="h-[40vh] mx-auto flex flex-row gap-5">
            <img class="py-4" :src="singlePostData.image" loading="lazy"/>
            <div class="w-full h-full flex items-center flex-col mt-5">
                <h1 class="text-5xl md:7xl">
                    {{ singlePostData.post.title }}
                </h1>
                <p>
                    {{ singlePostData.post.description }}
                </p>
                <small>
                    @{{ singlePostData.post.user.name }}
                </small>
            </div>
        </div>
        <div class="py-10 mx-auto">
            <!-- Render Markdown content -->
            <MarkDownData v-if="singlePostData.post.content" :content="singlePostData.post.content" />
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { toast } from 'vue3-toastify';
import axios from 'axios';
import MarkDownData from '@/components/MarkDownData.vue';
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';



const route = useRoute();
const singlePostData = ref(null);
const loading = ref(true);

const fetchData = async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/v1/post/${id}`);
        singlePostData.value = response.data;
    } catch (error) {
        toast.error(error.response?.data?.message || 'Error fetching post');
    }
}

onMounted(async () => {
    if (route.params && route.params.id) {
        await fetchData(route.params.id);
        loading.value = false;
        
        // Update meta tags after fetching the data
        if (singlePostData.value) {
            useHead({
                title: `${singlePostData.value.post.title} - Vue 3 Blog App`,
                meta: [
                    {
                        name: 'description',
                        content: singlePostData.value.post.description
                    },
                    {
                        name: 'keywords',
                        content: 'vue 3, MEVN stack, pinia, node.js'
                    }
                ]
            });
        }
    } else {
        toast.error('Invalid Post ID');
    }
});

</script>

<style>
    img {
        width: 200px;
    }
</style>
