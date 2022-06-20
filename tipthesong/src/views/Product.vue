<template>
    <div class="container">
        <h1>{{ product?.name }}</h1>

        <div class="productInfoBox"> 
            <img :src="product?.img">
            <div class="productInfoText">
                <h2> R$ {{ product?.price.toFixed(2) }} </h2>
                <p> {{ product?.description }} </p>
                <br/>
                <button type="button"> COMPRAR </button>
            </div>
        </div>

        <div class="productExtraInfo">
            <h2>Informações Adicionais</h2>
            <p> {{ product?.extraInfo }} </p>
        </div>

        <div class="suggestions"> 
            <AlbumCollection
                title="Sugestões"
                :albuns="sugestions || []" />
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
     },
     watch: {
         id() { this.loadFromId(); },
     },
     methods: {
         loadFromId() {
             this.$store.dispatch('loadProduct', this.id);
             this.$store.dispatch('getSugestions', this.id);
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

</style>
