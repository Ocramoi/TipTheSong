<template>
    <div class="container">
        <div class="innerContainer">
            <h2>Usuários</h2>
            <div class="productBox">
                <FlexTable
                    @clicked="removeFromId"
                    :titles="tableTitles"
                    :values="users"
                    rowHeight="4rem"/>
            </div>
        </div>
        <div class="bts">
            <router-link :to="{ name: 'AdminHomepage'}">
                <button class="backBtn">VOLTAR</button>
            </router-link>
        </div>
    </div>
</template>

<script>
 import FlexTable from '../../components/App/FlexTable.vue';

 export default {
     name: "AdminUsers",
     components: {
         FlexTable,
     },
     data() {
         return {
             tableTitles: [
                 "",
                 "",
                 "Usertag",
                 "Email"
             ],
             users: [], // TODO computed do back
         };
     },
     created() {
         this.users = [ // TODO computed do back
            [
                {
                    content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                    style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                    id: 0,
                },
                `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                `${this.user.name}#${this.user.id}`,
                this.user.email,
            ], [
                {
                    content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                    style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                    id: 1,
                },
                `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                `${this.user.name}#${this.user.id}`,
                this.user.email,
            ], [
                {
                    content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                    style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                    id: 2,
                },
                `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                `${this.user.name}#${this.user.id}`,
                this.user.email,
            ]
         ];
     },
     computed: {
         user() { // TODO remover quando carregando do back
             return {
                 id: "999",
                 name: "Robertin",
                 email: "robertin@gmail.com",
             };
         },
     },
     methods: {
         removeFromId(idx) {
             this.users.splice(idx, 1);
         },
     }
 }
</script>

<style scoped>
 :deep(.trashIcon) {
     font-size: 1.1em;
     margin: auto 10px;
     display: block;
     width: 100%;
 }
 :deep(.userPhoto) {
     box-sizing: border-box;
     padding: 0.25rem;
 }

 @media screen and (max-width: 599px) {
     :deep(.userPhoto) {
         display: none;
     }
 }

 .bts {
     margin-top: 1rem;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: space-between;
     align-items: center;
 }
</style>
