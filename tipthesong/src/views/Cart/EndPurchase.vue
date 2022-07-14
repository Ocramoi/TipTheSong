<template>
    <div class="container">                    
        <div class="cartStatus">
            <h2> Carrinho de compras </h2>
            <h2> Envio e pagamento </h2>
            <h2 class="active"> Finalizar pedido </h2>
        </div>
        
        <!-- Flex for all elements -->
        <div class="allInfo">
            <!-- Flex for address, payment method and Itens -->
            <div class="cartInfo">
                <!-- Flex for addres and Payment -->
                <div class="cart">
                    <div>
                        <h3>ENDEREÇO</h3>
                        <div class="card">
                            <span> - {{ address.name }} </span>
                            <br>
                            <span> - {{ address.address }} </span>
                            <br>
                            <span> - {{ address.CEP }} - {{ address.city }}, {{ address.state }} </span>
                            <br>
                            <span> - {{ address.country }} </span>
                            <br>
                            <span> - {{ address.cellphone }} </span>
                        </div>
                    </div>

                    <div>
                        <h3>FORMA DE PAGAMENTO</h3>
                        <div class="card">
                            <div v-html="payment" />
                        </div>
                    </div>
                </div>
                <!-- flex for itens -->
                <div class="itens">
                    <h3> ITENS </h3>
                    <div class="item">
                        <EndItem
                            v-for="item in productList"
                            :item="item"
                            :key="item.id" />
                    </div>
                </div>
            </div>
            <!-- Flex for request info -->
            <div class="cartTotals">
                <div>
                    <h3>RESUMO DO PEDIDO</h3>
                </div>

                <div class="innerFlexContainer">
                    <div class="totalRow">
                        <span>Itens:</span>
                    </div>
                    <div class="totalRow">
                        <span> R${{ subTotal.toFixed(2) }} </span>
                    </div>
                </div>
                <div class="innerFlexContainer">
                    <div class="totalRow">
                        <span>Frete e taxas:</span>
                    </div>
                    <div class="totalRow">
                        <span> R${{ calcDelivery.toFixed(2) }} </span>
                    </div>
                </div>
                <div class="innerFlexContainer">
                    <div class="totalRow">
                        <span style = "font-weight: bold"> TOTAL: </span>
                    </div>
                    <div class="totalRow">
                        <span style = "font-weight: bold"> R${{ total.toFixed(2) }} </span>
                    </div>
                </div>
                
                <button @click="finish"> FINALIZAR PEDIDO </button>
            </div>
        </div>
    </div>

</template>

<script>
 import EndItem from "../../components/Payment/EndItem";

 export default {
     name: "EndPurchase",
     inject: ['notyf'],
     components: {
         EndItem,
     },
     data() {
         return {};
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
             return cartIds?.map(id => {
                 return {
                     id: id,
                     img: this.products[id]?.frontCover,
                     name: this.products[id]?.title,
                     quantity: this.cartList[id] || -1,
                     price: `R$${((this.cartList[id] || -1) * this.products[id]?.price).toFixed(2)}`,
                 };
             });
         },
         cards() {
             return this.$store.getters.getUser?.cards.map(card => {
                 return {
                     _id: card._id,
                     cardNumber: card.cardNumber.substr(-4),
                     ownerName: card.ownerName,
                     dueDate: card.dueData,
                 };
             });
         },
         payment() {
             if (["boleto", "pix"].includes(this.currentOrder?.method)) {
                 return this.currentOrder?.method;
             } else {
                 let card = this.cards
                                .filter(c => c._id == this.currentOrder?.method)[0];
                 return `Cartão: ${card?.ownerName}<br/>${card?.cardNumber} - ${card?.dueDate}`;
             }
         },
         address() {
             return this.$store
                        .getters
                        .getUser?.addresses
                                 .filter(address => address._id == this.currentOrder?.address)
                                 .map(address => {
                                     return {
                                         name: address.name,
                                         address: `${address.address}, ${address.complemment}`,
                                         city: address.city,
                                         state: address.state,
                                         CEP: address.postalCode,
                                         country: address.country,
                                         cellphone: address.phone,
                                     };
                                 })[0] || {};
         },
         currentOrder() {
             return this.$store.getters.getOrderInfo || null;
         },
     },
     methods: {
         async finish() {
             await this.$store
                       .dispatch("finishOrder", );
             if (this.$store.getters.getOrderSuccess) {
                 this.notyf.open({
                     type: "success",
                     message: "Compra realizada com sucesso!",
                 });
                 this.$router.push("/profile/orders");
             } else {
                 this.notyf.open({
                     type: "error",
                     message: "Erro ao efetuar a compra! Tente novamente"
                 });
                 if (this.$store.getters.getOutOfStock) {
                     this.notyf.open({
                         type: "error",
                         message: `A quantidade desejada dos seguintes álbuns está indisponível:` +
                                  this.$store.getters.getOutOfStock.join(";")
                     });
                 }
             }
         },
     },
 }
</script>

<style scoped>
 @import url('../../css/Cart.css');

 h3 {
     padding: 0;
     margin: 0;
 }

 .allInfo {
     display: flex;
     flex-wrap: wrap;
     gap: 2rem;
     flex: 1 0 100%;
     flex-direction: row;
     align-items: flex-start;
     justify-content: center;
 }

 .allInfo > * {
     flex: 1;
 }

 .cart {
     display: flex;
     gap: 50px;
     flex-direction: row;
     flex-wrap: wrap;
     align-items: stretch;
     flex: 1;
     min-width: 300px;
 }

 .cart > * {
     flex: 1;
     min-width: 300px;
 }

 .cartTotals {
     max-width: 400px;
     min-width: min-content;
     gap: 1rem;
     display: flex;
     flex-direction: column;
     justify-content: center;
 }

 .cartInfo {
     display: flex;
     flex-wrap: wrap;
     gap: 1rem;
 }

 .innerFlexContainer {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: space-between;
 }

 .card {
     margin-top: 0.5rem;
     padding: 1rem;
     background-color: var(--primary-light);
     box-shadow: 5px 5px 10px var(--primary-dark);
     box-sizing: border-box;
     /* border-radius: 5px; */
 }

 .itens {
     display: flex;
     flex-direction: column;
     width: 100%;
 }

 .item {
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     flex-wrap: wrap;
     align-items: stretch;
     gap: 0.5rem;
     margin-top: 0.5rem;
 }

 .totalRow {
     display: contents;
 }
</style>
