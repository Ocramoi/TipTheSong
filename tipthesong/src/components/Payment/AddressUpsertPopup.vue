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
                            placeholder="Nome do remetente..."/>
                    </div>
                    <div>
                        <label for="phone">Telefone</label>
                        <br>
                        <input
                            type="tel"
                            name="phone"
                            v-mask="'(##) 9####-####'"
                            class="inputFill"
                            v-model="info.phone"
                            required
                            placeholder="Telefone para contato..."/>
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
                            placeholder="Pais..."/>
                    </div>
                    <div>
                        <label for="postalCode">CEP</label>
                        <br>
                        <input
                            type="tel"
                            v-mask="'#####-###'"
                            name="postalCode"
                            class="inputFill"
                            v-model="info.postalCode"
                            required
                            placeholder="CEP..."/>
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
                            placeholder="Endereço..."/>
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
                        placeholder="Complemento..."/>
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
                            placeholder="Estado..."/>
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
                            placeholder="Cidade..."/>
                    </div>
                </div>
                <button type="button"  v-on="create ? {click: addAddress} : {click:editAddress}">{{ create ? "Adicionar" : "Editar" }}</button>
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
                 id: "",
                 name: "",
                 phone: "",
                 country: "",
                 postalCode: "",
                 address: "",
                 complemment: "",
                 state: "",
                 city: "",
             },
             create: true,
         };
     },
     validations () {
         return {
            info: {
                name: {required},
                phone: {required},     
                country: {required},     
                postalCode: {required},     
                address: {required},     
                state: {required},     
                city: {required},     
            } 
         }
     },
     methods: {
         async addAddress(){
            if (!await this.validate()) return;

           await this.$store.dispatch('addAddress', this.info);

           const error = this.$store.getters.getUserError;
           if (error) {
                this.notyf.open({
                         type: 'error',
                         message: error,
                    });
            } else {
                this.notyf.open({
                         type: 'success',
                         message: "Endereço adicionado com sucesso!",
                    });
                this.$emit('togglePopup');
            }
         },
         async editAddress() {
            if (!await this.validate()) return;

            const validInfo = Object.fromEntries(Object.entries(this.info).filter(([, v]) => v != null && v && String.toString(v).trim() != ""));
            await this.$store.dispatch('updateAddress', {addressId: validInfo._id, ...validInfo});

            const error = this.$store.getters.getUserError;
            if (this.$store.getters.getUserError) {
                this.notyf.open({
                         type: 'error',
                         message: error,
                    });
            } else {
                this.notyf.open({
                         type: 'success',
                         message: "Endereço atualizado com sucesso!",
                    });
                this.$emit('togglePopup');
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
         async validate () {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) {
                this.notyf.open({
                     type: 'error',
                     message: "Erro ao salvar endereço: Por favor preencha os campos corretamente!",
                 });
                 
                 return false;
            }

            return true;
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

</style>
