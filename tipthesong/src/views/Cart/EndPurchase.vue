<template>
    <div class="container">                    
        <div class="cartStatus">
            <h2> Carrinho de compras </h2>
            <h2> Envio e pagamento </h2>
            <h2 class="active"> Finalizar pedido </h2>
        </div>
        
        <!-- Flex for all elements -->
        <div class="allInfo">
            <!-- Flex for address, payment method and Itens -->
            <div class="cartInfo">
                <!-- Flex for addres and Payment -->
                <div class="cart">
                    <div>
                        <h3>ENDEREÇO</h3>
                        <div class="card">
                            <span> {{ client.name }} </span>
                            <br>
                            <span> {{ client.address }} </span>
                            <br>
                            <span> {{ client.city }}, {{ client.state }} {{ client.CEP }} </span>
                            <br>
                            <span> {{ client.country }} </span>
                            <br>
                            <span> {{ client.cellphone }} </span>
                        </div>
                    </div>

                    <div>
                        <h3>FORMA DE PAGAMENTO</h3>
                        <div class="card">
                            <span> {{ client.payment }} </span>
                        </div>
                    </div>
                </div>
                <!-- flex for itens -->
                <div class="itens">
                    <h3> ITENS </h3>
                    <div class="item">
                        <EndItem v-for="item in items" :key="item.id" />
                    </div>
                </div>
            </div>
            <!-- Flex for request info -->
            <div class="cartTotals">
                <div>
                    <h3>RESUMO DO PEDIDO</h3>
                </div>

                <div class="innerFlexContainer">
                    <div class="totalRow">
                        <span>Itens:</span>
                    </div>
                    <div class="totalRow">
                        <span> R$100,00 </span>
                    </div>
                </div>
                <div class="innerFlexContainer">
                    <div class="totalRow">
                        <span>Frete e taxas:</span>
                    </div>
                    <div class="totalRow">
                        <span> R$0 </span>
                    </div>
                </div>
                <div class="innerFlexContainer">
                    <div class="totalRow">
                        <span style = "font-weight: bold"> TOTAL: </span>
                    </div>
                    <div class="totalRow">
                        <span style = "font-weight: bold"> R$100,00 </span>
                    </div>
                </div>
                
                <router-link to="/order" custom v-slot="{ navigate }"> 
                    <button  v-on:click="navigate" role="link"> FINALIZAR PEDIDO </button>
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>
    import EndItem from "../../components/Payment/EndItem";

    export default {
        components: {
            EndItem,
        },
        data() {
            return {
                items: [
                    {
                        id: 1,
                        name: 'Now, Not Yet (2019) - halfalive',
                        quantity: 1,
                        price: '90.00',
                    },
                    {
                        id: 2,
                        name: 'Now, Not Yet (2019) - halfalive',
                        quantity: 1,
                        price: '90.00',
                    }
                ],
                client: {
                    name: 'MILENA CORREA SILVA',
                    address: 'Rua Paulo Americo 289 apt 42 Jardim Lutfalla',
                    city: 'São Carlos',
                    state: 'SP',
                    CEP: '13567594',
                    country: 'Brasil',
                    cellphone: '55+ 24 988380238',
                    payment: 'Boleto',
                }
            }
        }
    }
</script>

<style scoped>
@import url('../../css/Cart.css');

    h3 {
        padding: 0;
        margin: 0;
    }
    
    .allInfo {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        flex: 1 0 100%;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
     
    .allInfo > * {
        flex: 1;
    }

    .cart {
        display: flex;
        gap: 50px;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
        flex: 1;
        min-width: 300px;
    }

    .cart > * {
        flex: 1;
        min-width: 300px;
    }

    .cartTotals {
        max-width: 400px;
        min-width: min-content;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .cartInfo {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .innerFlexContainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    
    .card {
        margin-top: 0.5rem;
        padding: 1rem;
        background-color: var(--primary-light);
        box-shadow: 5px 5px 10px var(--primary-dark);
        box-sizing: border-box;
        border-radius: 5px;
    }

    .itens {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }

    .totalRow {
        display: contents;
    }
</style>