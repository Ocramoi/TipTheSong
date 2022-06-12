<template>

    <div class="container">                    
        <div class="cartStatus">
            <h2> Carrinho de compras </h2>
            <h2> Envio e pagamento </h2>
            <h2 class="active"> Finalizar pedido </h2>
        </div>
        
        <div class="cart">
            <div class="cartInfo">
                <h4>ENDEREÇO</h4>
                <h4>FORMA DE PAGAMENTO</h4>
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
                <div class="card">
                    <span> {{ client.payment }} </span>
                </div>
            </div>

            <div class="cartTotals">
                <h4 style="grid-column: span 2">RESUMO DO PEDIDO</h4>

                <div class="totalRow">
                    <span>Itens:</span>
                    <span> R$100,00 </span>
                </div>

                <div class="totalRow">
                    <span>Frete e taxas:</span>
                    <span> R$0 </span>
                </div>

                <div class="totalRow">
                    <span style = "font-weight: bold"> TOTAL: </span>
                    <span style = "font-weight: bold"> R$100,00 </span>
                </div>
                
                <router-link to="/order" custom v-slot="{ navigate }"> 
                    <button  v-on:click="navigate" role="link" style="grid-column: span 2"> FINALIZAR PEDIDO </button>
                </router-link>
            </div>
        </div>
        <div>
            <h4> ITENS </h4>
            <div class="item">
                <EndItem v-for="item in items" :key="item.id" />
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
    .container {
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        margin: 0 auto;
        min-width: 500px;
        color: var(--white);
    }

    .cart {
        display: grid;
        grid-template-columns: auto minmax(300px, 20%);
        column-gap: 50px;
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
    
    button {
        font-size: 1.2em;
        text-transform: uppercase;
    }

    .cartTotals {
        color: var(--white);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: min-content;
        row-gap: 20px;
        text-align: justify;
        column-gap: 5px;
    }

    .cartInfo { 
        display: grid;
        align-items: center;
        text-align: justify;
        grid-auto-rows: min-content;
        grid-template-columns: repeat(2, 1fr);
    }

    .card {
        width: 90%;
        height: 150px;
        padding: 1rem;
        background-color: var(--primary-light);

        box-shadow: 5px 5px 10px var(--primary-dark);
        box-sizing: border-box;
        border-radius: 5px;
    }

    .item {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .totalRow {
        display: contents;
    }
</style>