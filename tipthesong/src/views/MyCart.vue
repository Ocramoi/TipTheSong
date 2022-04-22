<template>
    <div class="container">
        <ul class="cartStatus">
            <li><h1> MY CART </h1></li>
            <li><h1> ORDER DETAILS </h1></li>
            <li><h1> FINISH ORDER </h1></li>
        </ul>

        <div class="cart">
            <div class="cartProducts">
                <h3 style="grid-column: span 3">PRODUCT</h3>
                <h3>PRICE</h3> 
                <h3>AMOUNT</h3> 
                <h3>SUBTOTAL</h3>
                <CartCard v-for="product in products" :key="product.id" />
            
                <button type="button" style="grid-column: span 2"> Continuar Comprando </button>
            </div>
            <div class="cartTotals">
                <h3 style="grid-column: span 2">TOTAL IN CART</h3>

                <p> Subtotal </p>
                <p> {{ calcSubtotal() }}</p>

                <p> Entrega </p>
                <p> {{ calcDelivery() }}</p>

                <p> Total </p>
                <p> {{ calcTotal() }}</p>

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

    methods: {
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
    width: 70%;
    margin: 0 auto;
}

.cart {
    display: grid;
    grid-template-columns: auto 20%;
    column-gap: 10%;
}

.cartProducts { 
    display: grid;
    grid-template-columns: 4% 16% auto 10% 10% 10%;
    column-gap: 2%;
    row-gap: 2%;
}

.cartTotals {
    display: grid;
    grid-template-columns: 50% auto;
}

ul {
    text-align: center;
}

li {
    padding: 0 40px;
    display: inline-block;
}

</style>
