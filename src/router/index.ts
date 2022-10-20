/*eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const noAuthList: Array<string> = [];

router.beforeEach(async (to, from, next) => {
  // 网页title
  const hasToken = localStorage.getItem('APP_TOKEN_KEY');
  if (hasToken) {
    to.name == 'Login' ? next('/') : null;
    try {
      // get user info
      // await store.dispatch('user/userGet');
      next();
    } catch (error) {
      // remove token and go to home
      // await store.dispatch('user/userLogout');
    }
  } else {
    // has no token
    if (noAuthList.indexOf(to.name as string) !== -1) {
      next();
    } else {
      next({ name: 'Login', query: { redirect: '/login' }});
    }
  }
});

export default router;
