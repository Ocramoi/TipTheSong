<template>
    <div class="container">
        <div class="card">
            <h3>Já possui uma conta?</h3>
            <br />
            <form>
                <label for="lEmail">Email:</label>
                <br />
                <input
                    type="text"
                    class="inputFill"
                    name="lEmail"
                    v-model="lEmail"
                    required
                    placeholder="Seu nome de usuário/email..." />

                <br />
                <br />

                <label for="lEmail">Senha:</label>
                <br />
                <input
                    type="password"
                    class="inputFill"
                    name="lEmail"
                    v-model="lPassword"
                    required
                    placeholder="Sua senha..." />

                <br />
                <br />

                <input type="checkbox" name="remember" v-model="remember"  />
                <label for="remember">Lembre-se de mim</label>

                <br />
                <br />

                <button @click="login" type="button">
                    Entrar
                </button>
            </form>
        </div>

        <div class="card">
            <h3>Ainda não possui conta no site? Cadastre-se agora</h3>
            <br />
            <form>
                <label for="rEmail">Endereço de email:</label>
                <br />
                <input
                    type="email"
                    class="inputFill"
                    name="rEmail"
                    v-model="rEmail"
                    required
                    placeholder="Email de cadastro..." />

                <br />
                <br />

                <div class="inputDouble">
                    <div>
                        <label for="rName">Nome:</label>
                        <br />
                        <input
                            type="text"
                            class="inputFill"
                            name="rName"
                            v-model="rName"
                            required
                            placeholder="Nome..." />
                    </div>

                    <div>
                        <label for="rPhone">Telefone:</label>
                        <br />
                        <input
                            type="tel"
                            class="inputFill"
                            name="rPhone"
                            v-model="rPhone"
                            required
                            placeholder="Telefone..." />
                    </div>
                </div>

                <br />

                <label for="rPassword">Senha:</label>
                <br />
                <input
                    type="password"
                    class="inputFill"
                    name="rPassword"
                    v-model="rPassword"
                    placeholder="Senha de conta..." />

                <br />
                <br />

                <label for="rConfirmPassword">Confirmar senha:</label>
                <br />
                <input
                    type="password"
                    class="inputFill"
                    name="rConfirmPassword"
                    v-model="rConfirmPassword"
                    placeholder="Repita a senha..." />

                <br />
                <br />

                <button @click="register"  type="button">
                    Cadastrar
                </button>
            </form>
        </div>
    </div>
</template>

<script type="text/javascript">
 export default {
     name: "LoginSignUp",
     inject: ['notyf'],
     data() {
         return {
             lEmail: "",
             lPassword: "",
             remember: false,
             rEmail: "",
             rName: "",
             rPhone: "",
             rPassword: "",
             rConfirmPassword: "",
         };
     },
     methods: {
         async login() {
             await this.$store.dispatch("auth", {
                 email: this.lEmail,
                 password: this.lPassword,
             });
             if (!this.$store.getters.getIsLogged) {
                 this.notyf.open({
                     type: 'error',
                     message: "Erro ao logar!",
                 });
             } else {
                 this.notyf.open({
                     type: 'success',
                     message: "Logado com sucesso!",
                 });
                 this.$router.push("/profile");
             }
         },
        async register() {
            if (this.rPassword != this.rConfirmPassword) {
                this.notyf.open({
                     type: 'error',
                     message: "Erro ao cadastrar: Senhas não batem!",
                 });
                return;
            }

             await this.$store.dispatch("register", {
                 name: this.rName,
                 phone: this.rPhone,
                 email: this.rEmail,
                 password: this.rPassword,

             });
             if (!this.$store.getters.getIsLogged) {
                 this.notyf.open({
                     type: 'error',
                     message: "Erro ao cadastrar!",
                 });
             } else {
                 this.notyf.open({
                     type: 'success',
                     message: "Cadastrado com sucesso!",
                 });
                 this.$router.push("/profile");
             }
         },
     },
 };
</script>

<style type="text/css" media="screen" scoped>
 .container {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
 }

 .card {
     min-width: min(300px, 100vw);
     padding: 1em;
     flex: 1 0 0;
     width: max-content;
     background-color: var(--primary-light);
     color: var(--white);
     width: max-content;
     box-shadow: 5px 5px 10px var(--primary-dark);
     box-sizing: border-box;
     margin: 1em;
     overflow: auto;
     height: min-content;
 }

 .inputFill {
     border-radius: 5px;
     width: 100%;
 }

 .card button {
     text-transform: uppercase;
     float: right;
     padding-left: 2em;
     padding-right: 2em;
 }

 .inputDouble {
     display: flex;
     flex-wrap: wrap;
     gap: 10px;
 }

 .inputDouble div {
     flex: 1 0 150px;
 }
</style>
