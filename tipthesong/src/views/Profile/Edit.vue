<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar></Sidebar>
            <div class="profileBox">
                <form class="formGrid">
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
                    
                    <div style="grid-column: span 2">
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

                <form class="formGrid">
                    <h3 style="grid-column: span 2"> MUDAR SENHA </h3>
                    <div style="grid-column: span 2">
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

.formGrid {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
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

</style>
