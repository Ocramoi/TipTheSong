<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar class="sidebar"/>
            <div class="profileBox">
                <h2> Meus cartões </h2>
                <FlexTable
                    :titles="tableTitles"
                    :values="cards" />
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
             return [
                 [
                     "(Crédito) Mastercard terminando em 1234",
                     "Milena C. Silva",
                     "12/22",
                 ],
                 [
                     "(Crédito) Mastercard terminando em 1234",
                     "Milena C. Silva",
                     "12/22",
                 ],
             ];
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
