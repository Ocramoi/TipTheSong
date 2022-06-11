<template>
    <div class="popup">
        <div class="popupHeader">
            <h3>Adicionar Cartão</h3>
            <button type="button" class="popupCloseBtn" v-on:click="TriggerCardPopup">x</button>
        </div>

        <form action="POST">
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
        </form>
    </div>
</template>


<script>
export default {
    props: [
        'TriggerCardPopup'
    ],
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
.popup {
    padding: 1rem;
    width: 50%;
    
    position: fixed;
    left: 25%;
    z-index: 99;
    background-color: var(--bg-popup);
    border-radius: 5px;
}

.popupHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.popupHeader > * {
    padding: 0px;
    margin: 0px;
}

.popupCloseBtn {
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 999px;
}

form {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1rem;
}

.inputFill {
    border-radius: 5px;
    width: 100%;
 }

label {
    margin-bottom: 10px;
}
</style>