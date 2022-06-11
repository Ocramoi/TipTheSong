<template>
    <div class="container">
        <h2> Precisa de Ajuda? Entre em contato com a gente! </h2>
        <div class="cardBox">
            <div class="card">
                <h3> Email </h3>
                <p>{{email}}</p>
            </div>
            <div class="card">
                <h3> Whatsapp </h3>
                <p>{{whatsapp}}</p>
            </div>
            <div class="card">
                <h3> Telefone </h3>
                <p>{{telefone}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "arteemplastico@gmail.com",
            whatsapp: "(24) 98890-7654",
            telefone: "(16) 2234-2578"
        }
    },
}
</script>

<style type="text/css" media="screen" scoped>
    * {
        color: var(--white);
    }
    
    .container {
        width: 100%;
        margin-top: 1rem;
    }

    .cardBox {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        gap: 2vw;
        text-align: center;
    }

    .card {
        background-color: var(--primary-light);
        width: 300px;
        height: 250px;

        display: flex;
        flex-direction: column;
        justify-content: center;

        box-shadow: 5px 5px 10px var(--primary-dark);
        box-sizing: border-box;
        border-radius: 5px;        
    }
</style>