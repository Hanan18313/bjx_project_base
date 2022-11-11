import { RouteRecordRaw } from 'vue-router';

const requireModules = require.context('../views/', true, /index\.(jsx|tsx|vue)$/iu);
const modules: Array<RouteRecordRaw> = requireModules.keys().map((filePath: string) => {
  const path = filePath.toLowerCase().replace(/^\.|\/index\.(vue|tsx)/g, '');
  const name = path.replace(/^\//, '').replace(/\/(\w)/, ($0, $1) => $1.toUpperCase());
  const component = () => import(`@/views${filePath.replace(/^\./, '')}`);
  return {
    path,
    name,
    component,
  };
});

const routers: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect() {
      return '/home';
    },
    meta: {
      keepAlive: true,
    },
    children: [...modules],
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/_404.vue'),
  },
  {
    path: '/:pathMathch(.*)',
    redirect: '/404',
  },
];

export default routers;