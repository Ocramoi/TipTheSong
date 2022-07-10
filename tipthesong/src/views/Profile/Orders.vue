<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar class="sidebar"/>
            <div class="profileBox">
                <h2> Meus pedidos </h2>
                <FlexTable
                    v-if="orders.length"
                    :titles="tableTitles"
                    :values="orders" />
                <span v-else>Nenhum pedido por enquanto!</span>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
 import Sidebar from '../../components/Profile/Sidebar.vue';
 import FlexTable from '../../components/App/FlexTable.vue';

 export default {
     inject: ['notyf'],
     name: "ProfileOrders",
     data() {
         return {
             tableTitles: [
                 "Número do pedido",
                 "Data",
                 "Status de Pagamento",
                 "Total"
             ],
         };
     },
     components: {
         Sidebar,
         FlexTable,
     },
     computed: {
        orders() {
            return this.$store.getters.getUser?.orders?.map(order => [
                order._id,
                order.date,
                order.status,
                order.total,
            ]) || [];
        },
     },
 };
</script>

<style type="text/css" media="screen" scoped>
@import url('../../css/Profile.css');

h2 {
    text-transform: uppercase;
    padding: 0;
}

</style>
