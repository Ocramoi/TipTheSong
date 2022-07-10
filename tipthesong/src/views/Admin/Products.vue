<template>
    <AlbumUpsertPopup v-if="popupEdit" @togglePopup="togglePopupEdit" :current="product" />
    <AlbumUpsertPopup v-if="popupCreate" @togglePopup="popupCreate = !popupCreate" />

    <div class="container">
        <div class="innerContainer">
            <h2>DISCOS CADASTRADOS</h2>
            <div class="productBox">
                <FlexTable
                    @clicked="handleEvent"
                    :titles="tableTitles"
                    :values="products"
                    :center="false"
                    rowHeight="7rem"/>
            </div>
        </div>
        <div class="bts">
            <router-link :to="{ name: 'AdminHomepage' }">
                <button class="backBtn">VOLTAR</button>
            </router-link>
            <button class="addBtn" @click="popupCreate = !popupCreate">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </div>
</template>

<script>
 import FlexTable from '../../components/App/FlexTable';
 import AlbumUpsertPopup from '../../components/Admin/AlbumUpsertPopup';

 export default {
     inject: ['notyf'],
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
             product: null,
             popupEdit: false,
             popupCreate: false,
         };
     },
     async created() {
        await this.$store.dispatch('loadProducts');
     },
     computed: {
         productList() {
            return this.$store.getters.getProductList;
         },
         products() {
             const _products = this.productList;
             return _products?.map(product => [
                 {
                     id: ["delete", product?._id],
                     content: '<i class="fa-solid fa-trash"></i>',
                     style: "display: flex; align-items: center; width: 100%; height: 100%; justify-content: center; z-index: 10;",
                     class: "clickableIcon trashIcon",
                 },
                 this.turnToImageTag(product?.frontCover),
                 {
                     content: this.turnToDescription(product?.title, product?.shortDescription),
                     style: "width: 100%; height: 100% !important; overflow-y: hidden; display: flex; align-itens: center; justify-content: center; ; cursor: pointer",
                     id: ["upsert", product?._id],
                 },
                 `R$${product?.price.toFixed(2)}`,
                 product?.amountInStock,
                 product?.amountSold,
             ]);
         },
     },
     methods: {
         turnToImageTag: function(imgSrc) {
             return `<img src="${imgSrc}" alt="product">`;
         },
         turnToDescription: function(productName, productDescription) {
             return `<div class="productContainer"><h3 style="margin:0;padding:0">${productName}</h3><span>${productDescription}</span></div>`;
         },
         togglePopupEdit() {
             this.popupEdit = !this.popupEdit;
         },
         handleEvent(e) {
             if (e == null) return;

             const [action, id] = e;
             if (action == 'upsert') {
                this.product = this.productList.find(product => product._id == id);
                this.popupEdit = true;
             } else if (action == 'delete') {
                return this.deleteProduct(id);
             }
         },
         async deleteProduct(id) {
            await this.$store.dispatch('deleteProduct', { productId: id });

            if (this.$store.getters.getProductError) {
                this.notyf.open({
                         type: 'error',
                         message: "Erro ao deletar produto!",
                    });
            } else {
                this.notyf.open({
                         type: 'success',
                         message: "Produto deletado com sucesso!",
                    });
            }
         },
     },
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
