<template>
    <div v-if="product" class="container">
        <button class="goBack" @click="this.$router.back()">
            <i class="fa-solid fa-arrow-left" /> 
        </button>
        <h1>{{ product?.title }} - {{ product?.artists?.join(', ') }} ({{ product?.launchDate }})</h1>

        <div class="productInfoBox"> 
            <img :src="product?.frontCover">
            <div class="productInfoText">
                <h2> R$ {{ product?.price.toFixed(2) }} </h2>
                <p> {{ product?.longDescription }} </p>
                <br/>
                <div class="interact">
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
     components: {
         AlbumCollection
     },
     props: {},
     data() {
         return {};
     },
     async created() { this.loadFromId(); },
     computed: {
         sugestions() {
             return this.$store.getters.getSugestions;
         },
         id() {
             return this.$route.params.idProduct;
         },
         product() {
             return this.$store.getters.getCurrentProduct;
         },
         loaded() {
             return this.$store.getters.getCurrentLoaded;
         },
     },
     watch: {
         id() { this.loadFromId(); },
     },
     methods: {
         loadFromId() {
             this.$store.dispatch('loadProduct', this.id);
             this.$store.dispatch('getSugestions', this.id);
             window.scrollTo(0,0);
         },
         addToCart() {
             this.$store.dispatch('addToCart', {
                 id: this.product.id,
                 qnt: 1,
             });
         },
         goToCart() {
            this.addToCart()
            this.$router.push('/cart')
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

 .buyNow {
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

</style>
