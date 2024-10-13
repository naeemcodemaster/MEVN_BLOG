import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon,addIcons } from 'oh-vue-icons'
import {FaFlag,RiZhihuFill} from 'oh-vue-icons/icons'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; // Import toastify styles
import 'nprogress/nprogress.css'

// Markdown editor
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

import Prism from 'prismjs';

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});


import enUS from '@kangc/v-md-editor/lib/lang/en-US';
VueMarkdownEditor.lang.use('en-US', enUS);

// end fo markdown editor


addIcons(FaFlag,RiZhihuFill)

import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head';

const app = createApp(App)
const head = createHead();

app.use(createPinia())
app.use(Vue3Toastify,{
    autoClose:2000
})
app.component("v-icon",OhVueIcon)
app.use(router)
app.use(VueMarkdownEditor);
app.use(head);


app.mount('#app')
