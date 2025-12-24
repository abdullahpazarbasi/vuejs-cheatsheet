import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ExamplePage from '@/pages/ExamplePage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/examples/:id', name: 'example', component: ExamplePage, props: true },
        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
    ],
});

router.beforeEach((to) => {
    // Example guard: normalize trailing slashes (tiny, non-invasive)
    if (to.path.length > 1 && to.path.endsWith('/')) {
        return { path: to.path.replace(/\/+$/, ''), query: to.query, hash: to.hash };
    }
    return true;
});
