<template>
    <div  class="select__genre">
        <div ref="openBtn" class="title_headline select-button__style" 
        :class="{ 'has-content' : selectedGeneres.length }" 
        :data-titles="selectedGeneres.map(genre => genre.name).join(', ')"
        v-on:click="switchOpen">
         {{ formatedSelectionText || 'Genre'}}</div>
            <div class="scroll-list" v-show="select">
                <div class="list_of_genres"  v-for="genre in genresMovies">
                <div class="genres"  v-on:click.stop="selectGenre(genre)">{{ genre.name }}</div>
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
        color: var(--text-color-light);
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
            const index = this.selectedGeneres.findIndex(item => item.id === genre.id);

             if(index === -1){
                this.selectedGeneres.push(genre)
             }
             console.log('selectGenre')

             this.select = false;
             this.$emit('select-genre-changed', this.selectedGeneres)
        }, 
        // removeSelectedGenre(title){
        //     this.selectedGeneres = this.selectedGeneres.filter(t => t !== title)
        //     this.$emit('select-genre-changed', this.selectedGeneres)
        // },
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
        clickOutside(e){
            console.log('clickOutside')
            if(e.target !== this.$refs.openBtn && this.select) 
            {
                this.select = false;
            }
            
        },
        switchOpen(){
            console.log('switchOpen')
            this.select = !this.select
        }
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

        window.addEventListener('click', this.clickOutside)
    },
    unmounted(){
        window.removeEventListener('click', this.clickOutside)
    }
}
</script>


