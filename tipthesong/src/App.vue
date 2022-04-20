<template>
  <Products />
</template>

<script>
//  import TopBar from './components/TopBar';
import Products from './views/Products'

 export default {
   name: 'App',
   components: {
     Products,
   }
 }
</script>

<style type="text/scss" media="screen">
 @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

 :root {
   --bg: #fcfcfc;
   --topbar-bg: #6f6f6f;
   --grey: #797979;
 }

 body {
   padding: 0;
   margin: 0;
 }

 #app {
   font-family: 'Roboto', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   background-color: var(--bg);
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   width: 100%;
 }

 input {
   font-weight: 400;
   cursor: pointer;
 }

 input[type="text"] {
   border: 0;
   background-color: var(--bg);
   font-style: italic;
   padding: 5px;
   outline: none;
 }
</style>

