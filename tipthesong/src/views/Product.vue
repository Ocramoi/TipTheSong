<template>
    <div v-if="product" class="container">
        <button class="goBack" @click="this.$router.back()">
            <i class="fa-solid fa-arrow-left" /> 
        </button>
        <h1>{{ product?.title }} - {{ product?.artists?.join(', ') }} ({{ product?.launchDate }})</h1>

        <div class="productInfoBox"> 
            <img
                :src="product?.frontCover"
                :class="{ 'outOfStock': !product?.amountInStock }">
            <div class="productInfoText">
                <h2> R$ {{ product?.price.toFixed(2) }} </h2>
                <p> {{ product?.longDescription }} </p>
                <h3 v-if="product?.amountInStock">Em estoque: {{ product?.amountInStock }}</h3>
                <h3 class="outOfStock" v-else>Produto fora de estoque!</h3>
                <br/>

                <div class="interact" :class="{ 'outOfStock': !product?.amountInStock }">
                    <div class="amountInfo">
                        <button class="amntBtn" type="button" @click="increase">
                            <i class="fa fa-plus"></i>
                        </button>
                        <p class="roundInfo"> {{ this.amount }} </p>
                        <button class="amntBtn" type="button" @click="decrease">
                            <i class="fa fa-minus"></i>
                        </button>
                    </div>
                    <button class="cartButton" @click="addToCart">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                    <button class="buyNow" type="button" @click="goToCart"> COMPRAR AGORA </button>
                </div>
            </div>
        </div>

        <div class="productExtraInfo">
            <h2>Informações Adicionais</h2>
            <p> {{ product?.extraInfo || "Nehuma." }} </p>
        </div>

        <div class="suggestions"> 
            <AlbumCollection
                title="Sugestões"
                :albuns="sugestions || []" />
        </div>

    </div>
    <div class="notFound" v-else-if="loaded">
        <div>
            Produto não encontrado...
            <br />
            <router-link to="/products">
                Volte para a página de produtos
            </router-link>
        </div>
    </div>
</template>

<script>
 import AlbumCollection from '../components/Home/AlbumCollection';

 export default {
     name: "Product",
     inject: ['notyf'],
     components: {
         AlbumCollection
     },
     props: {},
     data() {
         return {
             amount: 1,
         };
     },
     async created() { this.loadFromId(); },
     computed: {
         id() {
             return this.$route.params.idProduct;
         },
         product() {
             return this.$store.getters.getCurrentProduct;
         },
         amountInCart() {
             return this.$store
                        .getters
                        .getCartList[this.product._id] || 0;
         },
         loaded() {
             return this.$store.getters.getCurrentLoaded;
         },
         sugestions() {
             return this.product?.suggestions;
         },
     },
     watch: {
         id() { this.loadFromId(); },
     },
     methods: {
         increase() {
             if (this.amountInCart + this.amount + 1 > this.product.amountInStock) return;
             this.amount++;
         },
         decrease() {
             if (this.amount - 1 < 1)
                 return;
             else
                 this.amount--;
         },
         loadFromId() {
             this.$store.dispatch('loadProduct', this.id);
             window.scrollTo(0,0);
         },
         addToCart() {
             if (this.product.amountInStock <= 0) return false;
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
 }
</script>

<style scoped>
 .container {
     text-align: justify;
 }

 h1 {
     text-align: center;
 }

 .productInfoBox {
     padding: 1rem;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     align-items: flex-start;
     gap: 1rem;
 }

 img {
     margin: 0 auto;
     min-width: 200px;
     flex: 0 1 300px;
 }

 .productInfoText {
     flex: 1 0 200px;
 }

 .productExtraInfo {
     padding: 1rem;
     margin: 100px 0;
 }

 :deep(h2), p {
     padding: 0;
 }

 .interact {
     display: flex;
     flex-direction: row;
     justify-content: space-evenly;
     align-items: center;
     width: min-content;
     gap: 1rem;
 }

 .cartButton, .goBack {
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 100%;
     aspect-ratio: 1 / 1;
     flex: 0 0 min-content !important;
 }

 .buyNow, .roundInfo {
     display: flex;
     justify-content: center;
     align-items: center;
     max-width: max-content;
 }

 .container {
     position: relative;
 }

 .goBack {
     position: absolute;
     top: 0;
     left: 0;
     margin: 1.5rem;
 }

 .notFound {
     width: 100%;
     height: 100%;
     align-items: center;
     justify-content: center;
     display: flex;
     font-size: 1.5em;
 }

 .notFound > div {
     text-align: center;
 }

 .amntBtn {
     margin: 0;
     display: flex;
     font-size: 0.75rem;
     padding: 0.25rem;
     align-items: center;
     border-radius: 100%;
     aspect-ratio: 1 / 1;
     width: min-content;
 }

 .amountInfo {
     max-width: max-content;
     display: flex;
     flex-direction: column;
     align-items: center;
     width: 200px;
 }

 .roundInfo {
     text-transform: uppercase;
     font-weight: bold;
     padding: 0.2rem;
     width: max-content;
     text-align: center;
     width: 100%;
 }

 h3.outOfStock {
     color: var(--secondary) !important;
 }

 img.outOfStock {
     filter: grayscale(0.7);
 }

 .outOfStock button {
     pointer-events: none !important;
 }

 .interact.outOfStock {
     display: none;
 }

</style>
