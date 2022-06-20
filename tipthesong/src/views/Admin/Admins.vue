<template>
    <AdminUpsert
        :class="{ 'hide': !popupEdit }"
        @togglePopup="popupEdit = !popupEdit"
        :payload="admin" />

    <AdminUpsert
        :class="{ 'hide': !popupCreate }"
        @togglePopup="popupCreate = !popupCreate" />

    <div class="container">
        <div class="innerContainer">
            <h2>ADMINISTRADORES CADASTRADOS</h2>
            <div class="productBox">
                <FlexTable
                    @clicked="handleClick"
                    :titles="tableTitles"
                    :values="admins"
                    rowHeight="4rem"/>
            </div>
        </div>
        <div class="bts">
            <router-link :to="{ name: 'AdminHomepage'}">
                <button class="backBtn">VOLTAR</button>
            </router-link>
            <button class="addBtn" @click="popupCreate = !popupCreate">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </div>
</template>

<script>
 import FlexTable from '../../components/App/FlexTable.vue';
 import AdminUpsert from '../../components/Admin/AdminUpsertPopup';

 export default {
     name: "AdminAdmins",
     components: {
         FlexTable,
         AdminUpsert,
     },
     data() {
         return {
             tableTitles: [
                 "",
                 "",
                 "Usertag",
                 "Email"
             ],
             admins: [],
             popupEdit: false,
             popupCreate: false,
         };
     },
     created() {
         this.admins = [
             [
                 {
                     content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                     style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                     id: 0,
                 }, {
                     content: `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                     style: "height: 100%; display: block; margin: 0 auto; cursor: pointer;",
                     id: "upsert",
                 },
                 `${this.admin.name}#${this.admin.id}`,
                 this.admin.login,
             ], [
                 {
                     content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                     style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                     id: 0,
                 }, {
                     content: `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                     style: "height: 100%; display: block; margin: 0 auto; cursor: pointer;",
                     id: "upsert",
                 },
                 `${this.admin.name}#${this.admin.id}`,
                 this.admin.login,
             ]
         ];
     },
     computed: {
         admin(){
             return {
                 id: "999",
                 name: "Robertin",
                 login: "robertin@gmail.com",
                 cellphone: "123456789",
                 password: "123",
             };
         },
     },
     methods: {
         handleClick(e) {
             if(!e) return;

             if (typeof(e) == 'number') return this.removeIdx(e);
             this.popupEdit = true;
         },
         removeIdx(idx) {
             this.admins.splice(idx, 1);
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

 .hide {
     display: none;
 }
</style>
