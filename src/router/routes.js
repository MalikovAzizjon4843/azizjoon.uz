import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import AboutMe from '@/components/AboutMe.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: 'Azizjon Malikov | Full-Stack Developer Portfolio',
                description: 'Explore featured work, experience, and skills from Azizjon Malikov, a full-stack Java developer based in Tashkent.',
                canonical: 'https://azizjoon.uz/'
            }
        },
        {
            path: '/about',
            name: 'About',
            component: AboutMe,
            meta: {
                title: 'About Azizjon Malikov | Full-Stack Developer',
                description: 'Learn about Azizjon Malikov’s background, experience, and mission as a full-stack Java developer.',
                canonical: 'https://azizjoon.uz/about'
            }
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Portfolio,
            meta: {
                title: 'Projects by Azizjon Malikov | Java & Full-Stack Work',
                description: 'Browse highlighted projects delivered by Azizjon Malikov covering Java, Vue, and full-stack development.',
                canonical: 'https://azizjoon.uz/projects'
            }
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
            meta: {
                title: 'Contact Azizjon Malikov | Full-Stack Developer',
                description: 'Reach out to Azizjon Malikov for full-stack Java development opportunities, collaborations, or inquiries.',
                canonical: 'https://azizjoon.uz/contact'
            }
        }
    ]
})
