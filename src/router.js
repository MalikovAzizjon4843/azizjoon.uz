import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AboutMe },
        { path: '/projects', component: Projects },
        { path: '/blog', component: Blog },
        { path: '/contact', component: Contact }
    ]
});

export default router;