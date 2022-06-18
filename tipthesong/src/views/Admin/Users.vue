<template>
    <div class="container">
        <div class="innerContainer">
            <h2>Usuários</h2>
            <div class="productBox">
                    <FlexTable
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
            user: {
                id: "999",
                name: "Robertin",
                email: "robertin@gmail.com",
            }
         };
     },
     computed: {
         users() {
             return [
                [
                    '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                    `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                    `${this.user.name}#${this.user.id}`,
                    this.user.email,
                ],
                [
                    '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                    `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                    `${this.user.name}#${this.user.id}`,
                    this.user.email,
                ],
                [
                    '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                    `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                    `${this.user.name}#${this.user.id}`,
                    this.user.email,
                ]
             ];
         },
     },
    methods: {
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

.bts {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>