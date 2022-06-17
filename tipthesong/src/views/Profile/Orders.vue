<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar />
            <div class="profileBox">
                <h2> Meus pedidos </h2>
                <FlexTable
                    :titles="tableTitles"
                    :values="orders" />
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
 import Sidebar from '../../components/Profile/Sidebar.vue';
 import FlexTable from '../../components/App/FlexTable.vue';

 export default {
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
             return [
                 [
                     "pedido#1232",
                     "12/09/22",
                     "Concluido",
                     "R$ 30,00"
                 ],
                 [
                     "pedido#1232",
                     "12/02/22",
                     "Em andamento",
                     "R$ 24,00"
                 ],
             ];
         },
     },
 };
</script>

<style type="text/css" media="screen" scoped>
@import url('../../css/Profile.css');

h2 {
    text-transform: uppercase;
}

</style>
