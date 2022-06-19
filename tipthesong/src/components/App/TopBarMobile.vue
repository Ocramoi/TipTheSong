<template>
    <div class="topBar">
        <div class="topRow">
            <div class="burguerMenu clickableIcon">
                <i class="fa-solid fa-bars" />
            </div>
            <div class="imgContainer">
                <img
                    class="topbarLogo"
                    :src="require('../../assets/Global/logo-v1.svg')"
                    alt="Logo" />
            </div>
            <div class="userCart">
                <router-link to="/login" class="clickableIcon">
                    <i style="font-size: 35px;" class="fa-solid fa-user" />
                </router-link>
                <router-link to="/cart" class="clickableIcon">
                    <i style="font-size: 35px;" class="fa-solid fa-cart-shopping" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
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

    .topRow {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 5px;
    }

    .topRow > * {
        flex: 1;
    }

    .topbarLogo {
        width: 100%;
        max-width: 7rem;
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
        font-size: 35px;
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
</style>