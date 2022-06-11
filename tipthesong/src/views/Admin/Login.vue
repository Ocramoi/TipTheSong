<template>
    <div class="container">
        <div class="card">
            <h2> ÁREA DO ADMINISTRADOR </h2>
            <form method="POST" action="">
                <label for="username">Nome de usuário</label>
                <br />
                <input
                    type="text"
                    name="username"
                    class="inputFill"
                    v-model="username"
                    required
                    placeholder="Seu nome de usuário..." />

                <br />
                <br />

                <label for="password">Senha</label>
                <br />
                <input
                    type="password"
                    name="password"
                    class="inputFill"
                    v-model="password"
                    required
                    placeholder="Sua senha..." />

                <br />
                <br />

                <input type="checkbox" name="remember" v-model="remember"  />
                <label for="remember">Lembre-se de mim</label>

                <br />
                <br />

                <button >
                    Entrar
                </button>
            </form>            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: null,
            password: null,
            remember: false,
        }
    },
}
</script>

<style scoped>
* {
    color: var(--white);
}

.container {
    position: relative;
    width: 100%;
    min-height: 60vh;
    background-color: var(--bg);
}

.card {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 40%;
    padding: 1rem;
    background-color: var(--primary-light);

    box-shadow: 5px 5px 10px var(--primary-dark);
    box-sizing: border-box;
    border-radius: 5px;
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