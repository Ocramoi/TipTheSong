<template>

    <div class="container">                    
        <div class="cartStatus">
            <h2> Carrinho de compras </h2>
            <h2> Envio e pagamento </h2>
            <h2 class="active"> Finalizar pedido </h2>
        </div>
        <div class="innerContainer">
            <div>
                <h4> ENREDEÇO </h4>
                <div class="card">
                </div>
                <h4> FORMA DE PAGAMENTO </h4>
                <div class="card">
                </div>
                <h4> RESUMO DO PEDIDO </h4>
                <div class="card">
                </div>
                <br>
                <button> FINALIZAR COMPRA </button>
            </div>
            <h4> ITENS </h4>
        </div>
    </div>

</template>

<script>
    export default {
        
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
        justify-content: space-around;
    }

    .card {
        width: 100%;
        padding: 1rem;
        background-color: var(--primary-light);

        box-shadow: 5px 5px 10px var(--primary-dark);
        box-sizing: border-box;
        border-radius: 5px;       
    }

    button {
        font-size: 1.2em;
        text-transform: uppercase;
    }
</style>