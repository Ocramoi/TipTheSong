<template>
    <div class="container">
        <ul class="cartStatus">
            <li><h1> MY CART > </h1></li>
            <li><h1> ORDER DETAILS > </h1></li>
            <li><h1> FINISH ORDER </h1></li>
        </ul>

        <button type="button" style="grid-column: span 2"> Continuar Comprando </button>
        <div class="cart">
            <div class="cartProducts">
                <span></span>
                <h3 style="grid-column: span 2">Produto</h3>
                <h3>Preço</h3>
                <h3>Quantidade</h3>
                <h3>Total</h3>
                <CartCard v-for="product in products" :key="product.id" />
            </div>

            <div class="cartTotals">
                <h3 style="grid-column: span 2">Valores totais</h3>

                <p>Subtotal:</p>
                <p>{{ calcSubtotal }}</p>

                <p>Entrega:</p>
                <p> {{ calcDelivery }}</p>

                <p>Total:</p>
                <p>{{ calcTotal }}</p>

                <button type="button" style="grid-column: span 2"> Concluir Compra </button>
            </div>
        </div>
    </div>
</template>

<script>
import CartCard from "../components/products/CartCard"

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

 @media screen and (min-width: 850px) {
     .container {
         width: 80%;
     }
 }

.cart {
    display: grid;
    grid-template-columns: auto minmax(150px, 20%);
    column-gap: 20px;
}

 @media screen and (max-width: 850px) {
     .cart {
         grid-template-columns: 1fr;
     }
 }

.cartProducts { 
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    column-gap: 10px;
    row-gap: 10px;
    align-items: center;
    text-align: justify;
}

.cartTotals {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    column-gap: 5px;
    align-items: center;
}

ul {
    text-align: center;
}

li {
    padding: 0 10px;
    display: inline-block;
}

</style>
