<template>
  <div class="login">
    <Form v-slot="{ errors }" @submit="onSubmitHandler" :validation-schema="validationSchema"
      :initial-values="initialValues"
      class="w-[90%] mt-5 md:w-1/2 mx-auto flex py-12 flex-col px-10 bg-gray-50 rounded-md">
      <h2 class="text-center font-semibold text-2xl f-1 text-gray-400">Login</h2>

      <div class="mb-3 w-full">
        <label class="text-gray-400">Email <span class="text-red-500">*</span></label>
        <Field name="email" class="outline-none borer-none w-full rounded-md shadow py-3 px-4" type=""
          placeholder="Enter Email" />
        <p class="text-red-500">{{ errors.email }}</p>
      </div>

      <div class="mb-3 mt-5 w-full">
        <label class="text-gray-400">Password <span class="text-red-500">*</span></label>
        <Field name="password" class="outline-none borer-none w-full rounded-md shadow py-3 px-4" type=""
          placeholder="Enter Password" />
        <p class="text-red-500">{{ errors.password }}</p>
      </div>
      <div class="mb-3 w-full flex justify-start mt-3">
        <button type="submit"
          class="bg-primary hover:bg-indigo-600 cursor-pointer px-5 py-2 md:px-8 md:py-2 rounded-md text-white">
          Login
        </button>
      </div>
      <div class="mb-3">
        <p class="text-center">Don't have an account <span class="text-indigo-500"><router-link to="/register">Sign
              Up</router-link></span></p>
      </div>

    </Form>
  </div>
</template>
<script setup>

import { RouterLink, useRouter } from 'vue-router';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import { toast } from 'vue3-toastify'
import axios from 'axios'
import { useUserStore } from '../stores/userStore';
const router = useRouter();

const validationSchema = yup.object({
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const store = useUserStore();


const fetchUser = async (token) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/v1/profile`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await res.data;
    console.log("fetched users", data);
    store.setUser(data);


  } catch (error) {
    console.log(error)
  }
}


const onSubmitHandler = async (values, { resetForm }) => {
  console.log(values);
  try {
    const res = await axios.post('http://localhost:3000/api/v1/login', values)
    const data = await res.data;
    toast.success(data?.msg);
    store.setToken(data.token);
    fetchUser(data?.token);
    resetForm();
    router.push('/');
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

</script>
<style scoped></style>