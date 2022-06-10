<template>
    <div class="popup">
        <div class="popupHeader">
            <h3>Adicionar Endereço</h3>
            <button type="button" class="popupCloseBtn" v-on:click="TriggerAddressPopup">x</button>
        </div>

        <form action="POST">
            <div style="grid-column: span 2">
                <label for="fullName">Nome Completo</label>
                <br>
                <input 
                    type="text"
                    name="fullName"
                    class="inputFill"
                    v-model="fullName"
                    required
                    placeholder="Nome"/>
            </div>
             <div>
                <label for="phone">Telefone</label>
                <br>
                <input 
                    type="text"
                    name="phone"
                    class="inputFill"
                    v-model="phone"
                    required
                    placeholder="(dd) 9xxxx-xxxx"/>
            </div>
             <div>
                <label for="county">País/Região</label>
                <br>
                <input 
                    type="text"
                    name="county"
                    class="inputFill"
                    v-model="county"
                    required
                    placeholder=""/>
            </div>
             <div>
                <label for="postalCode">CEP</label>
                <br>
                <input 
                    type="text"
                    name="postalCode"
                    class="inputFill"
                    v-model="postalCode"
                    required
                    placeholder=""/>
            </div>
            <div></div>

             <div style="grid-column: span 2">
                <label for="address">Endereço</label>
                <br>
                <input 
                    type="text"
                    name="address"
                    class="inputFill"
                    v-model="address"
                    required
                    placeholder=""/>
            </div>
             <div>
                <label for="houseNum">Número da Residência</label>
                <br>
                <input 
                    type="text"
                    name="houseNum"
                    class="inputFill"
                    v-model="houseNum"
                    required
                    placeholder=""/>
            </div>
             <div style="grid-column: span 2">
                <label for="extra">Complemento</label>
                <br>
                <input 
                    type="text"
                    name="extra"
                    class="inputFill"
                    v-model="extra"
                    required
                    placeholder=""/>
            </div>
            <div></div>
             
            <div>
                <label for="estate">Estado</label>
                <br>
                <input 
                    type="text"
                    name="estate"
                    class="inputFill"
                    v-model="estate"
                    required
                    placeholder=""/>
            </div>
             <div>
                <label for="city">Cidade</label>
                <br>
                <input 
                    type="text"
                    name="city"
                    class="inputFill"
                    v-model="city"
                    required
                    placeholder=""/>
            </div>


            <button type="button"> Adicionar </button>
        </form>
    </div>
</template>


<script>
export default {
    props: [
        'TriggerAddressPopup'
    ],
    data() {
        return {
            fullName: null,
            phone: null,
            county: null,
            postalCode: null,
            address: null,
            houseNum: null,
            extra: null,
            estate: null,
            city: null,
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
    top: 25%;
    z-index: 99;
    background-color: var(--bg-popup);
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
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
}

form {
    display: grid;
    grid-template-columns: auto auto auto;
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