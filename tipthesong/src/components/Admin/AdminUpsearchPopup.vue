<template>
    <div class="popup">
        <div class="popupHeader">
            <h3>Criar admin</h3>
            <button type="button" class="popupCloseBtn" v-on:click="TriggerAdminPopup">x</button>
        </div>

        <form action="POST">
            <div>
                <label for="name">Nome</label>
                <br>
                <input
                    type="text"
                    name="name"
                    class="inputFill"
                    v-model="name"
                    required
                    placeholder="Nome" />
            </div>
            <div>
                <label for="cellphone">Telefone</label>
                <br>
                <input
                    type="text"
                    name="cellphone"
                    class="inputFill"
                    v-model="cellphone"
                    required
                    placeholder="(ddd) 9xxxx-xxxx" />
            </div>
            <div>
                <label for="login">E-mail</label>
                <br>
                <input
                    type="email"
                    name="login"
                    class="inputFill"
                    v-model="login"
                    required
                    placeholder="Login (email) do admin" />
            </div>
            <div>
                <label for="password">Senha</label>
                <br>
                <input
                    type="text"
                    name="password"
                    class="inputFill"
                    v-model="password"
                    required
                    placeholder="Senha do admin" />
            </div>
            
            <div>
                <button class="center" type="button"> Criar admin </button>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    props: [
        'TriggerDiscPopup'
    ],
    data() {
        return {
            name: null,
            cellphone: null,
            login: null,
            password: null,
        }
    },
}
</script>

<style scoped>
    .popup {
        padding: 1rem;
        width: 50%;
        
        position: fixed;
        left: 25%;
        top: 25%;
        z-index: 1000;
        background-color: var(--bg-popup);
        border-radius: 5px;
        overflow-y: auto;
        max-height: 80vh;
    }

    .popupHeader {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .popupHeader > * {
        padding: 0px;
        margin: 0px;
    }

    .popupCloseBtn {
        width: 1.9rem;
        height: 1.9rem;
        border-radius: 999px;
    }

    form {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        flex-wrap: wrap;
    }

    form > * {
        width: 100%;
    }

    .inputFill {
        border-radius: 5px;
        width: 100%;
    }

    label {
        margin-bottom: 10px;
    }

    .center {
        width: 30%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
</style>