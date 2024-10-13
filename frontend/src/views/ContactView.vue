<template lang="">
    <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">


      <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.583740857515!2d73.07206992616499!3d33.667946087923916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95459918a25f%3A0x46495cfc8ce0a1a3!2sI-8%20Markaz%20I%208%20Markaz%20I-8%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1728790176691!5m2!1sen!2s" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>



      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">I8 Markaz Pak City Center</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">nu170429@email.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">+92342 9571381</p>
        </div>
      </div>
    </div>
   
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <Form v-slot="{ errors }" @submit="onSubmitHandler" :validation-schema="validationSchema"
      :initial-values="initialValues">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 text-gray-600">If you have any question, feel free to contact with Us.</p>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <Field type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <p class="text-red-500">{{ errors.name }}</p>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <Field type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <p class="text-red-500">{{ errors.email }}</p>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <Field as="textarea" id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></Field>
        <p class="text-red-500">{{ errors.message }}</p>
      </div>
      <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
    
    </Form>
    </div>

  </div>
</section>
</template>
<script setup>
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import { toast } from 'vue3-toastify'
import axios from 'axios'

const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    message: yup.string().required('Message is required'),
});

const initialValues = {
    name: '',
    email: '',
    message: '',
};

const onSubmitHandler = async (values, { resetForm }) => {
    console.log(values);
    try {
        const res = await axios.post('http://localhost:3000/api/v1/contact', values)
        const data = await res.data;
        toast.success(data?.msg);


        resetForm();

    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

</script>
<style lang="">
    
</style>