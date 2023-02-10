<template>
    <div class="select__genre">
        <div class="title_headline select-button__style" 
        :class="{ 'has-content' : titleOfGenreSelected.length }" 
        :data-titles="titleOfGenreSelected.join(', ')"
         v-on:click="select = !select">
         {{ formatedSelectionText || 'Genre'}}</div>
            <div class="scroll-list" v-show="select">
                <div class="list_of_genres" v-show="select" v-for="genre in genres">
                <div class="genres" v-on:click="selectedGenre(genre)">{{ genre }}</div>
            </div>
        </div>
    </div>    
</template>

<style>

.title_headline{
    font-size: 17px;
    color: black;
}
.list_of_genres {
        margin-top: 10px;
        cursor: pointer;
        padding-right: 10px;
}

</style>

<script>
import MovieService from '../services/MovieService';

export default {
    name: 'FilterByGenre',
    data(){
        return {
            genres: [],
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
             this.$emit('select-genre-changed', this.titleOfGenreSelected)
        }, 
        removeSelectedGenre(title){
            this.titleOfGenreSelected = this.titleOfGenreSelected.filter(t => t !== title)
            this.$emit('select-genre-changed', this.titleOfGenreSelected)
        },
        clear(){
            this.titleOfGenreSelected = [];
            this.$emit('select-genre-changed', this.titleOfGenreSelected);
        },
        cutString(source){
            return source.length > 10 ? (source.substring(0, 7) + '...') : source;
        },
        async loadGenres(){
            const response = await MovieService.getGenres();
            console.log(response)
        }
    },
    computed:{
        formatedSelectionText(){
            return this.titleOfGenreSelected.length 
                ? this.cutString(this.titleOfGenreSelected.join(', '))
                : ''
        }
    },
    async mounted(){
        await this.loadGenres();
    }

}
</script>


