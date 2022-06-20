<template>
    <div class="container">
        <div class="card">
            <h3>Já possui uma conta?</h3>
            <br />
            <form>
                <label for="userMail">Nome de usuário ou email:</label>
                <br />
                <input
                    type="text"
                    class="inputFill"
                    name="userMail"
                    v-model="userMail"
                    required
                    placeholder="Seu nome de usuário/email..." />

                <br />
                <br />

                <label for="userMail">Senha:</label>
                <br />
                <input
                    type="password"
                    class="inputFill"
                    name="userMail"
                    v-model="passLogin"
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
            <form method="POST" action="">
                <label for="rMail">Endereço de email:</label>
                <br />
                <input
                    type="email"
                    class="inputFill"
                    name="rMail"
                    v-model="rMail"
                    required
                    placeholder="Email de cadastro..." />

                <br />
                <br />

                <div class="inputDouble">
                    <div>
                        <label for="rUser">Usuário:</label>
                        <br />
                        <input
                            type="text"
                            class="inputFill"
                            name="rUser"
                            v-model="rUSer"
                            required
                            placeholder="Nome de usuário..." />
                    </div>

                    <div>
                        <label for="rTel">Telefone:</label>
                        <br />
                        <input
                            type="tel"
                            class="inputFill"
                            name="rTel"
                            v-model="rTel"
                            required
                            placeholder="Telefone..." />
                    </div>
                </div>

                <br />

                <label for="rPass">Senha:</label>
                <br />
                <input
                    type="password"
                    class="inputFill"
                    name="rPass"
                    v-model="rPass"
                    placeholder="Senha de conta..." />

                <br />
                <br />

                <label for="rConf">Confirmar senha:</label>
                <br />
                <input
                    type="password"
                    class="inputFill"
                    name="rConf"
                    v-model="rConf"
                    placeholder="Repita a senha..." />

                <br />
                <br />

                <button>
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
             userMail: "",
             passLogin: "",
             remember: false,
             rMail: "",
             rUser: "",
             rTel: "",
             rPass: "",
             rConf: "",
         };
     },
     methods: {
         async login() {
             await this.$store.dispatch("auth", {
                 user: this.userMail,
                 pass: this.passLogin,
             });

             if (!this.$store.getters.getIsLogged)
                 this.notyf.open({
                     type: 'error',
                     message: "Erro no login!",
                 });
             else {
                 this.notyf.open({
                     type: 'success',
                     message: "Logado com sucesso!",
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
