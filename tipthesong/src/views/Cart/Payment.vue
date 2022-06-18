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
                    <p v-if="mycards != null && mycards.lenght > 0"></p>
                    <p v-if="mycards != null && mycards.lenght > 0"></p>
                    <p v-if="mycards != null && mycards.lenght > 0">Nome no cartão</p>
                    <p v-if="mycards != null && mycards.lenght > 0">Data de vencimento</p>
                    <template v-for="card in mycards" :key="card.id">
                        <input type="radio" v-model="selectedPaymentMethod" :name="card.name" v-bind:value="card.id">
                        <p> {{card.name}}</p>
                        <p> {{card.owner}}</p>
                        <p> {{card.dueDate}} </p>
                    </template>
                    <a href="#" style="grid-column: span 4" v-on:click="cardPopup = true">+ Adicionar um cartão</a>
                    <NewCardPopup v-if="cardPopup" @togglePopup="TriggerCardPopup"></NewCardPopup>

              
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
                    <h3 style="grid-column: span 3">Seus Endereços</h3>
                    <p v-if="myaddresses != null && myaddresses.lenght > 0"></p>
                    <p v-if="myaddresses != null && myaddresses.lenght > 0">Nome</p>
                    <p v-if="myaddresses != null && myaddresses.lenght > 0">Telefone</p>
                    <template v-for="address in myaddresses" :key="address.id">
                        <input type="radio" v-model="selectedAddress" :name="address.info" v-bind:value="address.id">
                        <p> {{address.info}}</p>
                        <p> {{address.refName}}</p>
                        <p> {{address.refPhone}} </p>
                    </template>
                    <a href="#" style="grid-column: span 3" v-on:click="addressPopup = true">+ Adicionar um endereço de entrega</a>
                    <NewAddressPopup v-if="addressPopup" @togglePopup="TriggerAddressPopup"></NewAddressPopup>

                </form>
            </div>
            <router-link to="/endpurchase" custom v-slot="{ navigate }"> 
                <button v-on:click="navigate" role="link" type="button"> CONTINUAR </button>
            </router-link>
        </div>


    </div>
</template>

<script>
import NewCardPopup from '../../components/Payment/NewCardPopup.vue'
import NewAddressPopup from '../../components/Payment/NewAddressPopup.vue'

export default {
    components: {
        NewCardPopup,
        NewAddressPopup
    },
    data() {
        return {
            cardPopup: false,
            addressPopup: false,
            selectedPaymentMethod: null,
            selectedAddress: null,
            mycards: [
                {
                    id: '111',
                    name: "(Crédito) Mastercard terminando em 1234",
                    owner: "MILENA C SILVA",
                    dueDate: "12/22",
                },
                {
                    id: '121',
                    name: "(Crédito) Mastercard terminando em 1234",
                    owner: "MILENA C SILVA",
                    dueDate: "12/22",
                }
            ],
        }
    },
    methods: {
        TriggerCardPopup() {
            this.cardPopup = !this.cardPopup;
        },
        TriggerAddressPopup() {
            this.addressPopup = !this.addressPopup;
        },
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 0 auto;
    min-width: 500px;
    color: var(--white);
}

.cartStatus {
    margin: 10px 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.cartStatus > h2 {
    color: var(--black);
 }

.active {
    color: var(--white) !important;
}

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
    column-gap: 1.5rem;
}
#addresses {
    display: grid;
    grid-template-columns: 1.25rem repeat(2, auto);
    column-gap: 1rem;
}

button {
    font-size: 1.2em;
    text-transform: uppercase;
}

a:link, a:visited, a:active {
   color: var(--secondary-dark);
}

a:hover {
    color: var(--secondary-light);
}

input[type='radio'] {
    color: var(--secondary-primary);
}

form > p {
    padding: 0;
    margin: 0;
}

</style>
