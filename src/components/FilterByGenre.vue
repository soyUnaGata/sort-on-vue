<template>
    <div class="select__genre">
        <div class="title_headline select-button__style" 
        :class="{ 'has-content' : selectedGeneres.length }" 
        :data-titles="selectedGeneres.map(genre => genre.name).join(', ')"
         v-on:click="select = !select">
         {{ formatedSelectionText || 'Genre'}}</div>
            <div class="scroll-list" v-show="select">
                <div class="list_of_genres" v-show="select" v-for="genre in genresMovies">
                <div class="genres" v-on:click="selectGenre(genre)">{{ genre.name }}</div>
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
            genresMovies: [],
            select: false,
            selectedGeneres: [],
        }
    },
    methods:{
        selectGenre(genre){
             if(!this.selectedGeneres.includes(genre)){
                this.selectedGeneres.push(genre)
             }
             this.select = false;
             this.$emit('select-genre-changed', this.selectedGeneres)
        }, 
        removeSelectedGenre(title){
            this.selectedGeneres = this.selectedGeneres.filter(t => t !== title)
            this.$emit('select-genre-changed', this.selectedGeneres)
        },
        clear(){
            this.selectedGeneres = [];
            this.$emit('select-genre-changed', this.selectedGeneres);
        },
        cutString(source){
            return source.length > 10 ? (source.substring(0, 7) + '...') : source;
        },
        async loadGenres(){
            const response = await MovieService.getGenres();
            response.genres.forEach(x => this.genresMovies.push(x));
        },
    },
    computed:{
        formatedSelectionText(){
            return this.selectedGeneres.length 
                ? this.cutString(this.selectedGeneres.map(genre => genre.name).join(', '))
                : ''
        }
    },
    async mounted(){
        await this.loadGenres();
    }

}
</script>


