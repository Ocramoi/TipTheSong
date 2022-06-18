<template>
    <div class="trashContainer columnContainer">
        <div class="containerShadow"></div>
        <i class="clickableIcon fa-solid fa-trash trashIcon"></i>
    </div>
    <div class="imgContainer columnContainer">
        <div class="containerShadow"></div>
        <img :src="product?.img">
    </div>
    <div class="description columnContainer">
        <div class="containerShadow"></div>
        <h3>{{ product?.name }}</h3>
        <p> {{ product?.shortDescription }} </p>
    </div>
    <div class="columnContainer">
        <div class="containerShadow"></div>
        <p class="num"> {{ product?.price.toFixed(2) }} </p>
    </div>
    <div class="columnContainer">
        <div class="containerShadow"></div>
        <p class="num"> {{ product?.quantity }} </p>
    </div>
    <div class="columnContainer">
        <div class="containerShadow"></div>
        <p class="num"> {{ (product?.quantity * product?.price).toFixed(2) }} </p>
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
img {
    width: 100%;
    max-width: 150px;
    margin: 5px;
    box-sizing: border-box;
    /* padding: 5px 0px; */
 }

 .columnContainer {
     height: 100%;
     display: flex;
     align-items: center;
     padding: 0 8px;
     background-color: var(--primary-light);
     box-sizing: border-box;
 }

 .imgContainer, .trashContainer {
     text-align: center;
 }

 .trashIcon {
     font-size: 1.1em;
     margin: 0 10px;
     display: block;
     width: 100%;
 }

 .description {
     height: 100%;
     display: grid;
     grid-template-columns: 1fr;
     grid-template-rows: auto;
     align-items: center;
 }

 .description > p {
     /* text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden; */
     /* width: max-content; */
     /* max-width: 200px; */
 }

 .num {
     width: 100%;
     text-align: center;
 }

 * {
     background-color: var(--primary-light);
     color: var(--white);
 }
</style>
