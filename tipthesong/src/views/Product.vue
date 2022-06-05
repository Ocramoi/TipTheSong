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
            <h2>EXTRA INFO</h2>
            <p> {{ product.extraInfo }} </p>
        </div>
    
        <div class="suggestions"> 
            <AlbumCollection
             title="Suggestions"
             :albuns="albuns" />
        </div>

    </div>
</template>

<script>
import AlbumCollection from '../components/Home/AlbumCollection';

export default {
    name: "Product",
    components: {
        AlbumCollection
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
            albuns: [
                 {
                     id: 1,
                     name: 'Now, Not Yet',
                     price: 10.0,
                     released: 1929,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 2,
                     name: 'Now, Not Yet',
                     price: 90.0,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 3,
                     name: 'Now, Not Yet',
                     price: 90.0,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 4,
                     name: 'Now, Not Yet',
                     price: 90.0,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
                 {
                     id: 5,
                     name: 'Now, Not Yet',
                     price: 90.0,
                     released: 2019,
                     img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                 },
             ],
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

 * {
     color: var(--white);
 }

</style>
