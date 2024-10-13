<template>
    <ProtectedLayout>

        <section class="w-full mx-auto py-12 px-5 min-h-screen bg-[#f2f2f2]">
            <div class="mx-3 px-14 flex flex-col space-y-4">
                <div class="mb-3 flex flex-col space-y-2">
                    <label>Name</label>
                    <input v-model="title" type="text" class="outline-none border-none w-full py-3 px-2 rounded-md" />
                </div>
                <!-- <div class="mb-3 flex flex-col space-y-2">
                    <label>Slug</label>
                    <input type="text" class="outline-none border-none w-full py-3 px-2 rounded-md" />
                </div> -->
                <div class="mb-3 flex flex-col space-y-2">
                    <label>Description</label>
                    <input v-model="description" type="text" class="outline-none border-none w-full py-3 px-2 rounded-md" />
                </div>
                <div class="mb-3 flex flex-col space-y-2">
                    <label>Image</label>
                    <input @change="onChangeImage($event.target.files[0])" accept="image/*" type="file"
                        class="outline-none border-none w-full py-3 px-2 rounded-md" />
                </div>
                <div class="mb-3 flex flex-col space-y-2">
                    <label>Content</label>
                    <v-md-editor v-model="text" height="400px"></v-md-editor>

                </div>
                <div class="mb-3 flex justify-start space-y-2">
                    <button @click="submitForm" class="px-12 py-3 bg-primary duration-300 transition-all rounded-lg text-white">Submit</button>
                </div>
            </div>
        </section>

    </ProtectedLayout>
</template>
<script setup>

import ProtectedLayout from '@/layout/ProtectedLayout.vue';
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import axios from 'axios';
import { useBlogStore } from '../stores/blogStore'

const title = ref('');
const description = ref('');
const text = ref('');
const image = ref(null);

const onChangeImage = (img) => {
    image.value = img;
}


// After submit post, want to reload the data on blog page
const blogStore = useBlogStore();
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


const submitForm = async () => {
    try {

        if(title.value == '' || description.value == '' || text.value == '' || image.value == null){
            alert('All fields are required')
            return;
        }

        const formdata = new FormData();
        formdata.append("title",title.value);
        formdata.append("description",description.value);
        formdata.append("content",text.value);
        formdata.append("image",image.value);
        const response = await axios.post(`http://localhost:3000/api/v1/post`,
            formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }

        })
        console.log(response.data)
        toast.success(response.data?.msg)
        fetchBlog();


        title.value = "";
        description.value ="";
        text.value = "";
        image.value = null;
    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.message);
    }
}

</script>
<style lang="">
    
</style>