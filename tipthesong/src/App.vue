<template>
    <AdminTopBar v-if="$route.path.match('/admin/')"/>
    <TopBar v-if="!$route.path.match('/admin')"/>
    <div class="contentWrapper">
        <router-view />
    </div>
    <Footer />
</template>

<script>
 import TopBar from './components/App/TopBar';
 import AdminTopBar from './components/Admin/TopBar.vue'
 import Footer from './components/App/Footer';

 export default {
     name: 'App',
     components: {
         TopBar,
         AdminTopBar,
         Footer,
     }
 }
</script>

<style type="text/scss" media="screen">
 @import url('./assets/root.css');
 @import url('./css/Global.css');

 body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
 }

 #app {
     position: relative;
     background-color: var(--bg);
     padding: 0;
     margin: 0;
     box-sizing: border-box;
     width: 100%;
     min-height: inherit;
}

 #app * {
     font-family: 'Roboto Mono', sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     color: var(--white);
 }

 .contentWrapper {
   padding-bottom: 7rem;
}

 @media screen and (min-width: 850px) {
     .contentWrapper {
         width: 90%;
         margin: 0 auto;
     }
 }



</style>

