<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar></Sidebar>
            <div class="profileBox">
                <form>
                <div class="innerFlexContainer">
                    <div>
                        <label for="username">Nome de usuário</label>
                        <br>
                        <input
                            type="text"
                            class="inputFill"
                            name="username"
                            v-model="username"
                            required
                            :placeholder="user.name" />
                    </div>
                    <div>
                        <label for="phone">Telefone</label>
                        <br>
                        <input
                            type="text"
                            class="inputFill"
                            name="phone"
                            v-model="phone"
                            required
                            :placeholder="user.phone" />
                    </div>
                </div>
                    <div>
                        <label for="email">Endereço de email</label>
                        <br>
                        <input
                            type="text"
                            class="inputFill"
                            name="email"
                            v-model="email"
                            required
                            :placeholder="user.email" />
                    </div>
                </form>

                <form>
                    <h3> MUDAR SENHA </h3>
                    <div>
                        <label for="curPassword">Senha Atual</label>
                        <br>
                        <input
                            type="password"
                            class="inputFill"
                            name="curPassword"
                            v-model="curPassword"
                            required
                            placeholder="" />
                    </div>
                    
                    <div>
                        <label for="newPassword">Nova Senha</label>
                        <br>
                        <input
                            type="password"
                            class="inputFill"
                            name="newPassword"
                            v-model="newPassword"
                            required
                            placeholder="" />
                    </div>

                    <div>
                        <label for="confirmPassword">Confimar Nova Senha</label>
                        <br>
                        <input
                            type="password"
                            class="inputFill"
                            name="confirmPassword"
                            v-model="confirmPassword"
                            required
                            placeholder=""/>
                    </div>
                </form>

                <button type="button"> Salvar Alterações </button>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../../components/Profile/Sidebar.vue'

export default {
    data() {
        return {
            username: null,
            phone: null,
            email: null,
            curPassword: null,
            newPassword: null,
            confirmPassword: null,
            user: {
                name: 'milena',
                email: 'milenaxd@gmail.com',
                phone: '(24) 98374-6262'
            }
        }
    },
    components: {
        Sidebar,
    }
}
</script>

<style scoped>
@import url('../../css/Profile.css');

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}

.innerFlexContainer {
    flex: 0 1 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
}

.innerFlexContainer > div {
    flex: 1;
    min-width: 300px;
}

.inputFill {
    border-radius: 5px;
    width: 100%;
}

button {
    float:  left;
    padding-left: 2em;
    padding-right: 2em;
}

form > h3 {
    padding: 0;
}

</style>
