<template>
    <div class="collection">
        <h2>{{ title }}</h2>
        <n-carousel
            ref="carousel"
            class="productList"
            slides-per-view="auto"
            :centered-slides="true"
            effect="slide"
            draggable >
            <n-carousel-item
                :style="`width: ${cardWidth + 2*cardMargin}px;`"
                :space-between="cardMargin"
                v-for="product in albuns"
                :key="product?._id">
                <ProductCard
                    :style="`width: ${cardWidth}px;`"
                    :product="product" />
            </n-carousel-item>

            <template #dots="{ total, currentIndex, to }">
                <ul class="custom-dots">
                    <li
                        v-for="index of total"
                        :key="index"
                        :class="{ ['is-active']: currentIndex === index - 1 }"
                        @mouseover="to(index - 1)"
                    />
                </ul>
            </template>
        </n-carousel>
    </div>
</template>

<script type="text/javascript">
 import ProductCard from "../Product/Card";

 export default {
     name: "AlbumCollection",
     data() {
         return {
             cardMargin: 20,
             cardWidth: 200,
         };
     },
     props: {
         title: {
             type: String,
             required: true,
         },
         albuns: {
             type: [Object],
             required: true,
         },
     },
     components: {
         ProductCard,
     },
     mounted() {
         this.$refs.carousel.prev();
         const maxIdx = this.$refs.carousel.getCurrentIndex();
         this.$refs.carousel.to(Math.floor(maxIdx/2));
     },
 };
</script>

<style type="text/css" media="screen" scoped>
 .collection {
     padding: 10px;
 }

 .productList {
     width: 100%;
     padding-bottom: 10px;
 }

 .custom-dots {
     display: flex;
     margin: 0;
     padding: 0;
     position: absolute;
     bottom: 0;
     left: 50%;
     transform: translate(-50%, 0);
 }

 .custom-dots li {
     display: inline-block;
     width: 12px;
     height: 4px;
     margin: 0 3px;
     border-radius: 4px;
     background-color: var(--primary-light);
     transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
     cursor: pointer;
 }

 .custom-dots li.is-active {
     width: 40px;
     background: var(--white);
 }

 .cardItem {
     display: flex;
     width: max-content;
 }
</style>
