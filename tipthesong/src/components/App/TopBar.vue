<template>
    <div class="topBar">
        <div class="topRow">
            <div class="searchBar">
                <label for="search" @click="searchBar">
                    <i class="fa-solid fa-magnifying-glass clickableIcon" ></i>
                </label>
                <input v-model="search" type="text" name="search" placeholder="Pesquisar..."  v-on:keyup.enter="searchBar"/>
            </div>
            <img
                class="topbarLogo"
                :src="require('../../assets/Global/logo-v1.svg')"
                alt="Logo" />
            <div class="personal">
                <router-link
                    to="/login">
                    <button
                        type="button"
                        :class="{
                            'active': userPage,
                        }">
                        {{ $store.getters.getIsLogged ? userInfo.name?.split(' ')[0] : 'Entrar' }}
                    </button>
                </router-link>
                <router-link to="/cart">
                    <button
                        type="button"
                        :class="{ 'active': $route.name == 'Cart' }">
                        Carrinho
                    </button>
                </router-link>
            </div>
        </div>
        <div class="bottomRow">
            <router-link to="/" class="topbarButton">
                Início
            </router-link>
            <router-link to="/products" class="topbarButton">
                Produtos
            </router-link>
            <router-link to="/whoweare" class="topbarButton">
                Quem somos?
            </router-link>
            <router-link to="/contact" class="topbarButton">
                Contato
            </router-link>
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
     created() {
         // this.$store.dispatch("setUserInfo");
     },
     computed: {
         userInfo() {
             return this.$store.getters.getUser;
         },
         userPage() {
             try {
                 return this?.$route?.name == 'LoginSignUp' ||
                        this?.$route?.name.includes("Profile");
             } catch (e) {
                 return false;
             }
         },
     },
     methods: {
         searchBar() {
            console.log(this.search);
             this.$router.push({
                 name: 'Products',
                 query: { q: this.search },
             });
         }
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
     background-color: var(--primary);
     padding: 5px;
     transition: 0.4s;
     transition-timing-function: ease-in-out;
     box-sizing: border-box;
     box-shadow: 0 0 5px var(--primary-dark);
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
     margin-top: 5px;
 }

 .topRow > * {
     margin: 0 auto;
 }

 .searchBar {
     width: 30%;
     height: 2rem;
     max-width: 400px;
     display: grid;
     grid-template-columns: auto 1fr;
     grid-template-rows: auto;
     align-items: center;
     justify-content: center;
     column-gap: 10px;
     background-color: var(--primary-light);
     cursor: pointer;
     border: 0;
     border-radius: 2rem;
     overflow: hidden;
     color: var(--white);
 }

 .searchBar > input {
     padding: 0;
     background-color: var(--primary-light);
 }

 .searchBar > label {
     padding: 0;
     margin: 0;
     margin-left: 0.5rem;
     color: var(--white);
 }

 .topbarLogo {
     width: 100%;
     max-width: 7rem;
     transition: 0.4s;
     cursor: pointer;
 }

 .topbarLogo:hover {
     transform: scale(1.1);
     transform-origin: center center;
 }

 .personal {
     width: 30%;
     max-width: 400px;
     align-items: center;
     display: grid;
     grid-template-columns: 1fr 1fr;
     column-gap: 10px;
 }

 .personal > * {
     width: 100%;
 }

 .personal * {
     font-size: 1.1rem;
 }

 .personal button {
     width: 100%;
     background-color: var(--primary-light);
     text-transform: none;
     height: 2rem !important;
     padding: 0;
     font-size: 1.1rem;
 }

 .personal button:hover {
     background-color: var(--primary-dark);
 }

 .topbarButton {
     text-align: center;
     padding: 5px;
     cursor: pointer;
     color: var(--white);
     font-size: 1.1rem;
 }

 .personal > .topbarButton {
     width: 100%;
 }

 .bottomRow {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     width: 100%;
     justify-content: center;
     align-items: center;
     text-align: center;
 }

 .bottomRow > .topbarButton {
     margin: 0px 20px;
     box-sizing: border-box;
     transition: 0.4s;
     background-color: transparent;
 }

 .bottomRow > .topbarButton:hover {
     transform: scale(1.1);
     transform-origin: center center;
 }

 input[type=text] {
     text-align: center;
 }

 .active {
     background-color: var(--secondary-dark) !important;
 }
</style>
