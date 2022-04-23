<template>
    <div class="footer">
        <div class="social">
            <a v-for="social in socialMedia" :key="social?.name" :href="social?.link">

                <i class="clickableIcon"
                    :class="`fa-brands fa-${social?.fontAwesome}`"></i>
            </a>
        </div>
        <div class="trademark">
            Marco Toledo, Milena Correa, Don Dio @ USP-ICMC 2022
        </div>
    </div>
</template>

<script type="text/javascript">
 export default {
     name: "Footer",
     data() {
         return {
             socialMedia: [
                 {
                     name: "Twitter",
                     link: "https://twitter.com/",
                     fontAwesome: "twitter",
                 },
                 {
                     name: "Facebook",
                     link: "https://facebook.com/",
                     fontAwesome: "facebook",
                 },
             ],
         };
     }
 };
</script>

<style type="text/css" media="screen" scoped>
 .footer {
     position: absolute;
     bottom: 0;
     width: 100%;
     padding: 2px;
     background-color: var(--grey);
     box-sizing: border-box;
 }

 .social {
     width: 100%;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: center;
 }

 .social > a {
     flex: 3rem 0 1;
     margin: 5px 5px;
     display: block;
     font-size: 1.5em;
     color: #404040;
 }

 .trademark {
     width: 100%;
     text-align: center;
     font-style: italic;
     font-weight: 300;
     font-size: 0.5em;
 }
</style>
