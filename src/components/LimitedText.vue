<template>
    <div class="description__part">
        <span class="description">{{displayedText}} 
            <span v-if="overflowLimit">
                <span v-if="limited" @click="readMore">Read More</span>
                <span v-else @click="readMore">Hide</span>
            </span>
        </span>
    </div>   
</template>

<style>
    .description {
        font-size: 16px;
        font-weight: 400;
    }
</style>

<script>
    export default {
        name: 'LimitedText',
        props:{
            text: {
                type: String,
                required: true
            },
            limit: {
                type: Number,
                default: 210
            }
        },
        data(){
            return{
                limited: true
            }
        },  
        computed:{
            overflowLimit(){
                return this.text.length > this.limit;
            },
            displayedText(){
                if (!this.overflowLimit || !this.limited) return this.text;
                return this.text.substring(0, this.limit - 3) + '...';
            }
        },
        methods: {
            readMore(){
                this.limited = !this.limited;
            }
        }
    }
</script>