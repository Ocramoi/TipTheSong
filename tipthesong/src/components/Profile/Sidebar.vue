<template>
    <div class="sidebar">
        <div class="profilePhoto">
            <img src="../../assets/Profile/do-utilizador.png" />
            <p> {{user.name }}#{{user.id}} </p>
        </div>
        <div class="profileMenu">
            <router-link
                :class="{ 'active': $route.name == 'ProfileEdit' }"
                :to="{ name: 'ProfileEdit', }">
                Editar dados
            </router-link>

            <router-link
                :class="{ 'active': $route.name == 'ProfileOrders' }"
                :to="{ name: 'ProfileOrders', }">
                Pedidos
            </router-link>

            <router-link
                :class="{ 'active': $route.name == 'ProfilePayment' }"
                :to="{ name: 'ProfilePayment', }">
                Métodos de pagamento
            </router-link>

            <router-link
                :class="{ 'active': $route.name == 'ProfileAddresses' }"
                :to="{ name: 'ProfileAddresses', }">
                Endereços
            </router-link>


            <router-link
                :to="{ name: 'Home', }">
                Sair
            </router-link>
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
    flex: 1 0 max-content;
    width: 100%;
    max-width: max-content;
    padding: 2rem 0.5rem 2em 0.5rem;
    background-color: var(--primary-light);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;
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
    cursor: pointer;
    text-transform: uppercase;
}

a:hover {
    background-color: var(--secondary-light);
}

.active {
    background-color: var(--secondary-dark);
}

</style>
