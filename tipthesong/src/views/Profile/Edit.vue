<template>
    <div class="container">
        <div class="innerProfileContainer">
            <Sidebar class="sidebar"/>
            <div class="profileBox">
                <form>
                <div class="innerFlexContainer">
                    <div>
                        <label for="newUserName">Nome de usuário</label>
                        <br>
                        <input
                            type="text"
                            class="inputFill"
                            name="newUserName"
                            v-model="newUserName"
                            required
                            :placeholder="user?.name" />
                    </div>
                    <div>
                        <label for="newPhone">Telefone</label>
                        <br>
                        <input
                            type="text"
                            class="inputFill"
                            name="newPhone"
                            v-model="newPhone"
                            required
                            :placeholder="user?.phone" />
                    </div>
                </div>
                    <div>
                        <label for="newEmail">Endereço de Email</label>
                        <br>
                        <input
                            type="text"
                            class="inputFill"
                            name="newEmail"
                            v-model="newEmail"
                            required
                            :placeholder="user?.email" />
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
                        <label for="confirmNewPassword">Confimar Nova Senha</label>
                        <br>
                        <input
                            type="password"
                            class="inputFill"
                            name="confirmNewPassword"
                            v-model="confirmNewPassword"
                            required
                            placeholder=""/>
                    </div>
                </form>

                <button type="button" @click="saveChanges"> Salvar Alterações </button>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../../components/Profile/Sidebar.vue'

export default {
    inject: ['notyf'],
    data() {
        return {
            error: false,
            newUserName: null,
            newPhone: null,
            newEmail: null,
            curPassword: null,
            newPassword: null,
            confirmNewPassword: null,
        }
    },
    components: {
        Sidebar,
    },
    computed: {
        user() {
            return this.$store.getters.getUser;
        }
    },
    methods: {
        async saveChanges() {
            this.error = false;

            if (this.newUserName) {
                await this.$store.dispatch("setUserName", {name: this.newUserName});
                this.newUserName = null;
            }

            if (this.newPhone) {
                await this.$store.dispatch("setUserPhone", {phone: this.newPhone});
                this.newPhone = null;
            }

            if (this.newEmail) {
                await this.$store.dispatch("setUserEmail", {email: this.newEmail});
                this.newEmail = null;
            }

            if (this.newPassword) {
                if (!this.confirmNewPassword || this.confirmNewPassword != this.newPassword) {
                    this.notyf.open({
                        type: 'error',
                        message: "Novas senhas não batem!",
                    });
                    this.error = true;
                } else if (this.curPassword != this.user.pass) {
                    this.notyf.open({
                     type: 'error',
                     message: "Senha antiga inválida!",
                    });
                    this.error = true;
                } else {
                    await this.$store.dispatch("setUserPass", {pass: this.newPassword});
                    this.curPassword = null;
                    this.newPassword = null;
                    this.confirmNewPassword = null;
                }
            }        
        }
    },
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
