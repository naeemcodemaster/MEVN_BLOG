<template>
 <header class="shadow">
          <nav class="w-full md:w-[80%] mx-auto flex flex-col text-center  md:flex-row  justify-center  items-center md:justify-between py-4 px-2 f-1">
            <router-link to="/" class="text-1xl md:text-2xl text-indigo-500 font-semibold">Vue 3 Blog App</router-link>
            <ul class="flex space-x-4 items-center">
              <li>
                <router-link to="/">Blogs</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
              <li>
                <router-link to="/login" class="bg-indigo-500 inline-block hover:bg-indigo-600 cursor-pointer px-5 py-2 md:px-12 md:py-3 rounded-md text-white">Login</router-link>
              </li>
              <!-- <li>
                <button class="bg-indigo-500 inline-block hover:bg-indigo-600 cursor-pointer px-3 py-2 md:px-5 md:py-2 rounded-md text-white">Logout</button>
              </li> -->
            </ul>
          </nav>
        </header>
</template>