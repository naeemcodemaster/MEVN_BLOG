<template lang="">
    <div>
        <h2>Single Post</h2>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
const router = useRoute();
console.log({s:router.query})
</script>
<style lang="">
    
</style>