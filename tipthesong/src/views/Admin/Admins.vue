<template>
    <div class="container">
        <div class="innerContainer">
            <h2>ADMINISTRADORES CADASTRADOS</h2>
            <div class="productBox">
                    <FlexTable
                        :titles="tableTitles"
                        :values="admins" 
                        rowHeight="4rem"/>
            </div>
        </div>
        <div class="bts">
            <router-link :to="{ name: 'AdminHomepage'}">
                <button class="backBtn">VOLTAR</button>
            </router-link>
            <button class="addBtn">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </div>
</template>

<script>
import FlexTable from '../../components/App/FlexTable.vue';

export default {
    name: "AdminAdmins",
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
            admin: {
                id: "999",
                name: "Robertin",
                email: "robertin@gmail.com",
            }
         };
     },
     computed: {
         admins() {
             return [
                [
                    '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                    `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                    `${this.admin.name}#${this.admin.id}`,
                    this.admin.email,
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
 .addBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    aspect-ratio: 1 / 1;
    width: min-content;
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