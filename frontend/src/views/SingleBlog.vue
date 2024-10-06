<template lang="">
    <div>
        <h2>Single Post</h2>
        <p>Post ID: {{ postId }}</p>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

// Access the route inside setup
const route = useRoute();

// Get the route params (in this case, `id`)
const postId = route.params.id;

console.log({ postId });
</script>

<style lang="">
    
</style>
