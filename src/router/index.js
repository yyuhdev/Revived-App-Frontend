import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/components/Home.vue";
import News from "@/components/News.vue";


const routes = [
    { path: '/', component: Home, meta: {
        title: 'Revived.club - Home'
        }},
    { path: '/news', component: News, meta: {
        title: 'Revived.club - Home'
        }},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "Revived.club - Testing";
    next();
});

export default router;
