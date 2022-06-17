import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    alias: ['/home', '/index'],
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "Products" */ '../views/Products')
  },
  {
    path: '/product/:idProduct',
    name: 'Product',
    component: () => import(/* webpackChunkName: "Products" */ '../views/Product')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart/MyCart')
  },
  {
    path: '/login',
    name: 'LoginSignUp',
    component: () => import(/* webpackChunkName: "LoginSignUp" */ '../views/LoginSignUp')
  },
  {
    path: '/whoweare',
    name: 'WhoWeAre',
    component: () => import(/* webpackChunkName: "WhoWeAre" */ '../views/WhoWeAre')
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "ContactUs" */ '../views/ContactUs')
  }, 
  {
    path: '/payment',
    name: 'Payment',
    component: () => import(/* webpackChunkName: "Payment" */ '../views/Cart/Payment')
  }, 
  {
    path: '/endpurchase',
    name: 'EndPurchase',
    component: () => import(/* webpackChunkName: "Payment" */ '../views/Cart/EndPurchase')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin/Login')
  }, 
  {
    path: '/admin/homepage',
    name: 'AdminHomepage',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin/Homepage')
  }, 
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "Order" */ '../views/Cart/Order')
  }, 
  {
    path: '/profile/edit',
    alias: "/profile",
    name: 'ProfileEdit',
    component: () => import(/* webpackChunkName: "ProfileEdit" */ '../views/Profile/Edit')
  },
  {
    path: '/profile/payment',
    name: 'ProfilePayment',
    component: () => import('../views/Profile/Payment'),
  },
  {
    path: '/admin/products',
    name: 'AdminManageProducts',
    component: () => import(/* webpackChunkName: "Order" */ '../views/Admin/ManageProducts')
  }, 
  {
    path: '/profile/addresses',
    name: 'ProfileAddresses',
    component: () => import(/* webpackChunkName: "Order" */ '../views/Profile/Address')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error404',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound')
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
