<template>
    <div>
        Home
    </div>
</template>

<script type="text/javascript">
 export default {
     name: "Home",
     data() {
         return {
         };
     },
     async created() {
         await this.$store.dispatch("loadProductList", { page: 1 });
     },
     computed: {
         products() {
             return this.$store.getters.getProductList;
         },
     },
 };
</script>

<style type="text/css" media="screen" scoped>
</style>
