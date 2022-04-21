<template>
    <div class="cartCard">
        <div class="flexContainer"> 
            <img class="flexItem" :src="product.img">
            <div class="flexItem"> 
                <h3>{{ product.name }}</h3>
                <p> {{ product.shortDescription }} </p>
            </div>
            <p class="flexItem" > {{ product.price.toFixed(2) }} </p>
            <p class="flexItem" > {{ product.quantity }} </p>
            <p class="flexItem" > {{ (product.quantity * product.price).toFixed(2) }} </p>
        </div>
    </div>
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

.cartCard {
    background-color: whitesmoke;
    padding: 10px;
    max-width: 900px;
}

.flexContainer {
    display: flex;
    flex-direction: row;

    gap: 20px;
    flex: initial;
    align-items: center;
}

.flexItem {
    min-width: 50px;
    padding: 10px;
}

img {
    width: 50%;
}



</style>
