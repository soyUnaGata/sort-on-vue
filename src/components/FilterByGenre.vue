<template>
    <div class="select__genre">
        <div class="title_headline select-button__style" v-on:click="select = !select">Genres</div>
        <div class="selected_genres_buttons">
            <span v-for="title in titleOfGenreSelected">{{ title }} 
                <button class="remove_selected" v-on:click="removeSelectedGenre(title)">x</button>
            </span>
        </div>
            <div class="list_of_genres" v-show="select" v-for="genre in genres">
            <div class="genres" v-on:click="selectedGenre(genre)">{{ genre }}</div>
        </div>
    </div>    
</template>

<style>

.title_headline{
    font-size: 17px;
    color: black;
}


</style>

<script>
export default {
    name: 'FilterByGenre',
    data(){
        return {
            genres: ["Action","Crime","Drama","Comedy","Horror","Detective","Historical","Documentary","Biography","Fantasy"],
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
        }
    },

}
</script>


