<template>
    <div class="popup">
        <div class="popupHeader">
            <h3>Criar disco</h3>
            <button type="button" class="popupCloseBtn" v-on:click="TriggerDiscPopup">x</button>
        </div>

        <form action="POST">
            <div>
                <label for="title">Título</label>
                <br>
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
                <br>
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
                <br>
                <input
                    type="url"
                    name="frontCover"
                    class="inputFill"
                    v-model="frontCover"
                    required
                    placeholder="Selecione a capa do álbum" />
            </div>
            <div>
                <label for="artists">Artistas</label>
                <br>
                <input
                    type="text"
                    name="artists"
                    class="inputFill"
                    v-model="artists"
                    required
                    placeholder="Nome do artista" />
                <button class="roundButton"> 
                <span>+</span>
                </button>
            </div>
            <div>
                <label for="genres">Gêneros</label>
                <br>
                <input
                    type="text"
                    name="genres"
                    class="inputFill"
                    v-model="genres"
                    required
                    placeholder="Nome do artista" />
                <button class="roundButton"> 
                <span>+</span>
                </button>
            </div>

            <div>
                <label for="shortDescription"> Descrição curta </label>
                <br>
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
                <br>
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
                <br>
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
                <br>
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
                <br>
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
</template>


<script>
export default {
    props: [
        'TriggerDiscPopup'
    ],
    data() {
        return {
            title: null,
            launchDate: null,
            frontCover: null,
            artists: [],
            genres: [],
            shortDescription: null,
            longDescription: null,
            extraInfo: null,
            price: null,
            amountInStock: null,
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
        top: 10%;
        z-index: 1000;
        background-color: var(--bg-popup);
        border-radius: 5px;
        overflow-y: auto;
        max-height: 80vh;
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

    .roundButton {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        aspect-ratio: 1 / 1;
        width: min-content;
        margin: 0 auto;
    }

    .center {
        width: 30%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
</style>