<template>
    <div class="container">
        <div class="card">
            <h3> Pedido concluído com sucesso </h3>
            <div>
                <p> Obrigado por comprar conosco!</p>
                <p> Seu pedido de número #{{order.number}} foi concluído com sucesso. Você pode acompanhá-lo em seu perfil na aba de pedidos.</p>
            </div>
            <button type="button"> Ir para meus pedidos </button>
        </div>
    </div>
</template>

<script>
export default {
    // props: {
    //     order: {
    //         type: Object,
    //         required: true,
    //     },
    // }
    data () {
        return {
            order: {
                number: 1233
            }
        }
    }
}
</script>


<style scoped>
* {
    color: var(--white);
}

.container {
    width: 100%;
    background-color: var(--bg);
}

.card {
    width: 50%;
    margin: 1rem auto;
    padding: 1rem;
    background-color: var(--primary-light);

    box-shadow: 5px 5px 10px var(--primary-dark);
    box-sizing: border-box;
    
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;

}

.card > h3 {
    text-align: center;
    padding: 0;
}

.card button {
    text-transform: uppercase;
    display: block;
    margin: 0 auto;

    padding-left: 2em;
    padding-right: 2em;
}
</style>