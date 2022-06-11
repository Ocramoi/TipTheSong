<template>
    <div class="sidebar">
        <div class="profilePhoto">
            <img src="../../assets/Profile/do-utilizador.png" />
            <p> {{user.name }}#{{user.id}} </p>
        </div>
        <div class="profileMenu">
            <a :class="{ 'active': $route.name == 'ProfileEdit' }"> EDITAR DADOS </a>
            <a :class="{ 'active': $route.name == 'ProfileOrders' }"> PEDIDOS </a>
            <a :class="{ 'active': $route.name == 'ProfileCards' }"> METODOS DE PAGAMENTO </a>
            <a :class="{ 'active': $route.name == 'Addresses' }"> ENDEREÇOS </a>
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
    padding: 3rem 0.5rem 9em 0.5rem;
    background-color: var(--primary-light);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}



.profilePhoto {
    text-align: center;
    
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profilePhoto > p {
    font-style: italic;
}

img {
    width: 100px;
}

.profileMenu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
}


a, a:link, a:visited, a:active {
    text-decoration: none;
    font-size: 1rem;
    padding: 0.25rem 1rem;
    box-sizing: border-box;
    border-radius: 5px;
}

a:hover {
    background-color: var(--secondary-light);
}

.active {
    background-color: var(--secondary-dark);
}

</style>