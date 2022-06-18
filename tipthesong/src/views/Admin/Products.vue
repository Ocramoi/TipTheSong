<template>
    <AlbumUpsertPopup v-if="popup" @togglePopup="togglePopup" />

    <div class="container">
        <div class="innerContainer">
            <h2>DISCOS CADASTRADOS</h2>
            <div class="productBox">
                <FlexTable
                    :titles="tableTitles"
                    :values="products"
                    :center="true"
                    rowHeight="7rem"/>
            </div>
        </div>
        <div class="bts">
            <router-link :to="{ name: 'AdminHomepage'}">
                <button class="backBtn">VOLTAR</button>
            </router-link>
            <button class="addBtn" @click="togglePopup">
                <span>+</span>
            </button>
        </div>
    </div>
</template>

<script>
 import FlexTable from '../../components/App/FlexTable';
 import AlbumUpsertPopup from '../../components/Admin/AlbumUpsertPopup';

 export default {
     name: "AdminProducts",
     components: {
         FlexTable,
         AlbumUpsertPopup,
     },
     data() {
         return {
             tableTitles: [
                 "",
                 "Disco",
                 "",
                 "Preço",
                 "Estoque",
                 "Vendidos"
             ],
             product: {
                 id: 1,
                 name: 'Now, Not Yet (2019) - halfalive',
                 price: 90.0 ,
                 img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg',
                 stock: 32,
                 sold: 23,
                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                 extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae."
             },
             popup: false,
         };
     },
     computed: {
         products() {
             return [
                 [
                     {
                         content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                         style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                     },
                     this.turnToImageTag(this.product.img),
                     {
                         content: this.turnToDescription(this.product.name, this.product.description),
                         style: "width: 100%; height: 100% !important; overflow-y: hidden; display: flex; align-itens: center; justify-content: center;",
                     },
                     `R$${this.product.price.toFixed(2)}`,
                     this.product.stock,
                     this.product.sold
                 ],
                 [
                     {
                         content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                         style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                     },
                     this.turnToImageTag(this.product.img),
                     {
                         content: this.turnToDescription(this.product.name, this.product.description),
                         style: "width: 100%; height: 100%; display: flex; align-itens: center; justify-content: center;",
                     },
                     `R$${this.product.price.toFixed(2)}`,
                     this.product.stock,
                     this.product.sold
                 ],
                 [
                     {
                         content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                         style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                     },
                     this.turnToImageTag(this.product.img),
                     {
                         content: this.turnToDescription(this.product.name, this.product.description),
                         style: "width: 100%; height: 100%; display: flex; align-itens: center; justify-content: center;",
                     },
                     `R$${this.product.price.toFixed(2)}`,
                     this.product.stock,
                     this.product.sold
                 ],
                 [
                     {
                         content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                         style: "display: flex; width: 100%; justify-content: center; align-itens: center;",
                     },
                     this.turnToImageTag(this.product.img),
                     {
                         content: this.turnToDescription(this.product.name, this.product.description),
                         style: "width: 100%; height: 100%; display: flex; align-itens: center; justify-content: center;",
                     },
                     `R$${this.product.price.toFixed(2)}`,
                     this.product.stock,
                     this.product.sold
                 ],
             ];
         },
     },
     methods: {
         turnToImageTag: function(imgSrc) {
             return `<img src="${imgSrc}" alt="product">`;
         },
         turnToDescription: function(productName, productDescription) {
             return `<div class="productContainer"><h3 style="margin:0;padding:0">${productName}</h3><span>${productDescription}</span></div>`;
         },
         togglePopup() {
             this.popup = !this.popup;
         },
     }
 }
</script>

<style scoped>

 :deep(div.productContainer) {
     display:block;
     width: 100%;
     line-height: normal;
     margin: auto 0;
 }

 :deep(div.productContainer > h3) {
     margin: 0;
     padding:0;
 }

 :deep(div.productContainer > span) {
     width: 100%;
     display: block;
     white-space: break-spaces;
 }

 :deep(.trashIcon) {
     font-size: 1.1em;
     margin: auto 10px;
     display: block;
     width: 100%;
 }

 .addBtn {
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 100%;
     aspect-ratio: 1 / 1;
     width: min-content;
 }

 .bts {
     margin-top: 1rem;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: space-between;
     align-items: center;
     width: 100%;
 }
</style>
