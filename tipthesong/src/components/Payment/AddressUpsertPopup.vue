<template>
    <div class="popupContainer">
        <div class="popup">
            <div class="popupHeader">
                <h3>{{ create ? "Adicionar" : "Editar" }} Endereço</h3>
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
                            name="name"
                            class="inputFill"
                            v-model="info.name"
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
                            v-model="info.phone"
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
                            name="country"
                            class="inputFill"
                            v-model="info.country"
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
                            v-model="info.postalCode"
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
                            v-model="info.address"
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
                        v-model="info.complemment"
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
                            name="state"
                            class="inputFill"
                            v-model="info.state"
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
                            v-model="info.city"
                            required
                            placeholder=""/>
                    </div>
                </div>
                <button type="button"  v-on="create ? {click: addAddress} : {click:editAddress}" @click="$emit('togglePopup')">{{ create ? "Adicionar" : "Editar" }}</button>
            </form>
        </div>
    </div>
</template>


<script>
 export default {
     inject: ['notyf'],
     name: "AddressUpsertPopup",
     props: {
         current: {
             type: Object,
             required: false,
         },
     },
     watch: {
         current(payload) {
             this.loadValues(payload);
         },
     },
     data() {
         return {
             info: {
                 id: null,
                 name: null,
                 phone: null,
                 country: null,
                 postalCode: null,
                 address: null,
                 complemment: null,
                 state: null,
                 city: null,
             },
             create: true,
         };
     },
     methods: {
         async addAddress(){
            const validInfo = Object.fromEntries(Object.entries(this.info).filter(([, v]) => v != null && v && String.toString(v).trim() != ""));
            await this.$store.dispatch('addAddress', validInfo);

            if (!this.$store.getters.getUserLoaded) {
                this.notyf.open({
                         type: 'error',
                         message: "Erro ao editar endereço!",
                     });
            } else {
                  this.notyf.open({
                         type: 'success',
                         message: "Endereço editado com sucesso!",
                     });
            }
         },
         async editAddress() {
            const validInfo = Object.fromEntries(Object.entries(this.info).filter(([, v]) => v != null && v && String.toString(v).trim() != ""));
            await this.$store.dispatch('updateAddress', {addressId: validInfo._id, ...validInfo});

            if (!this.$store.getters.getUserLoaded) {
                this.notyf.open({
                    type: 'error',
                         message: "Erro ao salvar endereço!",
                     });
            } else {
                this.notyf.open({
                    type: 'success',
                         message: "Endereço salvo com sucesso!",
                     });
            }
         },
         loadValues(payload) {
             if (payload) {
                 delete payload.__v;
                 this.info = Object.assign({}, payload);
                 this.create = false;
             } else {
                 Object
                     .keys(this.info)
                     .forEach(key => {
                         this.info[key] = null;
                     });
                 console.log(this.info);
                 console.log(Object.entries(this.info));
                 this.create = true;
             }
         },
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

</style>
