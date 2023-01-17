<template>
    <p class="search__movie padding-left">Search Movie</p>
    <div class="select__filters padding-left">
        <div class="select__genre">
            <div class="title_headline select-button__style" v-on:click="select = !select">Genres{{titleOfGenreSelected.join(',')}}</div>
                <div class="list_of_genres" v-show="select" v-for="genre in genres">
                <div class="genres" v-on:click="selectedGenre(genre)">{{ genre }}</div>
            </div>
        </div>

        <FilterByCountry></FilterByCountry>
    </div>
  
    
</template>

<style>
.select__filters{
    display: flex;
    margin-top: 10px;
    gap: 20px;
}
.search__movie{
    margin-top: 30px;
    font-size: 40px;
    font-weight: 700;
}
.title_headline{
    font-size: 17px;
    color: black;
}


</style>
<script>
import FilterByCountry from './FilterByCountry.vue';

export default {
    name: 'FilterByGenre',
    components: {
        FilterByCountry
    },
    data(){
        return {
            genres: ["Action","Crime","Drama","Comedy","Horror","Detective","Historical","Documentary","Biography"],
            select: false,
            titleOfGenreSelected: [],
        }
    },
    methods:{
        selectedGenre(genre){
             if(!this.titleOfGenreSelected.includes(genre)){
                this.titleOfGenreSelected.push(genre)
             }
             this.select = false;
        }
    },

}
</script>


