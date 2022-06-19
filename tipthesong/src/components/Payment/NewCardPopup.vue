<template>
    <div class="popupContainer">
        <div class="popup">
            <div class="popupHeader">
                <h3>Adicionar Cartão</h3>
                <button type="button" class="popupCloseBtn" @click="$emit('togglePopup')" />
            </div>

            <form action="POST">
            <div class="innerFlexContainer">
                <div>
                <label for="cardNumber">Número do Cartão</label>
                <br>
                <input
                    type="text"
                    name="cardNumber"
                    class="inputFill"
                    v-model="cardNumber"
                    required
                    placeholder="xxxx xxxx xxxx xxxx"/>
                </div>

                <div>
                <label for="dueDate">Data de Validade</label>
                <br>
                <input
                    type="text"
                    name="dueDate"
                    class="inputFill"
                    v-model="dueDate"
                    required
                    placeholder="mm/yyyy"/>
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
                    v-model="ownerName"
                    required
                    placeholder="Nome no Cartão"/>
                </div>
            </div>

            <div class="innerFlexContainer">
                <div>
                <label for="securityCode">Código de Segurança</label>
                <br>
                <input
                    type="text"
                    name="securityCode"
                    class="inputFill"
                    v-model="securityCode"
                    required
                    placeholder="xxx"/>
                </div>

                <button type="button"> Adicionar </button>
            </div>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            cardNumber: null,
            dueDate: null,
            ownerName: null,
            securityCode: null
        }
    },
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
