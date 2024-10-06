<template>
    <div class="register">
      <Form
        v-slot="{ errors }"
        @submit="onSubmitHandler"
        :validation-schema="validationSchema"
        :initial-values="initialValues"
        class="w-[90%] mt-5 md:w-1/2 mx-auto flex py-8 flex-col px-10 bg-gray-50 rounded-md"
      >
        <h2 class="text-center font-semibold text-2xl f-1 text-gray-400">Sign Up</h2>
  
        <div class="mb-3 w-full">
          <label class="text-gray-400">Username <span class="text-red-500">*</span></label>
          <Field name="name" class="outline-none border-none w-full rounded-md shadow py-3 px-4" type="text" placeholder="Enter Username" />
          <p class="text-red-500">{{ errors.name }}</p>
        </div>
  
        <div class="mb-3 w-full">
          <label class="text-gray-400">Email <span class="text-red-500">*</span></label>
          <Field name="email" class="outline-none border-none w-full rounded-md shadow py-3 px-4" type="email" placeholder="Enter Email" />
          <p class="text-red-500">{{ errors.email }}</p>
        </div>
  
        <div class="mb-3 mt-5 w-full">
          <label class="text-gray-400">Password <span class="text-red-500">*</span></label>
          <Field name="password" class="outline-none border-none w-full rounded-md shadow py-3 px-4" type="password" placeholder="Enter Password" />
          <p class="text-red-500">{{ errors.password }}</p>
        </div>
  
        <div class="mb-3 w-full flex justify-start mt-3">
            <button type="submit" class="bg-primary hover:bg-indigo-600 cursor-pointer px-5 py-2 md:px-8 md:py-2 rounded-md text-white">
          Register
        </button>
        </div>
  
        <div class="mb-3">
          <p class="text-center">Already have an account? <span class="text-indigo-500"><router-link to="/login">Sign In</router-link></span></p>
        </div>
      </Form>
    </div>
  </template>
  
  <script setup>
  import { RouterLink , useRouter} from 'vue-router';
  import { Form, Field } from 'vee-validate';
  import * as yup from 'yup';
  import {toast} from 'vue3-toastify'
  import axios from 'axios'

  const router = useRouter();

  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    password: yup.string().min(4, 'Password should be 4 or greater').required('Password is required'),
  });
  
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  
  const onSubmitHandler = async(values,{ resetForm }) => {
    try {
      const res = await axios.post('http://localhost:3000/api/v1/register',values)
      const data = await res.data;
      toast.success(data?.msg);
      resetForm();
      router.push('/login');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
    
  };
  </script>
  