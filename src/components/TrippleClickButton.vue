<template>
    <button @click="oneclick">Button</button>
</template>

<script>
    export default{
        data(){
            return {
                clickCount: 0,
                msg: 'Random'
            }
        },
        methods:{
            oneclick(){
                this.clickCount++;

                if(this.clickCount >= 5){
                    this.clickCount = 0;
                    this.$emit('tripleclick', this.msg, this.clickCount);
                }
            }
        }
    }
</script>