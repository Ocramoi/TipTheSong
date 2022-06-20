<template>
    <div class="popupContainer">
        <div class="popup">
            <div class="popupHeader">
                <h3>{{ popupTitle }}</h3>
                <button type="button" class="popupCloseBtn" @click="$emit('togglePopup')">
                    <i class="fa-solid fa-xmark"></i>
                </button>
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
                    <button class="center" type="button">{{ popupTitle }}</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
 export default {
     props: {
         payload: {
             type: Object,
             required: false,
         },
     },
     data() {
         return {
             name: null,
             cellphone: null,
             login: null,
             password: null,
         }
     },
     watch: {
         payload(updated) { this.loadFromPayload(updated); },
     },
     mounted() {
         this.loadFromPayload(this.payload);
     },
     computed: {
         popupTitle() {
             if (this.payload) return "Editar admin";
             return "Criar admin";
         },
     },
     methods: {
         loadFromPayload(payload) {
             this.name = payload?.name;
             this.cellphone = payload?.cellphone;
             this.login = payload?.login;
             this.password = payload?.password;
         },
     },
 }
</script>

<style scoped>
 @import url('../../css/Popup.css');

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
