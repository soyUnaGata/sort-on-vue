<template>
    <div class="list_of_movies">
        <div class="movie__card movie-card-style" v-for="movie in movies">
            <div class="img_of_movie"></div>
            <span class="movie__title">{{ movie.title }}</span>
            <div class="second__line">
                <span class="movie__year">{{ movie.releaseYear }}</span>
            </div>
            <div class="movie__rating-genre">
                <span class="movie__genre">{{ movie.genre }}</span>
                <span class="movie__rating">{{ movie.rating }}</span>
            </div>  
            <span class="movie__country">{{ movie.country }}</span>        
        </div>
        
    </div>
</template>

<style>
    .list_of_movies{
        display: flex;
        gap: 25px;
        margin-top: 50px;
    }
    .movie__card{
        display: flex;
        flex-direction: column;
        width: 250px;
        flex-wrap: wrap;
        padding: 5px;
    }
    .second__line{
       
    }
    .movie__rating-genre{
        display: flex;
        gap: 15px;
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
    }
}
</script>