<template>
    <div class="list_of_movies padding-top">
        <div class="movie__card movie-card-style" v-for="movie in movies">
            <img class="img_of_movie" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="">
            <span class="movie__title">{{ movie.title }}</span>
            <div class="second__line">
                <span class="movie__year">{{ movie.release_date.substring(0, 4) }}</span>
            </div>
            <span class="movie__genre">{{findMovieGenre(movie.genre_ids) }}</span>
            <MovieRating :rating="movie.vote_average"></MovieRating>  
            <!-- <div class="movie__rating">
                ☆★
                 <span class="movie__rating">{{movie.vote_average }}</span>
             </div> -->
            <span class="movie__country">{{ movie.country }}</span>        
        </div>
        
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
    @media (max-width: 400px ){
    .list_of_movies{
        gap: calc(10px + (10 + 10 * 0.7) * ((100vw - 320px) / 400));
    }
}
    .movie__title {
        margin-top: 10px;
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
    props: {
        movies: {
            type: Array,
        },
        moviesGenres: {
            type: Array,
        }
    },
    methods: {
        findMovieGenre(genre_ids) {
            return genre_ids.filter(id => this.moviesGenres.find(g => g.id === id)).map(id => this.moviesGenres.find(g => g.id === id).name).join(", ");
        },
    },
    
}



</script>