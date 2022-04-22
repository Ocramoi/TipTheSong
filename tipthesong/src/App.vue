<template>
  <TopBar />
  <router-view />
  <Footer />
</template>

<script>
 import TopBar from './components/TopBar';
 import Footer from './components/Footer';

 export default {
     name: 'App',
     components: {
         TopBar,
         Footer,
     }
 }
</script>

<style type="text/scss" media="screen">
 @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

 :root {
     --bg: #fcfcfc;
     --grey: #E6E6E6;
     --shadow: rgb(142, 142, 142);
 }

 body {
     padding: 0;
     margin: 0;
 }

 #app {
     background-color: var(--bg);
     padding: 0;
     margin: 0;
     box-sizing: border-box;
     width: 100%;
 }

 #app * {
     font-family: 'Roboto', sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
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

 button {
     border: 1px solid black;
     background: var(--bg);
     color: currentColor;
     padding: 5px;
     border-radius: 10px;
     font-weight: bold;
     transition: 0.4s;
     cursor: pointer;
 }

 button:hover {
     transform: scale(1.05);
     transform-origin: center center;
 }

 .clickableIcon {
     transition: 0.4s !important;
     cursor: pointer;
 }

 .clickableIcon:hover {
     transform: scale(1.1) !important;
     transform-origin: center center !important;
 }

 a {
     color: currentColor;
     text-decoration: none;
 }
</style>

