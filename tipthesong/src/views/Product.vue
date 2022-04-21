<template>
    <div class="container">
        <h1>{{ product.name }}</h1>

        <div class="productInfoBox"> 
            <img :src="product.img">
            <div class="productInfoText">
                <h2> R$ {{ product.price.toFixed(2) }} </h2>
                <p> {{ product.description }} </p>
                <button type="button"> COMPRAR </button>
            </div>
        </div>

        <div class="productExtraInfo">
            <h2>Extra Info</h2>
            <p> {{ product.extraInfo }} </p>
        </div>

        <div class="suggestions"> 
            <h2>Suggestions</h2>


        </div>

    </div>
</template>

<script>
import ProductCard from "../components/products/Card"

export default {
    name: "Product",
    component: {
        ProductCard,
    },
    props: {
        // product: {
        //     type: Object,
        //     required: true,
        // }
    }, 
    data() {
        return {
            product: {
                id: 1,
                name: 'Now, Not Yet (2019) - halfalive', 
                price: 90.0 , 
                img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae.",
                extraInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tristique sollicitudin nibh sit amet commodo. Pretium lectus quam id leo in. Condimentum id venenatis a condimentum vitae."
            },
        };
    },

}
</script>

<style scoped>
.container {
    width: 90%;
    margin: 0 auto;
    text-align: justify;
}

h1 {
    text-align: center;
}

.productInfoBox {
    display: flex;
    flex-direction: row;
    align-items: stretch;
} 

img {
    display: flex;
    flex: initial;
    width: 100%;
}

.productInfoText {
    padding: 0 50px;
    display: flex;
    flex: initial;    
    flex-direction: column;
}

.productExtraInfo {
    margin: 100px 0;
}


h2 {
    padding: 0;
}

p {
    margin: 20px 0;
}

button {
    width: max-content;
}

</style>