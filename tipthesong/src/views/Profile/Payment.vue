<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar class="sidebar"/>
            <div class="profileBox">
                <h2> Meus cartões </h2>
                <FlexTable
                    v-if="cards.length"
                    @clicked="handleEvent"
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
             cardPopup: false,
             tableTitles: [
                 "",
                 "Nome do cartão",
                 "Titular",
                 "Vencimento",
             ],
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
        handleEvent(e) {
            if (e == null) return;

            const [action, id] = e;
            if (action == 'delete') 
                return this.deleteCard(id)
        },
        async deleteCard(id) {
            this.$store.dispatch('deleteCard', {
                cardId: id
            })
        },
     },
     computed: {
         _cards() {
            return this.$store.getters.getUser?.cards
         },
         cards() {
            return this._cards.map(card => 
                [{
                     id: ['delete', card._id],
                     content: '<i class="fa-solid fa-trash"></i>',
                     style: "display: flex; align-items: center; width: 100%; height: 100%; justify-content: center; z-index: 10;",
                     class: "clickableIcon trashCan",
                }, {
                    id: ["", card._id],
                    content: card.cardNumber.substr(-4)
                }, {
                    id: ["", card._id],
                    content: card.ownerName,     
                }, {
                    id: ["", card._id],
                    content: card.dueData,
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
