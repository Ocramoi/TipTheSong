<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar class="sidebar"/>
            <div class="profileBox">
                <h2> MEUS ENDEREÇOS </h2>
                <FlexTable
                    v-if="addresses.length"
                    :titles="tableTitles"
                    :values="addresses" />
                <span v-else>Nenhum endereço cadastrado por enquanto!</span>
                <button v-on:click="addressPopup = true">
                    Adicionar Endereço
                </button>
                <NewAddressPopup v-if="addressPopup" @togglePopup="triggerAddressPopup" />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../../components/Profile/Sidebar.vue'
import FlexTable from '../../components/App/FlexTable.vue'
import NewAddressPopup from '../../components/Payment/NewAddressPopup.vue'

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
        }
    },
    components: {
        Sidebar,
        FlexTable,
        NewAddressPopup
    },
    methods: {
        triggerAddressPopup() {
            this.addressPopup = !this.addressPopup;
        },
    },
    computed: {
        addresses() {
            return this.$store.getters.getUserInfo.addresses;
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
