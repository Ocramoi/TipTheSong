<template>
    <div class="card">
        <img class="image" :src="product.img">
        <div class="description">
            <h3> {{ product.name }} </h3>
            <p> R$ {{ product.price.toFixed(2) }} </p>
        </div>
        <button type="button">ADD TO CART</button>            

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
    flex: 1 1 0;
    display: flex;     
    flex-direction: column; 
    align-items: center;

    max-width: 300px;
    padding: 10px;
    margin: 30px;

    background-color: whitesmoke;
    box-shadow: 10px 1px 25px rgb(142, 142, 142);
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


</style>