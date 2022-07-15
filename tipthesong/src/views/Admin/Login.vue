<template>
    <div class="container">
        <div class="card">
            <h2> ÁREA DO ADMINISTRADOR </h2>
            <form method="POST" action="submit">
                <label for="email">Email de Administrador</label>
                <br />
                <input
                    type="text"
                    name="email"
                    class="inputFill"
                    v-model="email"
                    placeholder="Seu email..." 
                    required />

                <br />
                <br />

                <label for="password">Senha</label>
                <br />
                <input
                    type="password"
                    name="password"
                    class="inputFill"
                    v-model="password"
                    placeholder="Sua senha..." 
                    required />

                <br />
                <br />

                <!-- <input type="checkbox" name="remember" v-model="remember"  />
                     <label for="remember">Lembre-se de mim</label> -->

                <button type="submit" @click.stop.prevent="login()"> Entrar </button>
            </form>            
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, email, requiredIf} from '@vuelidate/validators';


export default {
    inject: ['notyf'],
    data() {
        return {
            email: null,
            password: null,
            remember: false,
        }
    },
    setup () {
        return { v$: useVuelidate()}
     },
    validations () {
        return {
            email: {required, email},
            password: {requiredIf: requiredIf(this.email)}
        }
    },
    methods: {
        async login() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) {
                this.notyf.open({
                     type: 'error',
                     message: "Erro no login: Por favor preencha os campos corretamente!",
                 });
                 
                 return;
            }

            await this.$store.dispatch("auth", {
                 email: this.email,
                 password: this.password,
            });
            
            if (!this.$store.getters.getIsLogged) {
                 this.notyf.open({
                     type: 'error',
                     message: "Erro no login: Usuário ou senha inválidos!",
                 });
            } else if (this.$store.getters.getPermDenied == true) {
                this.notyf.open({
                     type: 'error',
                     message: "Permissão Negada!",
                 });
            } else {
                 this.notyf.open({
                     type: 'success',
                     message: "Logado com sucesso!",
                 });
                this.$router.push({ name : 'AdminHomepage'});
             }
         },
    },
    beforeCreate() {
        if (this.$store.getters.getIsLogged && !this.$store.getters.getPermDenied) {
            this.$router.push({ name : 'AdminHomepage'});
        }
    },
}
</script>

<style scoped>
* {
    color: var(--white);
}

.container {
    margin: 0 !important;
    position: relative;
    top: 10vh;    

    width: 100%;
    min-height: inherit;   
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card { 
    max-width: 500px;
    min-width: min(90vw, 500px);
    min-height: 350px;
    padding: 1rem;
    background-color: var(--primary-light);

    box-shadow: 5px 5px 10px var(--primary-dark);
    box-sizing: border-box;
    border-radius: 5px;

    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
}

.card > h2 {
    text-align: center;
    margin: 0 0 20px 0;
    padding: 0;
}

.inputFill {
    border-radius: 5px;
    width: 100%;

}

label {
    margin-bottom: 10px;
}

.card button {
    text-transform: uppercase;
    display: block;
    margin: 0 auto;

    padding-left: 2em;
    padding-right: 2em;
 }



</style>
