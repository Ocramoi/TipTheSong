<template>
    <div class="cardItem">
        <img :src="item.img">
        <div>
            <span> {{ item.name }} </span>
            <br>
            <span> {{ item.quantity }}x R$ {{ item.price }} </span>
        </div>
    </div>
</template>

<script>
 export default {
     name: 'EndItem',
     props: {
         item: {
             type: Object,
             required: true,
         },
     },
     data() {
         return {};
     },
 }
</script>

<style scoped>
 .cardItem {
     padding: 0.5rem;
     background-color: var(--primary-light);

     box-shadow: 5px 5px 10px var(--primary-dark);
     box-sizing: border-box;
     
     display: grid;
     grid-template-columns: 4rem auto;
     gap: 1rem;
 }

 img {
    width: 100%;
    padding: 0;
 }
</style>
