<template>
    <div class="container">
        <h2>Precisa de Ajuda? Entre em contato com a gente!</h2>
        <div class="contactInfo">
            <div class="contactCard">
                <h3> Email </h3>
                <p>{{email}}</p>
            </div>
            <div class="contactCard">
                <h3> Whatsapp </h3>
                <p>{{whatsapp}}</p>
            </div>
            <div class="contactCard">
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
    .container {
        width: 100%;
        padding: 20px;
        color: var(--white);
    }

    .contactInfo {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        column-gap: 5vw;
        row-gap:  5vh;
        text-align: center;
    }

    .contactCard {
        background-color: var(--primary-light);
        width: 20rem;
        height: 10rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>