<template>
    <div class="popupContainer">
        <div class="popup">
            <div class="popupHeader">
                <h3>Adicionar Cartão</h3>
                <button type="button" class="popupCloseBtn" @click="$emit('togglePopup')"> 
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <form action="POST">
            <div class="innerFlexContainer">
                <div>
                <label for="cardNumber">Número do Cartão</label>
                <br>
                <input
                    type="tel"
                    name="cardNumber"
                    v-mask="'#### #### #### ####'"
                    class="inputFill"
                    v-model="info.cardNumber"
                    required
                    placeholder="Numero do cartão..."/>
                </div>

                <div>
                <label for="dueData">Data de Validade</label>
                <br>
                <input
                    type="tel"
                    name="dueData"
                    v-mask="'##/##'"
                    class="inputFill"
                    v-model="info.dueData"
                    required
                    placeholder="Data de validade..."/>
                </div>
            </div>

            <div class="innerFlexContainer">
                <div style="grid-column: span 2">
                <label for="ownerName">Nome do Titular</label>
                <br>
                <input
                    type="text"
                    name="ownerName"
                    class="inputFill"
                    v-model="info.ownerName"
                    required
                    placeholder="Nome no Cartão..."/>
                </div>
            </div>

            <div class="innerFlexContainer">
                <div>
                <label for="securityCode">Código de Segurança</label>
                <br>
                <input
                    type="tel"
                    name="securityCode"
                    v-mask="'###'"
                    class="inputFill"
                    v-model="info.securityCode"
                    required
                    placeholder="Código de Segurança..."/>
                </div>

                <button type="button" @click="addCard"> Adicionar </button>
            </div>
            </form>
        </div>
    </div>
</template>


<script>
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
    inject: ['notyf'],
    setup () {
        return { v$: useVuelidate()}
     },
    data() {  
        return {
            info: {
                cardNumber: null,
                dueData: null,
                ownerName: null,
                securityCode: null
            }
        }
    },
    validations () {
         return {
            info: {
                cardNumber: {required},
                dueData: {required},     
                ownerName: {required},     
                securityCode: {required},     
            } 
         }
     },
    methods: {
        async addCard(){
            const isFormCorrect = await this.v$.$validate();

            if (!isFormCorrect) {
                this.notyf.open({
                     type: 'error',
                     message: "Erro ao salvar cartão: Por favor preencha os campos corretamente!",
                 });
                 
                 return;
            }

            const validInfo = Object.fromEntries(Object.entries(this.info).filter(([, v]) => v != null && v && String.toString(v).trim() != ""));
            await this.$store.dispatch('addCard', validInfo);

            if (this.$store.getters.getUserError) {
                this.notyf.open({
                         type: 'error',
                         message: "Erro ao adicionar cartão!",
                    });
            } else {
                this.notyf.open({
                         type: 'success',
                         message: "Cartão adicionado com sucesso!",
                    });
                this.$emit('togglePopup');
            }

        }
    }
}
</script>


<style scoped>
@import url("../../css/Popup.css");

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}

.innerFlexContainer {
    flex: 0 0 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
}

.innerFlexContainer > div {
    flex: 1;
    min-width: 300px;
}

.inputFill {
    border-radius: 5px;
    width: 100%;
 }

label {
    margin-bottom: 10px;
}

</style>
