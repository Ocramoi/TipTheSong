<template>
    <div v-html="nthStyle" />
    <div
        class="flexTable"
        :style="{
            '--n': `${nGrid}`,
            '--row-height': `${rowHeight}`,
            '--row-gap': `${rowGap}`
        }">
        <span
            v-for="(title, idx) in titles"
            :key="idx"
            class="columnTitle"
        >
            {{ title }}
        </span>

        <template
            v-for="(entry, idx) in values"
            :key="idx" >
            <div v-for="(value, idx) in entry" :key="idx">
                <span :class="{ 'centerElement': center }" v-html="value" />
            </div>
        </template>
    </div>
</template>

<script type="text/javascript">
 export default {
     name: "FlexTable",
     props: {
         titles: {
             type: Array,
             required: true,
         },
         values: {
             type: Array,
             required: false,
         },
         rowHeight: {
             type: String,
             required: false,
             default: "3em",
         },
         rowGap: {
             type: String,
             required: false,
             default: "1em",
         },
         center: {
             type: Boolean,
             required: false,
             default: false,
         },
     },
     data() {
         return {
             nGrid: this.titles.length,
         };
     },
     computed: {
         nthStyle() {
             return `<style> .flexTable div:nth-child(${this.nGrid}n + 1):before { content: ''; height: var(--row-height); width: 100%; position: absolute; box-shadow: 5px 5px 10px var(--primary-dark); } </style>`;
         },
     }
 };
</script>

<style type="text/css" media="screen" scoped>
 .flexTable {
     display: grid;
     align-items: stretch;
     grid-template-columns: repeat(var(--n), auto);
     grid-template-rows: auto;
     grid-auto-rows: var(--row-height);
     grid-row-gap: var(--row-gap);
     position: relative;
     width: 100%;
 }

 .flexTable div {
     height: var(--row-height);
     box-sizing: border-box;

     display: flex;
     align-items: center;

     text-overflow: ellipsis;
     white-space: nowrap;
     width: 100%;
     overflow: hidden;


     line-height: var(--row-height);
     vertical-align: middle;
 }

 .flexTable > span {
     text-overflow: ellipsis;
     white-space: nowrap;
     width: 100%;
     overflow: hidden;
 }

 .flexTable div > span {
     box-sizing: border-box;
     text-overflow: ellipsis;
     white-space: nowrap;
     overflow: hidden;
     padding: 0 5px 0 5px;
     height: 100%;
 }

 .elementCenter {
     margin: 0 auto;
     display: block;
 }

 :deep(img) {
     height: 100%;
 }

 .columnTitle {
     text-align: justify;
     color: var(--white);
     text-transform: uppercase;
 }
</style>
