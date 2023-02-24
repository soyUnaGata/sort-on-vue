<template>
    <div class="list_of_movies padding-top">
        <div class="movie__card movie-card-style" v-for="movie in movies">
            <img class="img_of_movie" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="">
            <span class="movie__title">{{ movie.title }}</span>
            <div class="second__line">
                <span class="movie__year">{{ movie.release_date.substring(0, 4) }}</span>, 
                <span class="movie__year">{{findMovieGenre(movie.genre_ids)}}</span>
            </div>
            <MovieRating :rating="movie.vote_average"></MovieRating>  
            <span class="movie__country">{{ movie.country }}</span>        
        </div>     
    </div>

    <div class="pagination">
        <!-- <button class="previous" v-on:click="prevPage()">Previous</button> -->
        <button class="next" @click="nextPage()">Next</button>
    </div>
 
</template>

<style>
    .img_of_movie{
        width: fit-content;
        height: 341px;
        max-width: 100%;
    }
    .list_of_movies{
        display: grid;
        gap: 20px;
        padding-right: 65px;
        margin-top: 30px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1.5fr));
    }
    .movie__title {
        margin-top: 10px;
        min-height: 40px;
    }
    .movie__card{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 5px;
        gap: 2px;
        width: 244px;
    }
    .movie__rating-genre{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>

<script>
import MovieRating from './MovieRating.vue';


export default {
    name: "MovieList",
    components: {
        MovieRating,
    },
    data(){
        return {
            totalStars: 10,
            pageSize: 20
        }

    },
    props: {
        movies: {
            type: Array,
        },
        moviesGenres: {
            type: Array,
        },
        page:{
            type: Number,
        },
        loadMovies:{
            type: Object,
        }
    },
    methods: {
        findMovieGenre(genre_ids) {
            if(!genre_ids || !genre_ids.length) return '';
            const genre = this.moviesGenres.find(g => g.id === genre_ids[0]);
            return genre?.name || '';
            // return genre_ids.filter(id => this.moviesGenres.find(g => g.id === id)).map(id => this.moviesGenres.find(g => g.id === id).name).join(", ");
        },
        prevPage(){
            this.$emit('preview-page');
        },
        nextPage(){
            this.$emit('next-page');
       },

    },
    computed: {
        // <--- If we don't want infinty scroll --->
        // paginatedMovies(){
        //     return this.movies.slice(this.pageSize * (this.page - 1), this.pageSize * this.page);
        // }
    },

}



</script>