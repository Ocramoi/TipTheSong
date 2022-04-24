<template>
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
        :title="collection"
        :albuns="albuns" />
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
             albuns: [
                 {
                     id: 1,
                     name: 'Now, Not Yet',
                     price: 10.0,
                     released: 1929,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 2,
                     name: 'Now, Not Yet',
                     price: 90.0,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 3,
                     name: 'Now, Not Yet',
                     price: 90.0,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 4,
                     name: 'Now, Not Yet',
                     price: 90.0,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 5,
                     name: 'Now, Not Yet',
                     price: 90.0,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
             ],
             collections: [
                 "Álbuns em alta",
                 "Novos álbuns",
                 "Últimas unidades",
             ]
         };
     },
     async created() {
         await this.$store.dispatch("loadProductList", { page: 1 });
     },
     computed: {
         products() {
             return this.$store.getters.getProductList;
         },
     },
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
</style>
