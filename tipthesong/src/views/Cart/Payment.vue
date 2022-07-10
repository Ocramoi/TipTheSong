<template>

    <div class="container">                    
        <div class="cartStatus">
            <h2> Carrinho de compras </h2>
            <h2 class="active"> Envio e pagamento </h2>
            <h2> Finalizar pedido </h2>
        </div>
        
        <div class="innerContainer">
            <div class="card">
                <h2>FORMA DE PAGAMENTO</h2>
                <form id="paymentMethods">
                    <h3 style="grid-column: span 4">Seus Cartões</h3>
                    <p v-if="cards != null && cards.length > 0"></p>
                    <p v-if="cards != null && cards.length > 0"></p>
                    <p v-if="cards != null && cards.length > 0">Nome no cartão</p>
                    <p v-if="cards != null && cards.length > 0">Data de vencimento</p>
                    <template v-for="card in cards" :key="card._id">
                        <input type="radio" v-model="selectedPaymentMethod" :name="card.cardNumber" v-bind:value="card._id">
                        <p> {{card.cardNumber}}</p>
                        <p> {{card.ownerName}}</p>
                        <p> {{card.dueData}} </p>
                    </template>
                    <a href="#" style="grid-column: span 4" v-on:click="cardPopup = true">+ Adicionar um cartão</a>
                    <CardUpsertPopup v-if="cardPopup" @togglePopup="TriggerCardPopup" />

              
                    <h3 style="grid-column: span 4"> Boleto </h3>
                        <input type="radio" v-model="selectedPaymentMethod" name="boleto" v-bind:value="'Boleto'">
                        <p style="grid-column: span 3">Vencimento em 1 dia útil. A data de entrega será alterada devido ao tempo de processamento do Boleto. Veja mais na próxima página.</p>


                    <h3 style="grid-column: span 4"> Pix </h3>
                        <input type="radio" v-model="selectedPaymentMethod" name="pix" v-bind:value="'Pix'">
                        <p style="grid-column: span 3">Vencimento em 30 minutos. Após o pagamento seu pedido será processado.</p>
                </form>

            </div>

            <div class="card">
                <h2>ENDEREÇO DE ENTREGA</h2>
                <form id="addresses">
                    <h3 style="grid-column: span 4">Seus Endereços</h3>
                    <p v-if="addresses != null "></p>
                    <p v-if="addresses != null && addresses.length > 0"></p>
                    <p v-if="addresses != null && addresses.length > 0">Nome</p>
                    <p v-if="addresses != null && addresses.length > 0">Telefone</p>
                    <template v-for="address in addresses" :key="address._id">
                        <input type="radio" v-model="selectedAddress" :name="address.address" v-bind:value="address._id">
                        <p> {{address.address}}</p>
                        <p> {{address.name}}</p>
                        <p> {{address.phone}} </p>
                    </template>
                    <a href="#" style="grid-column: span 3" v-on:click="addressPopup = true">+ Adicionar um endereço de entrega</a>
                    <AddressUpsertPopup v-if="addressPopup" @togglePopup="TriggerAddressPopup" />

                </form>
            </div>
            <router-link to="/endpurchase" custom v-slot="{ navigate }"> 
                <button v-on:click="navigate" role="link" type="button"> CONTINUAR </button>
            </router-link>
        </div>


    </div>
</template>

<script>
import CardUpsertPopup from '../../components/Payment/CardUpsertPopup.vue'
import AddressUpsertPopup from '../../components/Payment/AddressUpsertPopup.vue'

export default {
    components: {
        CardUpsertPopup,
        AddressUpsertPopup,
    },
    data() {
        return {
            cardPopup: false,
            addressPopup: false,
            selectedPaymentMethod: null,
            selectedAddress: null,
        }
    },
    methods: {
        TriggerCardPopup() {
            this.cardPopup = !this.cardPopup;
        },
        TriggerAddressPopup() {
            this.addressPopup = !this.addressPopup;
        },
    },
    computed: {
        cards() {
            return this.$store.getters.getUser?.cards.map(card => 
                card = {
                    _id: card._id,
                    cardNumber: card.cardNumber.substr(-4),
                    ownerName: card.ownerName,     
                    dueData: card.dueData,
                });
         },

        addresses() {
            return this.$store.getters.getUser?.addresses.map(address => 
                address = {
                    _id: address._id,
                    address: address.address,
                    name: address.name,
                    phone: address.phone,
                });
         },
    }
}
</script>

<style scoped>
@import url('../../css/Cart.css');
.innerContainer {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
}

.card {
    width: 100%;
    padding: 1rem;
    background-color: var(--primary-light);

    box-shadow: 5px 5px 10px var(--primary-dark);
    box-sizing: border-box;
    border-radius: 5px;       
}


#paymentMethods {
    display: grid;
    grid-template-columns: 1.25rem repeat(3, auto);
    column-gap: 0.5rem;
}
#addresses {
    display: grid;
    grid-template-columns: 1.25rem repeat(3, auto);
    column-gap: 0.5rem;
}

a:link, a:visited, a:active {
   color: var(--secondary-dark) !important;
}

a:hover {
    color: var(--secondary-light) !important;
}

input[type='radio'] {
    color: var(--secondary-primary);
}

form > p {
    padding: 0;
    margin: 0;
}

</style>
