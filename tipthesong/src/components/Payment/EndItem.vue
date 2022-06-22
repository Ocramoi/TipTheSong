<template>
    <div class="cardItem">
        <span> {{ item.name }} </span>
        <br>
        <span> {{ item.quantity }}x R$ {{ item.price }} </span>
    </div>
</template>

<script>
    export default {
        name: 'EndItem',
        data() {
            return {
                item: {
                    id: 1,
                    name: 'Now, Not Yet (2019) - halfalive',
                    quantity: 1,
                    price: '90.00',
                }
            }
        },
    }
</script>

<style scoped>
    .cardItem {
        padding: 1rem;
        background-color: var(--primary-light);

        box-shadow: 5px 5px 10px var(--primary-dark);
        box-sizing: border-box;
        border-radius: 5px; 
    }
</style>