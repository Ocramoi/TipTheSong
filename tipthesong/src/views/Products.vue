<template>
    <TopBar />
    
    <div class="container">
        <div class="productList">
            <div class="productCard" v-for="product in products" :key="product.id"> 
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
    
</template>

<script>
import TopBar from '../components/TopBar';
import ProductCard from '../components/products/Card';

export default {
    name: "Products",
    components: {
        TopBar,
        ProductCard,
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 2,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 3,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 4,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 5,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 6,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 7,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 1,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 2,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 3,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 4,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 5,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 6,
                    title: 'Now, Not Yet', 
                    price: 90.0 , 
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                },
                {
                    id: 7,
                    title: 'Now, Not Yet', 
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