<template>
    <div class="popupContainer">
        <div class="popup">
            <div class="popupHeader">
                <h3>{{ popupTitle }}</h3>
                <button type="button" class="popupCloseBtn" @click="close"> 
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <form action="POST">
                <div>
                    <label for="title">Título</label>
                    <input
                        type="text"
                        name="title"
                        class="inputFill"
                        v-model="title"
                        required
                        placeholder="Título" />
                </div>
                <div>
                    <label for="launchDate">Data de lançamento</label>
                    <input
                        type="number"
                        name="launchDate"
                        v-mask="'####'"
                        class="inputFill"
                        v-model="launchDate"
                        required
                        placeholder="Ano que o album foi lançado..." />
                </div>
                <div>
                    <label for="frontCover">Capa</label>
                    <input
                        type="url"
                        name="frontCover"
                        class="inputFill"
                        v-model="frontCover"
                        required
                        placeholder="Url da capa..." />
                </div>
                <div>
                    <label for="artist">Artista(s)</label>
                    <div
                        v-for="(artist, idx) in artists"
                        :key="idx"
                        class="listInput">
                        <input
                            type="text"
                            name="artist"
                            class="inputFill"
                            v-model="artists[idx]"
                            required
                            placeholder="Nome do artista" />
                        <span @click="removeArtist(idx)">
                            <i class="clickableIcon fa-solid fa-trash" />
                        </span>
                    </div>

                    <button type="button" class="roundButton" @click="addArtist">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div>
                    <label for="genre">Gênero(s)</label>
                    <div
                        v-for="(genre, idx) in genres"
                        :key="idx"
                        class="listInput">
                        <input
                            type="text"
                            name="genre"
                            class="inputFill"
                            v-model="genres[idx]"
                            required
                            placeholder="Nome do gênero" />
                        <span @click="removeGenre(idx)">
                            <i class="clickableIcon fa-solid fa-trash" />
                        </span>
                    </div>

                    <button type="button" class="roundButton" @click="addGenre">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>

                <div>
                    <label for="shortDescription"> Descrição curta </label>
                    <input
                        type="text"
                        name="shortDescription"
                        class="inputFill"
                        v-model="shortDescription"
                        required
                        placeholder="Escreva aqui" />
                </div>

                <div>
                    <label for="longDescription"> Descrição longa </label>
                    <input
                        type="text"
                        name="longDescription"
                        class="inputFill"
                        v-model="longDescription"
                        required
                        placeholder="Escreva aqui" />
                </div>

                <div>
                    <label for="extraInfo"> Informações adicionais </label>
                    <input
                        type="text"
                        name="extraInfo"
                        class="inputFill"
                        v-model="extraInfo"
                        required
                        placeholder="Escreva aqui" />
                </div>

                <div>
                    <label for="price"> Preço </label>
                    <input
                        type="number"
                        name="price"
                        class="inputFill"
                        v-model="price"
                        required
                        placeholder="Escreva aqui" />
                </div>

                <div>
                    <label for="amountInStock"> Quantidade em estoque </label>
                    <input
                        type="number"
                        name="amountInStock"
                        class="inputFill"
                        v-model="amountInStock"
                        required
                        placeholder="Escreva aqui" />
                </div>

                <div>
                    <button class="center" type="button" v-on="current ? {click: updateProduct} : {click: addProduct}"> {{ popupTitle }} </button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import useVuelidate from '@vuelidate/core';
import { required, url, numeric } from '@vuelidate/validators';

 export default {
     inject: ['notyf'],
     setup () {
        return { v$: useVuelidate()}
     },
     props: {
         current: {
             type: Object,
             required: false,
         },
     },
     data() {
         return {
             id: null,
             title: null,
             launchDate: null,
             frontCover: null,
             artists: [''],
             genres: [''],
             shortDescription: null,
             longDescription: null,
             extraInfo: null,
             price: null,
             amountInStock: null,
             amountSold: null,
         }
     },
     validations () {
         return {           
            title: {required},
            launchDate: {required},     
            frontCover: {required, url},     
            artists: {required},     
            genres: {required},     
            shortDescription: {required},     
            longDescription: {required},      
            price: {required, numeric},     
            amountInStock: {required, numeric},     
         }
     },
     watch: {
         current(payload) { this.loadValues(payload); },
     },
     mounted() {
         this.loadValues(this.current || {});
     },
     methods: {
         close() {
             this.$emit("togglePopup");
         },
         addArtist() {
             this.artists.push('');
         },
         addGenre() {
             this.genres.push('');
         },
         removeArtist(idx) {
             if (this.artists.length <= 1) return;
             this.artists.splice(idx, 1);
         },
         removeGenre(idx) {
             if (this.genres.length <= 1) return;
             this.genres.splice(idx, 1);
         },
         loadValues(payload) {
             this.id = payload?._id || undefined;
             this.title = payload.title || null;
             this.launchDate = payload.launchDate || null;
             this.frontCover = payload.frontCover || null;
             this.artists = payload.artists || [''];
             this.genres = payload.genres || [''];
             this.shortDescription = payload.shortDescription || null;
             this.longDescription = payload.longDescription || null;
             this.extraInfo = payload.extraInfo || null;
             this.price = payload.price || null;
             this.amountInStock = payload.amountInStock || null;
             this.amountSold = payload.amountSold || null;
         },
         async addProduct() {
             if (!await this.validate()) return;

             await this.$store.dispatch("addProduct", {
                    title: this.title,
                    launchDate: this.launchDate,
                    frontCover: this.frontCover,
                    artists: this.artists,
                    genres: this.genres,
                    shortDescription: this.shortDescription,
                    longDescription: this.longDescription,
                    extraInfo: this.extraInfo,
                    price: this.price,
                    amountInStock: this.amountInStock
             });

            const error = this.$store.getters.getProductError;
            if (error) {
                this.notyf.open({
                         type: 'error',
                         message: error,
                    });
            } else {
                this.notyf.open({
                         type: 'success',
                         message: "Produto adicionado com sucesso!",
                    });
                this.close()
            }
         },
         async updateProduct() {
             if (!(await this.validate())) return;

             await this.$store.dispatch("updateProduct", {
                    productId: this.id,
                    title: this.title,
                    launchDate: this.launchDate,
                    frontCover: this.frontCover,
                    artists: this.artists,
                    genres: this.genres,
                    shortDescription: this.shortDescription,
                    longDescription: this.longDescription,
                    extraInfo: this.extraInfo,
                    price: this.price,
                    amountInStock: this.amountInStock
             });

            const error = this.$store.getters.getProductError;
            if (error) {
                this.notyf.open({
                         type: 'error',
                         message: error,
                    });
            } else {
                this.notyf.open({
                         type: 'success',
                         message: "Produto atualizado com sucesso!",
                    });
                this.close();
            }
         },
         async validate () {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) {
                this.notyf.open({
                     type: 'error',
                     message: "Erro ao salvar produto: Por favor preencha os campos corretamente!",
                 });
                 
                 return false;
            }

            return true;
         }


     },
     computed: {
         popupTitle() {
             if (this.current) return "Editar disco";
             return "Criar disco";
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
     flex: 1 0 100%;
 }

 .inputFill {
     border-radius: 5px;
     width: 100%;
 }

 label {
     margin-bottom: 5px;
     display: block;
     width: 100%;
 }

 .roundButton {
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 100%;
     aspect-ratio: 1 / 1;
     width: min-content;
     margin: 10px auto 0 auto;
 }

 .center {
     width: 30%;
     display: flex;
     justify-content: center;
     margin: 0 auto;
 }

 .listInput {
     width: 100%;
     display: grid;
     grid-template-columns: 1fr min-content;
     align-items: center;
     gap: 15px;
     margin-bottom: 5px;
 }
</style>
