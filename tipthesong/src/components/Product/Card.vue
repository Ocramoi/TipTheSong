<template>
    <div class="card">
        <router-link :to="`/product/${product?.id}`">
            <img class="image" :src="product?.img">
            <div class="description">
                <h3> {{ product?.name }} </h3>
                <p> R${{ product?.price.toFixed(2) }} </p>
            </div>
        </router-link>

        <div class="interact" v-if="interact">
            <button class="cartButton">
                <i class="fa-solid fa-cart-plus"></i>
            </button>
            <button type="button">Comprar agora</button>
        </div>
    </div>
</template>

<script>
 export default {
     name: "Card",
     props: {
         product: {
             type: Object,
             required: true,
         },
         interact:  {
             type: Boolean,
             required: false,
             default: true,
         },
     },
 }
</script>


<style type="text/scss" media="screen" scoped>
 .card {
     flex: 0 1 200px;
     display: flex;
     flex-direction: column;
     align-items: center;

     padding: 5px;
     margin: 20px;

     background-color: var(--primary-light);
     box-shadow: 5px 5px 10px var(--primary-dark);

     color: var(--white);
     text-decoration: none;
     transition: 0.4s;
 }

 .card:hover {
     transform: scale(1.02);
     transform-origin: center center;
 }

 .description {
     width: 100%;
     text-align: center;
 }

 img, h3, p {
     max-width: 100%;
 }

 h3, p {
     word-wrap: break-word;
     margin: 5px 0px;
     padding: 0;
 }

 .interact {
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     width: 100%;
     padding: 0 15px;
     box-sizing: border-box;
     gap: 10px;
 }

 .interact > button {
     flex: 1;
 }

 .cartButton {
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 100%;
     aspect-ratio: 1 / 1;
     flex: 0 0 min-content !important;
 }

</style>
