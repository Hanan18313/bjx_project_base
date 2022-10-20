import { RouteRecordRaw } from 'vue-router';

const routers: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/_404.vue'),
  },
];

export default routers;