<template>
    <div class="card">
        <router-link :to="`/product/${product.id}`">
            <img class="image" :src="product.img">
            <div class="description">
                <h3> {{ product.name }} </h3>
                <p> R${{ product.price.toFixed(2) }} </p>
            </div>
        </router-link>
        <div class="interact">
            <i class="fas fa-cart-plus"></i>
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
        }
    },

}
</script>


<style type="text/scss" media="screen" scoped>
.card {
    flex: 250px 0 1;
    display: flex;     
    flex-direction: column; 
    align-items: center;

    padding: 10px;
    margin: 10px;

    background-color: var(--grey);
    box-shadow: 10px 1px 15px var(--shadow);

    color: currentColor;
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
}

.interact {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

 .interact > * {
     display: block;
 }

 i {
     font-size: 2em;
     transition: 0.4s;
     cursor: pointer;
 }

 i:hover {
     transform: scale(1.05);
     transform-origin: center center;
 }

</style>
