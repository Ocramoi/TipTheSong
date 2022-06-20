<template>
    <AdminTopBar v-if="$route.path.match('/admin/')"/>
    <TopBar class="desktop" v-if="!$route.path.match('/admin')"/>
    <TopBarMobile class="mobile" v-if="!$route.path.match('/admin')"/>
    <div class="contentWrapper">
        <router-view />
    </div>
    <Footer />
</template>

<script>
 import TopBar from './components/App/TopBar';
 import AdminTopBar from './components/Admin/TopBar.vue'
 import Footer from './components/App/Footer';
 import TopBarMobile from './components/App/TopBarMobile.vue';

 export default {
     name: 'App',
     inject: ['notyf'],
     components: {
         TopBar,
         AdminTopBar,
         Footer,
         TopBarMobile,
     },
     watch: {
         loginFailed(state) {
             if (state)
                 this.notyf.open({
                     type: 'error',
                     message: "Não autenticado",
                 });
             this.$store.dispatch("unauthNotyf", false);
         },
     },
     computed: {
         loginFailed() {
             return this.$store.getters.getUnauthNotyf;
         },
     },
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

@media screen and (max-width: 599px) {
    .desktop {
        display: none;
    } 
}

@media screen and (min-width: 600px) {
    .mobile {
        display: none;
    } 
}

</style>

