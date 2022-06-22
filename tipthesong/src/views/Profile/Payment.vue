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
                <button v-on:click="cardPopup = true">Adicionar cartão</button>
                <NewCardPopup v-if="cardPopup" @togglePopup="TriggerCardPopup"></NewCardPopup>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
 import Sidebar from '../../components/Profile/Sidebar.vue';
 import FlexTable from '../../components/App/FlexTable.vue';
 import NewCardPopup from '../../components/Payment/NewCardPopup.vue'


 export default {
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
         NewCardPopup
     },
     methods: {
        TriggerCardPopup() {
            this.cardPopup = !this.cardPopup;
        },
     },
     computed: {
         cards() {
            return this.$store.getters.getUserInfo.cards;
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
