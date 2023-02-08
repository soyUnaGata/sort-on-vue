<template>
    <div class="list_of_movies padding-left">
        <div class="movie__card movie-card-style" v-for="movie in movies">
            <img class="img_of_movie" :src="movie.image" alt="">
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
        display: grid;
        gap: 25px;
        padding-right: 65px;
        margin-top: 30px;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
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
        width: 206px;
        height: 295px;
    }
    .movie__rating-genre{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .movie__rating {
        padding-right: 15px;
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