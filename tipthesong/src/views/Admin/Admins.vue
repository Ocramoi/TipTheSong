<template>
    <div class="container">
        <div class="innerContainer">
            <h2>ADMINISTRADORES CADASTRADOS</h2>
            <div class="productBox">
                <FlexTable
                    @clicked="handleEvent"
                    :titles="tableTitles"
                    :values="admins"
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
     inject: ['notyf'],
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
         };
     },
     async created() {
        this.$store.dispatch('loadAdmins');
     },
     computed: {
         admins() {
            return this.$store.getters.getAdmins?.map(admin => [
                {
                    content: '<i class="clickableIcon fa-solid fa-arrow-down"></i>',
                    style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                    id: ['demote', admin._id],
                }, {
                    content: `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                    style: "height: 100%; display: block; margin: 0 auto;",
                    id: ['upsert']
                }, 
                {
                    id: ['upsert'],
                    content: admin.name,
                }, {
                    id: ['upsert'],
                    content: admin.email,
                }
            ]);
         }
     },
     methods: {
        handleEvent(e) {
            if (e == null) return;
          
            const [action, id] = e;
            if (action == 'demote') {
                return this.demoteUser(id);
            }
        },
        async demoteUser(id) {
            await this.$store.dispatch('demoteUser', { userId: id });


            const error = this.$store.getters.getUserError; 
            if (error) {
                this.notyf.open({
                         type: 'error',
                         message: error,
                    });
            } else {
                this.notyf.open({
                         type: 'success',
                         message: "Usuário rebaixado com sucesso!",
                });
            }
        }
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
