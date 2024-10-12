<template>
    <VueMarkdown :source="content"/>
</template>

<script setup>
import VueMarkdown  from 'vue-markdown-render';


// Define props and specify that 'content' is a string
const props = defineProps({
    content: {
        type: String,
        required: true
    }
});

// defineProps(['content'])

</script>

<style scoped>
/* You can add scoped styles if needed */
</style>
