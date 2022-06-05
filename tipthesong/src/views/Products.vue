<template>
    <div class="container">
        <div class="filterPanel">
            <div
                :class="{ 'hidden': !filterVisible }"
                class="panel">
                <button
                    class="closePanel clickableIcon"
                    @click="showPanel">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <h4>Gênero:</h4>
                <div
                    v-for="(genre, idx) in filters.genres"
                    :key="idx"
                    class="genreInput">
                    <input
                        v-model="filters.genres[idx].selected"
                        type="checkbox"
                        :name="genre.name" />
                    <label :for="genre.name">{{ genre.name }}</label>
                </div>
                <br />

                <h4>Artista:</h4>
                <input
                    placeholder="Nome do artista..."
                    type="text"
                    v-model="filters.artist" />
                <br />
                <br />

                <h4>Faixa de preço:</h4>
                <VueSlider
                    :min="minPrice"
                    :max="maxPrice"
                    :tooltip="'active'"
                    :use-keyboard="false"
                    tooltip-placement="bottom"
                    :tooltip-formatter="(v) => `R\$${v.toFixed(2)}`"
                    v-model="filters.price" />
                <br />

                <h4>Ano de lançamento:</h4>
                <VueSlider
                    :min="minYear"
                    :max="maxYear"
                    :tooltip="'active'"
                    :use-keyboard="false"
                    tooltip-placement="bottom"
                    v-model="filters.year" />
                <br />

                <button>Filtrar</button>

            </div>
        </div>

        <div class="productsContainer">
            <button
                @click="showPanel"
                :class="{ 'hidden': filterVisible, }"
                class="filterButton">
                <span>&gt;&gt;</span>
            </button>

            <div class="productList">
                <ProductCard v-for="product in products" :key="product.id" :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
 import ProductCard from '../components/products/Card';
 import VueSlider from 'vue-slider-component';
 import 'vue-slider-component/theme/default.css';

 export default {
     name: "Products",
     components: {
         ProductCard,
         VueSlider,
     },
     data() {
         return {
             filterVisible: false,
             filters: {
                 genres: [
                     { name: "RAP", selected: false },
                     { name: "ROCK", selected: false },
                     { name: "JAZZ", selected: false },
                     { name: "BLUES", selected: false },
                     { name: "MPB", selected: false },
                     { name: "POP", selected: false },
                 ],
                 artist: "",
                 price: [],
                 year: [],
             },
             products: [
                 {
                     id: 1,
                     name: 'Now, Not Yet',
                     price: 10.0 ,
                     released: 1929,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 2,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 3,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 4,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 5,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 6,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 7,
                     name: 'Now, Not Yet',
                     price: 190.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 1,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 2,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 3,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 4,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 5,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 6,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 7,
                     name: 'Now, Not Yet',
                     price: 90.0 ,
                     released: 2022,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
             ],
         };
     },
     beforeMount() {
         this.filters.price = [ this.minPrice, this.maxPrice ];
         this.filters.year = [ this.minYear, this.maxYear ];
     },
     methods: {
         showPanel() {
             this.filterVisible = !this.filterVisible;
         },
     },
     computed: {
         minPrice() {
             return this.products.reduce((prev, cur) => Math.min(prev, cur?.price), Number.POSITIVE_INFINITY);
         },
         maxPrice() {
             return this.products.reduce((prev, cur) => Math.max(prev, cur?.price), Number.NEGATIVE_INFINITY);
         },
         minYear() {
             return this.products.reduce((prev, cur) => Math.min(prev, cur?.released), Number.POSITIVE_INFINITY);
         },
         maxYear() {
             return this.products.reduce((prev, cur) => Math.max(prev, cur?.released), Number.NEGATIVE_INFINITY);
         },
     }
 }

</script>

<style scoped>
 .container {
     padding: 5px;
     position: relative;
     display: grid;
     grid-template-columns: min-content 1fr;
     grid-template-rows: auto;
 }

 .panel {
     position: relative;
     padding: 15px;
     background-color: var(--primary-light);
     color: var(--white);
     width: max-content;
     transition: 0.4s;
     box-shadow: 5px 5px 10px var(--primary-dark);
     box-sizing: border-box;
     margin: 1em;
 }

 .hidden {
     width: 0px !important;
     height: 0px !important;
     overflow: hidden;
     padding: 0;
     margin: 0;
 }

 .panel > h4 {
     margin: 0;
 }

 .panel input[type="text"] {
     background-color: var(--white);
     border-radius: 1em;
     padding: 5px;
     width: 100%;
     min-width: 200px;
 }

 .panel > button {
     width: 100%;
 }

 .closePanel {
     position: absolute;
     top: 5px;
     right: 5px;
     border-radius: 100%;
     display: block;
     font-size: 1em;
     height: 1.5em;
     width: 1.5em !important;
     display: flex;
     text-align: center;
     justify-content: center;
     align-items: center;
 }

 .genreInput {
     width: 100%;
     width: max-content;
 }

 .filterButton {
     position: absolute;
     top: 0;
     left: 0;

     transition: 0.4s;
     width: min-content;
     aspect-ratio: 1 / 1;
     display: flex;
     justify-content: center;
     align-items: center;
 }

 @media screen and (max-width: 850px) {
     .container {
         width: calc(100% - 100px);
         margin: 0 auto;
     }
 }

 .productsContainer {
     position: relative;
     margin-top: 10px;
 }

.productList {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    justify-content: center;
 }
</style>
