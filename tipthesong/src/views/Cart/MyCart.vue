<template>
    <div class="container">
        <div class="cartStatus">
            <h2 class="active"> Carrinho de compras </h2>
            <h2> Envio e pagamento </h2>
            <h2> Finalizar pedido </h2>
        </div>

        <div class="cart">
            <FlexTable
                class="flexTable"
                rowHeight="5rem"
                :center="true"
                :titles="['', 'Produto', 'Preço', 'Quantidade', 'Total']"
                :values="productList" />

            <div class="cartTotals">
                <h3 style="grid-column: span 2">Valores totais</h3>

                <div class="totalRow">
                    <span>Subtotal:</span>
                    <span> R${{ calcSubtotal.toFixed(2) }} </span>
                </div>

                <div class="totalRow">
                    <span>Entrega:</span>
                    <span> R${{ calcDelivery.toFixed(2) }} </span>
                </div>

                <div class="totalRow">
                    <span>Total:</span>
                    <span> R${{ calcTotal.toFixed(2) }} </span>
                </div>
                <router-link to="/payment" custom v-slot="{ navigate }"> 
                    <button  v-on:click="navigate" role="link" style="grid-column: span 2"> Concluir Compra </button>
                </router-link>
            </div>
        </div>

        <br />
        <router-link to="/products" custom v-slot="{ navigate }"> 
            <button v-on:click="navigate" role="link" type="button"> Continuar Comprando </button>
        </router-link>
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
        return {
            products: [
                {
                    id: 1,
                    name: 'Now, Not Yet',
                    quantity: 1,
                    price: 90.0,
                    shortDescription:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda, autem corporis excepturi dolorem vel nostrum aut illum voluptatum, soluta provident. Incidunt a quam vero nobis ratione exercitationem aspernatur magni.",
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 2,
                    name: 'Now, Not Yet', 
                    price: 90.0, 
                    quantity: 1,
                    // shortDescription:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda, autem corporis excepturi dolorem vel nostrum aut illum voluptatum, soluta provident. Incidunt a quam vero nobis ratione exercitationem aspernatur magni.",
                    shortDescription:  "Lorem ipsum dolor",
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                }                
            ]
        }
    },
    computed: {
        calcSubtotal() {
            return 0;
        },
        calcDelivery() {
            return 0;
        },
        calcTotal() {
            return 0;
        },
        productList() {
            return this.products.map(p => [
                {
                    content: '<i class="clickableIcon fa-solid fa-trash trashIcon"></i>',
                    style: "display: flex; width: 100%; justify-content: center; align-itens: center; padding: 5px;",
                },
                {
                    content: `<img src="${p?.img}" /><div class="productContainer"><h3 style="margin:0;padding:0">${p?.name}</h3><span>${p?.shortDescription}</span></div>`,
                    class: "innerContent",
                },
                p?.price,
                p?.quantity,
                1,
            ]);
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

 :deep(.innerContent) {
     width: 100%;
     height: 100% !important;
     overflow: hidden;
     display: flex;
     flex-direction: row;
     align-itens: center;
     column-gap: 10px;
 }

 :deep(.innerContent > img) {
     height: 100%;
     flex: 0 0 auto;
 }
</style>
