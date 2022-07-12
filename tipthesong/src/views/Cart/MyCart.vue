<template>
    <div class="container">
        <div class="cartStatus">
            <h2 class="active"> Carrinho de compras </h2>
            <h2> Envio e pagamento </h2>
            <h2> Finalizar pedido </h2>
        </div>

        <div class="cart">
            <div class="products">
                <FlexTable
                    v-if="productList.length"
                    @clicked="captureClick"
                    class="flexTable"
                    rowHeight="5rem"
                    :titles="['', 'Produto', 'Preço', 'Quantidade', 'Total']"
                    :values="productList" />
                <span v-else>Nenhum produto no carrinho!</span>
            </div>

            <div class="cartTotals">
                <h3 style="grid-column: span 2">Valores totais</h3>

                <div class="totalRow">
                    <span>Subtotal:</span>
                    <span> R${{ subTotal.toFixed(2) }} </span>
                </div>

                <div class="totalRow">
                    <span>Entrega:</span>
                    <span> R${{ calcDelivery.toFixed(2) }} </span>
                </div>

                <div class="totalRow">
                    <span>Total:</span>
                    <span> R${{ total.toFixed(2) }} </span>
                </div>
                <router-link to="/payment" custom v-slot="{ navigate }"> 
                    <button  v-on:click="navigate" role="link" style="grid-column: span 2"> Concluir Compra </button>
                </router-link>
            </div>
        </div>

        <br />
        <div style="width: 100%">
            <router-link to="/products" class="button" custom v-slot="{ navigate }"> 
                <button v-on:click="navigate" role="link" type="button"> Continuar Comprando </button>
            </router-link>
        </div>
    </div>
</template>

<script>
 import FlexTable from '../../components/App/FlexTable';

 export default {
     name: "MyCart",
     components: {
         FlexTable,
     },
     data() {
         return {};
     },
     async created() {
         this.$store.dispatch('loadCart', this.cartList);
     },
     computed: {
         subTotal() {
             const cartIds = Object.keys(this.cartList),
                   prices = cartIds?.map(id => (this.cartList[id] || -1) * this.products[id]?.price);
             return prices.reduce((prev, cur) => prev + cur, 0);
         },
         calcDelivery() {
             if (this.productList.length == 0)
                 return 0;
             else
                 return 10;
         },
         total() {
             return this.subTotal + this.calcDelivery;
         },
         products() {
             return this.$store.getters.getCartProducts;
         },
         cartList() {
             return this.$store.getters.getCartList;
         },
         productList() {
             const cartIds = Object.keys(this.cartList);
             return cartIds?.map(id => [
                 {
                     id: id,
                     content: '<i class="fa-solid fa-trash"></i>',
                     style: "display: flex; align-items: center; width: 100%; height: 100%; justify-content: center; z-index: 10;",
                     class: "clickableIcon",
                 },
                 {
                     content: this.createContent(id),
                     class: "outterContent",
                 },
                 `R$${this.products[id]?.price.toFixed(2)}`,
                 this.cartList[id] || -1,
                 `R$${((this.cartList[id] || -1) * this.products[id]?.price).toFixed(2)}`,
             ]);
         },
     },
     methods: {
         createContent(id) {
             return `<a href="/product/${id}" class="innerContent"><img src="${this.products[id]?.frontCover}" /><div class="productContainer"><h3 style="margin:0;padding:0">${this.products[id]?.title}</h3><span>${this.products[id]?.shortDescription}</span></div></a>`;
         },
         captureClick(id) {
             if (!id) return;

             this.$store.dispatch('removeFromCart', {
                 id: id,
                 qnt: this.cartList[id],
             });
         },
     },
 }
</script>

<style scoped>
 @import url('../../css/Cart.css');

 .cart {
     display: grid;
     grid-template-columns: auto minmax(300px, 20%);
     column-gap: 50px;
 }

 @media screen and (max-width: 850px) {
     .cart {
         grid-template-columns: 1fr;
     }
 }

 .cartProducts {
     display: grid;
     grid-template-columns: repeat(2, max-content) auto repeat(3, max-content);
     row-gap: 10px;
     align-items: center;
     text-align: justify;
 }

 .cartProducts > h3 {
     width: 100%;
     text-align: left;
     box-sizing: border-box;
     margin-right: 16px;
     color: var(--white);
     text-transform: uppercase;
 }

 .cartTotals {
     color: var(--white);
     display: grid;
     grid-template-columns: 1fr 1fr;
     grid-auto-rows: min-content;
     row-gap: 20px;
     text-align: justify;
     column-gap: 5px;
 }

 .cartTotals h3 {
     text-transform: uppercase;
 }

 .totalRow {
     display: contents;
 }

 :deep(div.productContainer) {
     display: block;
     line-height: normal;
     margin: auto 0;
     flex: 1;
 }

 :deep(div.productContainer > h3) {
     margin: 0;
     padding:0;
 }

 :deep(div.productContainer span) {
     width: 100%;
     display: block;
     white-space: break-spaces;
     height: 100%;
     font-size: 0.8em;
     text-align: justify;
 }

 :deep(.outterContent) {
     height: 100% !important;
     width: 100%;
     display: block;
     z-index: 10;
 }

 :deep(.innerContent) {
     width: 100%;
     height: 100% !important;
     overflow: hidden;
     display: flex;
     flex-direction: row;
     align-itens: center;
     column-gap: 10px;
     z-index: 100;
     position: relative;
     cursor: pointer;
 }

 :deep(.innerContent > img) {
     height: 100%;
     flex: 0 0 auto;
 }

 .products > span {
     width: 100%;
     text-align: center;
 }

 .products {
     overflow-x: auto;
     box-sizing: border-box;
     background-clip: border-box;
     padding-bottom: 20px;
     padding-right: 20px;
 }

 :deep(.flexTable) {
     min-width: 599px !important;
 }

 :deep(h3) {
    padding: 0;
 }

</style>
