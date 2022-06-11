<template>
    <div class="container">
        <div class="cartStatus">
            <h2 class="active"> Carrinho de compras </h2>
            <h2> Envio e pagamento </h2>
            <h2> Finalizar pedido </h2>
        </div>

        <div class="cart">
            <div class="cartProducts">
                <h3 style="grid-column: span 3;">Produto</h3>
                <h3>Preço</h3>
                <h3>Quantidade</h3>
                <h3>Total</h3>
                <CartCard v-for="product in products" :key="product.id" />
            </div>

            <div class="cartTotals">
                <h3 style="grid-column: span 2">Valores totais</h3>

                <div class="totalRow">
                    <span>Subtotal:</span>
                    <span> R${{ calcSubtotal.toFixed(2) }} </span>
                </div>

                <div class="totalRow">
                    <span>Entrega:</span>
                    <span> R${{ calcDelivery.toFixed(2) }} </span>
                </div>

                <div class="totalRow">
                    <span>Total:</span>
                    <span> R${{ calcTotal.toFixed(2) }} </span>
                </div>

                <button type="button" style="grid-column: span 2"> Concluir Compra </button>
            </div>
        </div>

        <br />
        <button class="continueShopping" type="button"> Continuar Comprando </button>
    </div>
</template>

<script>
import CartCard from "../../components/products/CartCard";

export default {
    name: "MyCart",
    components: {
        CartCard,
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Now, Not Yet',
                    quantity: 1,
                    price: 90.0,
                    shortDescription:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda, autem corporis excepturi dolorem vel nostrum aut illum voluptatum, soluta provident. Incidunt a quam vero nobis ratione exercitationem aspernatur magni.",
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 2,
                    name: 'Now, Not Yet', 
                    price: 90.0, 
                    quantity: 1,
                    shortDescription:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda, autem corporis excepturi dolorem vel nostrum aut illum voluptatum, soluta provident. Incidunt a quam vero nobis ratione exercitationem aspernatur magni.",
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                }                
            ]
        }
    },
    computed: {
        calcSubtotal() {
            return 0;
        },
        calcDelivery() {
            return 0;
        },
        calcTotal() {
            return 0;
        },
    },

}
</script>

<style scoped>
.container {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin: 0 auto;
    min-width: 500px;
}

.cart {
    display: grid;
    grid-template-columns: auto minmax(300px, 20%);
    column-gap: 50px;
}

 @media screen and (max-width: 850px) {
     .cart {
         grid-template-columns: 1fr;
     }
 }

.cartProducts { 
    display: grid;
    grid-template-columns: repeat(2, max-content) auto repeat(3, max-content);
    row-gap: 10px;
    align-items: center;
    text-align: justify;
}

 .cartProducts > h3 {
     width: 100%;
     text-align: left;
     box-sizing: border-box;
     margin-right: 16px;
     color: var(--white);
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

 .cartTotals h3 {
     text-transform: uppercase;
 }

 .totalRow {
     display: contents;
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

</style>
