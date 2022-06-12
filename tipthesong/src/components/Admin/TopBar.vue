<template>
    <div class="topBar">
        <div class="topRow">
            <div class="topbarLogo">
                <img
                    src="../../assets/Global/logo2.png"
                    alt="Logo" />
                <p> ÁREA DO ADMINISTRADOR </p>
            </div>
            <div class="personal">
                <router-link
                    to="/admin/homepage">
                    <button
                        type="button"
                        :class="{ 'active': $route.name == 'AdminHomepage' }">
                        Início
                    </button>
                </router-link>
                <router-link to="/">
                    <button type="button">
                        Sair
                    </button>
                </router-link>
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
     background-color: var(--primary);
     padding: 5px;
     transition: 0.4s;
     transition-timing-function: ease-in-out;
     box-sizing: border-box;
     box-shadow: 0 0 5px var(--primary-dark);
 }


 .topRow {
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     margin-top: 5px;
 }

 .topbarLogo {
     width: 100%;
     display: flex;
     flex-direction: row;
     align-items: center;
     gap: 1rem;
 }

 .topbarLogo > img {
     width: 100%;
     max-width: 3rem;
     transition: 0.4s;
     cursor: pointer;
 }

 .topbarLogo > p {
     padding: 0;
     margin: 0;
     color: var(--white);
     font-size: 1.2rem;
 }

.personal {
     width: 30%;
     max-width: 400px;
     align-items: center;
     display: grid;
     grid-template-columns: 1fr 1fr;
     column-gap: 10px;
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

 .active {
     background-color: var(--secondary-dark) !important;
 }


</style>
