<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar class="sidebar"/>
            <div class="profileBox">
                <h2> MEUS ENDEREÇOS </h2>
                <FlexTable
                    @clicked="handleEvent"
                    v-if="addresses.length"
                    :titles="tableTitles"
                    :values="addresses" />
                <span v-else>Nenhum endereço cadastrado por enquanto!</span>
                <button class="addBtn" @click="current = null; addressPopup = true">
                    <i class="fa-solid fa-plus"></i>
                </button>
                <AddressUpsertPopup
                    v-show="addressPopup"
                    :current="current"
                    @togglePopup="triggerAddressPopup" />
            </div>
        </div>
    </div>
</template>

<script>
 import Sidebar from '../../components/Profile/Sidebar.vue'
 import FlexTable from '../../components/App/FlexTable.vue'
 import AddressUpsertPopup from '../../components/Payment/AddressUpsertPopup.vue'

 export default {
     inject: ['notyf'],
     name: "ProfileAddresses",
     data() {
         return {
             addressPopup: false,
             tableTitles: [
                 "Endereço",
                 "Nome",
                 "Telefone"
             ],
             current: null,
         };
     },
     components: {
         Sidebar,
         FlexTable,
         AddressUpsertPopup,
     },
     methods: {
         triggerAddressPopup() {
             this.addressPopup = !this.addressPopup;
         },
         handleEvent(e) {
             if (e == null) return;
             this.current = {
                 id: e,
                 ...this._addresses.find(address => address._id == e),
             };
             this.addressPopup = true;
         },
     },
     computed: {
         _addresses() {
            return this.$store.getters.getUser?.addresses
         },
         addresses() {
            return this._addresses.map(address =>
                [{
                    content: address.address,
                    id: address._id,
                }, {
                    content: address.name,
                    id: address._id,
                }, {
                    content: address.phone,
                    id: address._id,
                },
            ]);
         },
     },
 }
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
