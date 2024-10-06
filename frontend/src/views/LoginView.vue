<template>
    <div class="login">
        <div class="w-[90%] mt-5 md:w-1/2 mx-auto flex py-12 flex-col px-10 bg-gray-50 rounded-md">
            <h2 class="text-center font-semibold text-2xl f-1 text-gray-400">Login</h2>

            <div class="mb-3 w-full">
                <label class="text-gray-400">Email <span class="text-red-500">*</span></label>
                <input class="outline-none borer-none w-full rounded-md shadow py-3 px-4" type=""
                    placeholder="Enter Email" />
            </div>

            <div class="mb-3 mt-5 w-full">
                <label class="text-gray-400">Password <span class="text-red-500">*</span></label>
                <input class="outline-none borer-none w-full rounded-md shadow py-3 px-4" type=""
                    placeholder="Enter Password" />
            </div>
            <div class="mb-3 w-full flex justify-start mt-3">
                <router-link to="/login"
                    class="bg-indigo-500 inline-block hover:bg-indigo-600 cursor-pointer px-5 py-2 md:px-8 md:py-2 rounded-md text-white">Register</router-link>
            </div>
            <div class="mb-3">
                <p class="text-center">Don't have an account <span class="text-indigo-500"><router-link to="/register">Sign Up</router-link></span></p>
            </div>

        </div>
    </div>
</template>
<script setup>

import { RouterLink } from 'vue-router';

</script>
<style scoped></style>