<template>
    <div class="popupContainer">
        <div class="popup">
            <div class="popupHeader">
                <h3>{{ popupTitle }}</h3>
                <button type="button" class="popupCloseBtn" @click="close" />
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
                        type="date"
                        name="launchDate"
                        class="inputFill"
                        v-model="launchDate"
                        required
                        placeholder="xx/xx/xxxx" />
                </div>
                <div>
                    <label for="frontCover">Capa</label>
                    <input
                        type="url"
                        name="frontCover"
                        class="inputFill"
                        v-model="frontCover"
                        required
                        placeholder="Selecione a capa do álbum" />
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
                        <span>+</span>
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
                        <span>+</span>
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
                    <button class="center" type="button"> Criar álbum </button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
 export default {
     props: {
         current: {
             type: Object,
             required: false,
         },
     },
     data() {
         return {
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
         }
     },
     watch: {
         current(payload) { this.loadValues(payload); }
     },
     mounted() {
         console.log(this.current);
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
         },
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
