<template>
    <div class="container">
        <div class="innerContainer">
            <h2>Usuários</h2>
            <div class="productBox">
                <FlexTable
                    @clicked="handleEvent"
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
                 "",
                 "Usertag",
                 "Email"
             ],
         };
     },
     async created() {
        this.$store.dispatch('loadUsers');
     },
     computed: {
         users() {
            return this.$store.getters.getUsers?.map(user => [
                {
                    content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                    style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                    id: ['delete', user._id],
                }, {
                    content: '<i class="clickableIcon fa-solid fa-arrow-up"></i>',
                    style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                    id: ['promote', user._id],
                }, {
                    content: `<img class="userPhoto" src="${require('../../assets/Profile/do-utilizador.png')}" />`,
                    style: "height: 100%; display: block; margin: 0 auto;",
                    id: ['upsert']
                }, 
                {
                    id: ['upsert'],
                    content: user.name,
                }, {
                    id: ['upsert'],
                    content: user.email,
                }
            ]);
         }
     },
     methods: {
        handleEvent(e) {
            if (e == null) return;
          
            const [action, id] = e;
            if (action == 'delete') {
                return this.deleteUser(id);
            } else if (action == 'promote') {
                return this.promoteUser(id);
            }
        },
        async deleteUser(id) {
            await this.$store.dispatch('deleteUser', { userId: id });
        },
        async promoteUser(id) {
            await this.$store.dispatch('promoteUser', { userId: id });
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
</style>
