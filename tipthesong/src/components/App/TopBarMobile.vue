<template>
    <div class="topBar">
        <div class="topRow">
            <div class="burguerMenu clickableIcon" @click="showOptions">
                <i class="fa-solid fa-bars" />
            </div>
            <div class="imgContainer">
                <img
                    class="topbarLogo"
                    :src="require('../../assets/Global/logo-v2.svg')"
                    alt="Logo" />
            </div>
            <div class="userCart">
                <router-link to="/login" class="clickableIcon">
                    <i class="fa-solid fa-user" />
                </router-link>
                <router-link to="/cart" class="clickableIcon">
                    <i class="fa-solid fa-cart-shopping" />
                </router-link>
            </div>
        </div>
        <div class="bottomRow" id="links" :class="{ 'hide': !optionsVisible }">
            <router-link to="/" class="topbarButton " @click="optionsVisible = !optionsVisible">
                Início
            </router-link>
            <router-link to="/products" class="topbarButton" @click="optionsVisible = !optionsVisible">
                Produtos
            </router-link>
            <router-link to="/whoweare" class="topbarButton" @click="optionsVisible = !optionsVisible">
                Quem somos?
            </router-link>
            <router-link to="/contact" class="topbarButton" @click="optionsVisible = !optionsVisible">
                Contato
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                optionsVisible: false,
            };
        },
        methods: {
            showOptions() {
                this.optionsVisible = !this.optionsVisible;
                console.log(this.optionsVisible);
            },
        },
    }
</script>

<style type="text/scss" media="screen" scoped>
    .topBar {
        width: 100%;
        position: sticky;
        z-index: 100;
        top: 0;
        left: 0;
        background-color: var(--primary);
        padding: 5px;
        transition: 0.4s;
        transition-timing-function: ease-in-out;
        box-sizing: border-box;
        box-shadow: 0 0 5px var(--primary-dark);
    }

    .topbarButton {
        text-align: center;
        padding: 5px;
        cursor: pointer;
        color: var(--white);
        font-size: 1.1rem;
    }

    

    .topRow {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 5px;
    }

    .bottomRow {
        padding-top: 2rem;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: 1s;
    }

    .topRow > * {
        flex: 1;
    }

    .topbarLogo {
        width: 100%;
        max-width: 4rem;
    }

    .userCart {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
    }

    .burguerMenu {
        text-align: center;
    }

    .imgContainer {
        position: relative;
        height: 100%;
    }

    .imgContainer > img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -30%);
        cursor: pointer;
    }

    .hide {
        height: 0px !important;
        padding: 0 !important;
        margin: 0 !important;
        overflow: hidden;
        transition: 0.4s;
        flex-wrap: nowrap;
    }

    #links {
        display: flex;
        transition: 0.4s;
    }

    .clickableIcon {
        font-size: 1.25rem;
    }
</style>