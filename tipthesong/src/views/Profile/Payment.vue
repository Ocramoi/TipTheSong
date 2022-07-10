<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar class="sidebar"/>
            <div class="profileBox">
                <h2> Meus cartões </h2>
                <FlexTable
                    v-if="cards.length"
                    :titles="tableTitles"
                    :values="cards" />
                <span v-else>Nenhum cartão cadastrado por enquanto!</span>
                <button class="addBtn" v-on:click="cardPopup = true">
                    <i class="fa-solid fa-plus"></i>
                </button>
                <CardUpsertPopup v-if="cardPopup" @togglePopup="TriggerCardPopup" />
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
 import Sidebar from '../../components/Profile/Sidebar.vue';
 import FlexTable from '../../components/App/FlexTable.vue';
 import CardUpsertPopup from '../../components/Payment/CardUpsertPopup.vue'

 export default {
     inject: ['notyf'],
     name: "ProfilePayment",
     data() {
         return {
             tableTitles: [
                 "Nome do cartão",
                 "Titular",
                 "Vencimento",
             ],
             cardPopup: false,
         };
     },
     components: {
         Sidebar,
         FlexTable,
         CardUpsertPopup,
     },
     methods: {
        TriggerCardPopup() {
            this.cardPopup = !this.cardPopup;
        },
     },
     computed: {
         cards() {
            return this.$store.getters.getUser.cards.map(card => 
                [{
                    id: card._id,
                    content: card.cardNumber.substr(-4)
                }, {
                    id: card._id,
                    content: card.ownerName,     
                }, {
                    id: card._id,
                    content:card.dueDate,
                }]);
         },
     },
 };
</script>

<style type="text/css" media="screen" scoped>
 @import url('../../css/Profile.css');

 h2 {
     text-transform: uppercase;
 }

 button {
     font-size: 1.05em;
 }
</style>
