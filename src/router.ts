// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import Analyse from './views/Analyse.vue';
import MGC from './views/MGC.vue';
import QA from './views/QA.vue';
import Solution from './views/Solution.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/analyse', component: Analyse },

    { path: '/mgc', component: MGC },
    { path: '/qa', component: QA },
    { path: '/solution', component: Solution },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
