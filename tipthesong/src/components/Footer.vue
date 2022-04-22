<template>
    <div class="footer">
        <div class="social">
            <a v-for="social in socialMedia" :key="social?.name" :href="social?.link">
                <i
                    :style="{ 'color': social?.color || 'currentColor' }"
                    :class="`fab fa-${social?.fontAwesome}`"></i>
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
                     color: "#1d9bf0"
                 },
                 {
                     name: "Facebook",
                     link: "https://facebook.com/",
                     fontAwesome: "facebook-square",
                     color: "#385395"
                 },
             ],
         };
     }
 };
</script>

<style type="text/css" media="screen" scoped>
 .footer {
     width: 100%;
     padding: 5px;
     margin-top: 10px;
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
     margin: 5px 10px;
     display: block;
     transition: 0.4s;
     font-size: 2.5em;
 }

 .social > a:hover {
     transform: scale(1.1);
     transform-origin: center center;
 }

 .trademark {
     width: 100%;
     text-align: center;
     font-style: italic;
     font-weight: 400;
     font-size: 0.8em;
 }
</style>
