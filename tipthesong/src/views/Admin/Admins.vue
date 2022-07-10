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
             admin: null,
             popupEdit: false,
             popupCreate: false,
         };
     },
     async created() {
         this.$store.getters.getAdminList;
     },
     computed: {
         adminList() {
            return this.$store.getters.getAdminList;
         },
         admins() {
            const _admins = this.adminList;

            return _admins?.map(admin => [
                {
                    content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                    style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                    id: parseInt(admin?.id),
                }, {
                    content: `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                    style: "height: 100%; display: block; margin: 0 auto;",
                }, 
                {
                    content: `${admin?.name}#${admin?.id}`,
                    style: "cursor: pointer",
                    id: ["upsert", admin?.id],
                },
                admin?.email,
            ]);
         },
     },
     methods: {
         handleClick(e) {
             console.log(e)
             if(!e) return;
             else if (e[0] == 'upsert') this.admin = this.adminList.find(admin => admin.id == e[1]);
             else if (typeof(e) == 'number') return this.removeIdx(e);
             this.popupEdit = true;
         },
         removeIdx(id) {
             this.$store.dispatch('removeFromAdminList', {
                id: id,
             })
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

 .hide {
     display: none;
 }
</style>
