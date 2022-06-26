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
                    :railStyle="{ 'background-color': 'var(--secondary-dark)' }"
                    :processStyle="{ 'background-color': 'var(--secondary-light)' }"
                    :tooltipStyle="{
                        'background-color': 'var(--secondary-light)',
                        'border-bottom-color': 'var(--secondary-light) !important',
                        'color': 'var(--black)'
                    }"
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
                    :railStyle="{ 'background-color': 'var(--secondary-dark)' }"
                    :processStyle="{ 'background-color': 'var(--secondary-light)' }"
                    :tooltipStyle="{
                        'background-color': 'var(--secondary-light)',
                        'border-bottom-color': 'var(--secondary-light) !important',
                        'color': 'var(--black)'
                    }"
                    tooltip-placement="bottom"
                    v-model="filters.year" />
                <br />

                <button @click="clearFilters">limpar</button>
            </div>
        </div>
        <div class="productsContainer">
             <button
                @click="showPanel"
                :class="{ 'hidden': filterVisible, }"
                class="filterButton">
                <i class="fa-solid fa-filter"></i>
            </button>
            <div class="productList">
                <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
 import ProductCard from '../components/Product/Card';
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
             filterVisible: true,
             filters: {
                 album: "",
                 genres: [
                     { name: "RAP", selected: true },
                     { name: "ROCK", selected: true },
                     { name: "JAZZ", selected: true },
                     { name: "BLUES", selected: true },
                     { name: "MPB", selected: true },
                     { name: "POP", selected: true },
                 ],
                 artist: "",
                 price: [],
                 year: [],
             },
         };
     },
     beforeMount() {
         this.clearFilters();
     },
     mounted () {
        this.filters.album = this.query ? this.query : "";
     },
     watch: {
         query() {
            this.filters.album = this.query ? this.query : "";
         },
     },
     methods: {
         clearFilters() {
             this.filters.price = [ this.minPrice, this.maxPrice ];
             this.filters.year = [ this.minYear, this.maxYear ];
             this.filters.artist = "";
             this.filters.genres.forEach(genre => genre.selected = true);
         },
         showPanel() {
             this.filterVisible = !this.filterVisible;
         },
     },
     computed: {
         query() { return this.$route.query.q; },
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
         products() {
             return this.$store.getters.getProductList;
         },
         filteredProducts() {
             const activeGenres = this.filters.genres.filter(g => g.selected).map(g => g.name),
                   filters = [
                       // Filtro de gênero
                       (product) => {
                           for (const genre of product.genres)
                               if (activeGenres.includes(genre)) return true;
                           return false;
                       },
                       // Filtro de artista
                       (product) => {
                           const strip = this.filters.artist.trim().toLowerCase();
                           if (strip === "") return true;
                           return product.artist.toLowerCase().includes(strip);
                       },
                       // Filtro de album
                       (product) => {
                           const strip = this.filters.album.trim().toLowerCase();
                           if (strip === "") return true;
                           return product.name.toLowerCase().includes(strip);
                       },
                       // Filtro de preço
                       (product) => {
                           return product.price >= this.filters.price[0] && product.price <= this.filters.price[1];
                       },
                       // Filtro de lançamento
                       (product) => {
                           return product.released >= this.filters.year[0] && product.released <= this.filters.year[1];
                       },
                   ];
             return this.products.filter(product => {
                 for (const filter of filters)
                     if (!filter(product)) return false;
                 return true;
             });
         },
     }
 }

</script>

<style scoped>
 .container {
     display: grid;
     grid-template-columns: min-content 1fr;
     grid-template-rows: auto;
     overflow-x: hidden;
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
     color: var(--primary-dark) !important;
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
     z-index: 10;
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
