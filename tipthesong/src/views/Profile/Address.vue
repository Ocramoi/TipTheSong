<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar />
            <div class="profileBox">
                <h2> MEUS ENDEREÇOS </h2>
                <FlexTable
                    :titles="tableTitles"
                    :values="addresses" />
                <button v-on:click="addressPopup = true">
                    Adicionar Endereço
                </button>
                <NewAddressPopup v-if="addressPopup" :TriggerAddressPopup="() => TriggerAddressPopup()"></NewAddressPopup>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../../components/Profile/Sidebar.vue'
import FlexTable from '../../components/App/FlexTable.vue'
import NewAddressPopup from '../../components/Payment/NewAddressPopup.vue'

export default {
    data() {
        return {
            addressPopup: false,

            TriggerAddressPopup: function() {
                this.addressPopup = !this.addressPopup;
            },

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
    computed: {
        addresses() {
            return [
                [    
                    "Rua Paulo Americo 289, Jardim Lutfalla, São Carlos, SP 13567594, Brasil",
                    "Milena Correa da Silva",
                    "55+ 24 988380298"
                ],
            ]
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
