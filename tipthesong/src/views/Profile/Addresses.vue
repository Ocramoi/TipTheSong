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
                <button @click="current = null; addressPopup = true">
                    Adicionar Endereço
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
                 ...this._addresses[e],
             };
             this.addressPopup = true;
         },
     },
     computed: {
         _addresses() {
             return this.$store.getters.getUser.addresses;
         },
         addresses() {
             return this._addresses
                        .map((address, idx) => [
                            {
                                content: address.address,
                                id: idx,
                            }, {
                                content: address.name,
                                id: idx,
                            }, {
                                content: address.phone,
                                id: idx,
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
