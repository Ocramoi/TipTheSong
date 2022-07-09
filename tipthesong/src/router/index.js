import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
  {
    path: '/',
    alias: ['/home', '/index'],
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "Products" */ '../views/Products'),
  },
  {
    path: '/product/:idProduct',
    name: 'Product',
    component: () => import(/* webpackChunkName: "Products" */ '../views/Product'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart/MyCart'),
  },
  {
    path: '/login',
    name: 'LoginSignUp',
    component: () => import(/* webpackChunkName: "LoginSignUp" */ '../views/LoginSignUp'),
  },
  {
    path: '/whoweare',
    name: 'WhoWeAre',
    component: () => import(/* webpackChunkName: "WhoWeAre" */ '../views/WhoWeAre'),
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "ContactUs" */ '../views/ContactUs'),
  }, 
  {
    path: '/payment',
    name: 'Payment',
    component: () => import(/* webpackChunkName: "Payment" */ '../views/Cart/Payment'),
    meta: { requiresLogin: true },
  }, 
  {
    path: '/endpurchase',
    name: 'EndPurchase',
    component: () => import(/* webpackChunkName: "Payment" */ '../views/Cart/EndPurchase'),
    meta: { requiresLogin: true },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin/Login'),
    meta: {},
  }, 
  {
    path: '/admin/homepage',
    name: 'AdminHomepage',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin/Homepage'),
    meta: { requiresLogin: true, requiresAdminPermission: true },
  }, 
  {
    path: '/admin/admins',
    name: 'AdminAdmins',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin/Admins'),
    meta: { requiresLogin: true, requiresAdminPermission: true },
  }, 
  {
    path: '/admin/users',
    name: 'AdminUsers',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin/Users'),
    meta: { requiresLogin: true, requiresAdminPermission: true },
  }, 
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "Order" */ '../views/Cart/Order'),
    meta: { requiresLogin: true },
  }, 
  {
    path: '/profile/edit',
    alias: "/profile",
    name: 'ProfileEdit',
    component: () => import(/* webpackChunkName: "ProfileEdit" */ '../views/Profile/Edit'),
    meta: { requiresLogin: true },
  },
  {
    path: '/profile/payment',
    name: 'ProfilePayment',
    component: () => import('../views/Profile/Payment'),
    meta: { requiresLogin: true },
  },
  {
    path: '/profile/orders',
    name: 'ProfileOrders',
    component: () => import('../views/Profile/Orders'),
    meta: { requiresLogin: true },
  },
  {
    path: '/admin/products',
    name: 'AdminProducts',
    component: () => import(/* webpackChunkName: "Order" */ '../views/Admin/Products'),
    meta: { requiresLogin: true, requiresAdminPermission: true },
  }, 
  {
    path: '/profile/addresses',
    name: 'ProfileAddresses',
    component: () => import(/* webpackChunkName: "Order" */ '../views/Profile/Addresses'),
    meta: { requiresLogin: true },
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error404',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Redirecionamentos de páginas caso já logado
const loggedRedirects = {
  "LoginSignUp": "/profile",
};

router.beforeEach((to, from, next) => {
  if ((to.matched.some(record => record.meta.requiresLogin) && store.getters.getIsLogged == false) || (to.matched.some(record => record.meta.requiresAdminPermission) && store.getters.getPermDenied)) {
    store.dispatch("unauthNotyf", true);
  } else {
    if (store.getters.getIsLogged)
      next(loggedRedirects[to.name]);
    else
      next();
  }
});

export default router;
