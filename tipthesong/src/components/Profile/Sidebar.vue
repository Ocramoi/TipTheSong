<template>
    <div class="sidebar">
        <div class="profilePhoto">
            <img src="../../assets/Profile/do-utilizador.png" />
            <p> {{user.name }}#{{user.id}} </p>
        </div>
        <div class="profileMenu">
            <a v-bind:class="{'active': editProfile}"> EDITAR DADOS </a>
            <a v-bind:class="{'active': order}"> PEDIDOS </a>
            <a v-bind:class="{'active': paymentMethods}"> METODOS DE PAGAMENTO </a>
            <a v-bind:class="{'active': addresses}"> ENDEREÇOS </a>
            <a> SAIR </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "milena",
                id: 111,
            },
            editProfile: true,
            order: false,
            paymentMethods: false,
            addresses: false,
        }
    },
}
</script>

<style scoped>
* {
    color: var(--white);
}

.sidebar {
    width: fit-content;
    padding: 1rem;
    background-color: var(--primary-light);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
}



.profilePhoto {
    text-align: center;
    
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    width: 150px;
}

.profileMenu {
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
}


a, a:link, a:hover, a:visited, a:active {
    text-decoration: none;
    font-size: 1rem;
    padding: 0.25rem 1rem;
}

.active {
    background-color: var(--secondary-dark);
}

</style>