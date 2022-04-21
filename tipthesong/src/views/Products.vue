<template>
    <div class="container">
        <div class="productList">
            <div class="productCard" v-for="product in products" :key="product.id"> 
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
    
</template>

<script>
import ProductCard from '../components/products/Card';

export default {
    name: "Products",
    components: {
        ProductCard,
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 2,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 3,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 4,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 5,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 6,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 7,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 1,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 2,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 3,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 4,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 5,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 6,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 7,
                    name: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                }                  
            ]
        }
    },
}

</script>

<style scoped>

.container {
    width: 90%;
    margin: 0 auto;
}

.productList {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    
    flex-basis: 0;
    justify-content: center; 
}

</style>