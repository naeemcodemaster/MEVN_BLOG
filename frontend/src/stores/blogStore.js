import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blog', () => {
    // state
    const blogs = ref([]);

    // actions
    const setBlogs = (newBlogs) => {
        blogs.value = newBlogs;
    };

    return { blogs, setBlogs };
});
