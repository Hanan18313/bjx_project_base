import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppView from '../App.vue';
import NotFound from '../views/_404.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../App.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/_404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
