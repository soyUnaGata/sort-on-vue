<template>
   <div class="search__field">
        <input class="search" placeholder="What do you want to watch?" type="text" v-model="searchText" @keyup="search">
   </div>
</template>
<style>
    .search__field{
        margin-top: 10px;
    }
    .search {
        width: 525px;
        height: 45px;
        padding: 6px 10px;
        background-color: transparent;
        border: 1px solid white;
        border-radius: 10px;
    }
    input[type="text"].search{
        outline: none;
        color: white;
        font-size: 16px;
    }
    input[type="text"].search:-webkit-autofil{
        color: white;
        -webkit-text-fill-color:white;
    }
    input[type="text"].search::placeholder{
        color: #E11D48;
        font-size: 15px;
        font-weight: 200;
    }

</style>

<script>
    import { eventBus } from '@/eventBus';

    export default {
        data(){
            return {
                searchText: '',
            }
        },
        methods:{
            search(e){
                if(e.keyCode === 13){
                    this.$emit('search-text-changed', this.searchText)
                }
               
            },
            clearSearch(){
                this.searchText = '';
            }
        },
        mounted(){
            eventBus.$on("clear-all-filters", this.clearSearch)
        }
    }
</script>