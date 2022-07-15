<template>
    <div class="container">
        <div class="carouselContainer">
            <n-carousel class="carousel" show-arrow autoplay>
                <img
                    v-for="(img, idx) in carouselImgs"
                    :key="idx"
                    :src="img?.src"
                    :alt="img?.alt" />
            </n-carousel>
        </div>
        <AlbumCollection
            v-for="(collection, idx) in collections"
            :key="idx"
            :title="collection?.label || '...'"
            :albuns="collectionLists[collection?.collection] || []" />
    </div>
</template>

<script type="text/javascript"> 
 import AlbumCollection from '../components/Home/AlbumCollection';

 export default {
     name: "Home",
     components: {
         AlbumCollection,
     },
     data() {
         return {
             carouselImgs: [
                 {
                     src: require('../assets/Home/Grande Inauguração.png'),
                     alt: "Banner de inauguração",
                 },
             ],
             collections: [
                 {
                     label: "Novos álbuns",
                     collection: "new",
                 },
                 {
                     label: "Últimas unidades",
                     collection: "last",
                 },
                 {
                     label: "Descubra novos álbuns",
                     collection: "random",
                 },
             ],
         };
     },
     computed: {
         products() {
             return this.$store.getters.getProductList;
         },
         collectionLists() {
             return this.$store.getters.getProductCollections;
         },
     },
     created() {
         this.$store.dispatch('loadProducts');
         this.collections.forEach(collection => this.$store.dispatch(
             "loadProductCollection",
             collection.collection
         ));
     }
 };
</script>

<style type="text/css" media="screen" scoped>
 .carouselContainer {
     width: 100%;
     box-sizing: border-box;
 }

 .carousel {
     width: 100%;
 }

 .carousel img {
     width: 100%;
 }

 @media screen and (max-width: 599px) {
     .carouselContainer {
         display: none;
     }
 }

</style>
