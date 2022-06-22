<template>
    <div class="popupContainer">
        <div class="popup">
            <div class="popupHeader">
                <h3>Adicionar Endereço</h3>
                <button type="button" class="popupCloseBtn" @click="$emit('togglePopup')"> 
                    <i class="fa-solid fa-xmark"></i>
                </button>  
            </div>

            <form action="POST">
            <div class="innerFlexContainer">
                <div style="">
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
            </div>

            <div class="innerFlexContainer">
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
            </div>
            <div class="innerFlexContainer">
                <div style="">
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
            </div>
                <div>
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
            <div class="innerFlexContainer">
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
            </div>
            <button type="button" class="addBtn" @click="addAddress"> Adicionar </button>
            </form>
        </div>
    </div>
</template>


<script>
export default {
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
    methods: {
        async addAddress(){
            let addressString = `${this.address} ${this.houseNum}, ${this.city}, ${this.estate} ${this.postalCode}`
            await this.$store.dispatch('addToUserInfoAddresses', {
                address: [addressString, this.fullName, this.phone]
            })
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


.addBtn {
    height: min-content;
}
</style>
