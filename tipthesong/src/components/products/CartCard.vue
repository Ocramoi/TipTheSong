<template>
    <button type="button">X</button>
    <img :src="product.img">
    <div class="description"> 
        <h3>{{ product.name }}</h3>
        <p> {{ product.shortDescription }} </p>
    </div>
    <p> {{ product.price.toFixed(2) }} </p>            
    <p> {{ product.quantity }} </p>        
    <p> {{ (product.quantity * product.price).toFixed(2) }} </p>
</template>

<script>
export default {
    name: "CartCard",
    // props: {
    //     product: {
    //         type: Object,
    //         required: true,
    //     }
    // },
    data() {
        return {
                product: {
                    id: 7,
                    price: 90.0,
                    quantity: 2, 
                    name: "Now, Not Yet (2019) - halfalive",
                    shortDescription: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus sed expedita, adipisci aliquid minus voluptatibus dicta sapiente consequuntur eveniet cumque",
                    img: 'https://m.media-amazon.com/images/I/71dgsFggCZL._AC_SL1500_.jpg'
                }
        }
    },

}
</script>

<style scoped>

img {
    width: 100%;
}



</style>
