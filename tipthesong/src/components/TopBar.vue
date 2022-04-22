<template>
    <div class="topBar">
        <div class="topRow">
            <div class="searchBar">
                <label for="search">
                    <i class="fas fa-search"></i>
                </label>
                <input v-model="search" type="text" name="search" />
            </div>
            <router-link to="/">
                <img
                    class="topbarLogo"
                    src="../assets/Global/logo.png"
                    alt="Logo" />
            </router-link>
            <div class="personal">
                <div class="topbarButton">
                    Entrar
                </div>
                <router-link to="/cart" class="topbarButton">
                    Carrinho
                </router-link>
            </div>
        </div>
        <div class="bottomRow">
            <div class="topbarButton">
                Quem somos?
            </div>
            <router-link to="/products" class="topbarButton">
                Produtos
            </router-link>
            <div class="topbarButton">
                Minha coleção
            </div>
            <div class="topbarButton">
                Contato
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
 export default {
     name: "TopBar",
     data() {
         return {
             search: "",
         };
     },
 };
</script>

<style type="text/scss" media="screen" scoped>
 .topBar {
     width: 100%;
     position: sticky;
     z-index: 100;
     top: 0;
     left: 0;
     background-color: var(--grey);
     padding: 0.7rem;
     transition: 0.4s;
     transition-timing-function: ease-in-out;
     box-sizing: border-box;
     box-shadow: 0 0 5px var(--shadow);
 }

 .topBar.large {}

 .topBar.small {}

 .topRow {
     width: 100%;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: space-between;
     align-items: center;
 }

 .topRow > * {
     margin: 0 auto;
 }

 .searchBar {
     width: 30%;
     max-width: 300px;
     display: grid;
     grid-template-columns: auto 1fr;
     grid-template-rows: auto;
     align-items: center;
     justify-content: center;
     column-gap: 10px;
     background-color: var(--bg);
     cursor: pointer;
 }

 .searchBar > label {
     padding: 5px;
     color: var(--grey);
 }

 .topbarLogo {
     width: 100%;
     max-width: 6rem;
     filter: grayscale(1.0);
     transition: 0.4s;
 }

 .topbarLogo:hover {
     transform: scale(1.1);
     transform-origin: center center;
 }

 .personal {
     display: grid;
     grid-template-columns: 1fr 1fr;
     grid-template-rows: auto;
     width: 30%;
     max-width: 300px;
 }

 .personal > * {
     border-left: 1px solid black;
     transition: 0.4s;
 }

 .personal > *:first-child {
     border: 0 !important;
 }

 .personal > *:hover {
     border: 1px solid black !important;
     transform: scale(1.1);
     transform-origin: center center;
 }

 .topbarButton {
     background-color: var(--bg);
     text-align: center;
     padding: 5px;
     cursor: pointer;
 }

 .personal > .topbarButton {
     width: 100%;
 }

 .bottomRow {
     margin-top: 0.5em;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     width: 100%;
     justify-content: center;
     align-items: center;
     text-align: center;
 }

 .bottomRow > .topbarButton {
     margin: 5px 20px;
     box-sizing: border-box;
     font-size: 1.2em;
     transition: 0.4s;
     background-color: transparent;
 }

 .bottomRow > .topbarButton:hover {
     transform: scale(1.1);
     transform-origin: center center;
 }
</style>
