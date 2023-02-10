<template>
    <div class="list_of_movies padding-left">
        <div class="movie__card movie-card-style" v-for="movie in movies">
            <img class="img_of_movie" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="">
            <span class="movie__title">{{ movie.title }}</span>
            <div class="second__line">
                <span class="movie__year">{{ movie.release_date.substring(0, 4) }}</span>
            </div>
            <div class="movie__rating-genre">
                <span class="movie__genre" :id="movie.genre_ids">{{ movie.genre_ids.name }}</span>
                <span class="movie__rating">{{ movie.vote_average }}</span>
            </div>  
            <span class="movie__country">{{ movie.country }}</span>        
        </div>
        
    </div>
</template>

<style>
    .list_of_movies{
        display: grid;
        gap: 20px;
        padding-right: 65px;
        margin-top: 30px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1.5fr));
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
    }
    .img_of_movie{
        height: 341px;
    }
    .movie__rating-genre{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>

<script>
export default {
    name: 'MovieList',
    props:{
        movies: {
            type: Array,
        },
        titleOfGenreSelected: {
            type: Array
        },
        chooseGenre: {
            type: String
        }
    },


}
</script>