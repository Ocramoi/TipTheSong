<template>
    <div class="card" :class="{ 'outOfStock': product?.amountInStock === 0 }">
        <router-link :to="`/product/${product?._id}`">
            <img class="image" :src="product?.frontCover">
        </router-link>

        <router-link :to="`/product/${product?._id}`">
            <div class="description">
                <h3> {{ product?.title }} </h3>
                <p> R${{ product?.price.toFixed(2) }} </p>
            </div>
        </router-link>

        <hr />

        <div class="interact" v-if="interact">
            <button class="cartButton" @click="addToCart">
                <i class="fa-solid fa-cart-plus"></i>
            </button>
            <button type="button" @click="goToCart">Comprar agora</button>
        </div>
    </div>
</template>

<script>
 export default {
     name: "Card",
     inject: ['notyf'],
     props: {
         product: {
             type: Object,
             required: true,
         },
         interact: {
             type: Boolean,
             required: false,
             default: true,
         },
     },
     computed: {
         amountInCart() {
             return this.$store
                        .getters
                        .getCartList[this.product._id] || 0;
         },
     },
     methods: {
         increase() {
            this.amount++;
         },
         decrease() {
            if (this.amount - 1 < 1)
                return;
            else
                this.amount--;
         },
         addToCart() {
             if (this.product.amountInStock < this.amountInCart + this.amount) {
                 this.notyf.open({
                     type: "error",
                     message: "Não é possível adicionar mais unidades desse produto",
                 });
                 return false;
             }
             this.$store.dispatch('addToCart', {
                 product: this.product,
                 qnt: this.amount,
             });
             this.notyf.open({
                 type: "success",
                 message: `Álbu${this.amount <= 1 ? 'm' : 'ns'} adicionado com sucesso ao carrinho`,
             });
             return true;
         },
         goToCart() {
            if (this.addToCart())
                this.$router.push('/cart');
         },
     },
     data() {
        return {
            amount: 1,
        };
     }
 }
</script>

<style type="text/scss" media="screen" scoped>
 .card {
     flex: 0 1 200px;
     display: flex;
     flex-direction: column;
     align-items: center;
     flex-wrap: wrap;

     padding: 5px;
     margin: 20px;
     box-sizing: border-box;

     background-color: var(--primary-light);
     box-shadow: 5px 5px 10px var(--primary-dark);

     color: var(--white);
     text-decoration: none;
     transition: 0.4s;
 }

 @media screen and (max-width: 599px) {
     .card {
         flex: 0 1 100%;
         flex-direction: row;
         column-gap: 10px;
     }
 }

 .card:hover {
     transform: scale(1.02);
     transform-origin: center center;
 }

 .card.outOfStock {
     filter: grayscale(0.7);
 }

 .card.outOfStock:hover {
     transform: none;
 }

 .description {
     width: 100%;
     text-align: center;
     word-break: break-all;
 }

 img, h3, p {
     max-width: 100%;
 }

 a {
     flex: 1;
 }

 h3, p {
     word-wrap: break-word;
     margin: 5px 0px;
     padding: 0;
 }

 .interact {
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     width: 100%;
     padding: 0 15px;
     box-sizing: border-box;
     gap: 10px;
 }

 .interact > button, a {
     flex: 1;
     font-size: 0.7rem !important;
 }

 .cartButton {
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 100%;
     aspect-ratio: 1 / 1;
     flex: 0 0 min-content !important;
 }

 hr {
     display: block;
     width: 100%;
     border-color: transparent;
     margin: 0;
     padding: 0;
 }

 button {
     font-size: 0.775rem;
 }

 .outOfStock button {
     pointer-events: none !important;
 }

 .roundInfo {
     text-transform: uppercase;
     border: 0;
     background: var(--secondary-dark);
     color: currentColor;
     padding: 10px;
     border-radius: 2rem;
     font-weight: bold;
     transition: 0.4s;
     cursor: pointer;
     width: max-content;
     color: var(--white);
     text-align: center;
     width: 33%;
 }

</style>
