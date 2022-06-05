<template>
    <TopBar />
    <div class="contentWrapper">
        <router-view />
    </div>
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
     --white: #fcfcfc;
     --black: #0f0f0f;
     --bg: #39454B;

     --primary: #263238;
     --primary-light: #4f5b62;
     --primary-dark: #000a12;

     --secondary: #bf360c;
     --secondary-light: #f9683a;
     --secondary-dark: #870000;
 }

 body {
    padding: 0;
    margin: 0;
 }

 #app {
     position: relative;
     background-color: var(--bg);
     padding: 0;
     margin: 0;
     box-sizing: border-box;
     width: 100%;
     min-height: 100vh;
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
     box-sizing: border-box;
 }

 button {
     text-transform: uppercase;
     border: 0;
     background: var(--secondary-dark);
     color: currentColor;
     padding: 10px;
     border-radius: 2rem;
     font-weight: bold;
     transition: 0.4s;
     cursor: pointer;
     width: max-content;
     color: var(--white);
 }

 button:hover {
     transform: scale(1.05);
     transform-origin: center center;
 }

 button:hover, button.active {
     background-color: var(--secondary-light);
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

