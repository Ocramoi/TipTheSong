<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar class="sidebar"/>
            <div class="profileBox">
                <h2> MEUS ENDEREÇOS </h2>
                <FlexTable
                    v-if="addresses.length"
                    @clicked="handleEvent"
                    class="flexTable"
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
                 "", 
                 "Endereço",
                 "Nome",
                 "Telefone",
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

             const [action, id] = e;
             if (action == 'upsert') {
                 this.current = {
                     id: id,
                     ...this._addresses.find(address => address._id == id),
                 };
                this.addressPopup = true;
             } else if (action == 'delete') {
                return this.deleteAddress(id)
             }
         },
         // Tá dando erro pra deletar o endereço do banco
         async deleteAddress(id) {
            this.$store.dispatch('deleteAddress', {
                addressId: id,
            });
         }
     },
     computed: {
         _addresses() {
            return this.$store.getters.getUser?.addresses
         },
         addresses() {
            return this._addresses.map(address =>
            [
                {
                     id: ["delete", address._id],
                     content: '<i class="fa-solid fa-trash"></i>',
                     style: "display: flex; align-items: center; width: 100%; height: 100%; justify-content: center; z-index: 10;",
                     class: "clickableIcon trashCan",
                },
                {
                    content: address.address,
                    id: ['upsert', address._id],
                }, {
                    content: address.name,
                    id: ['upsert', address._id],
                }, {
                    content: address.phone,
                    id: ['upsert', address._id],
                }
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
