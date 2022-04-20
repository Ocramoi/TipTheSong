import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    alias: ['/home', '/index'],
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home')
  }, {
    path: '/:catchAll(.*)',
    name: 'Error404',
    component: () => import(/* webpackChunkName: "Error404" */ '../views/NotFound')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresLogin) /* && store.getters.getIsLogged == false */) {
    // store.commit("setDoNotHavePermissionLogin", true);
    next("/")
  } else {
    next()
  }
});

export default router;
