<template>
  <Header @search-text-changed="search"></Header>
  <Filters
     @select-genre-changed="selectedGenreChanged"
     @select-country-changed="selectedCountryChanged"></Filters>
  <MovieList :movies="searchedMovie"></MovieList>

  <div class="pagination"></div>

  <VideoPlayer :day-movie="dayMovie"></VideoPlayer>
  <fetch></fetch>
  
  <TrippleClickButton @tripleclick="tripleclick"></TrippleClickButton>
</template>

<script>
import { tsImportType } from '@babel/types';
import Filters from './components/Filters.vue';
import Header from './components/Header.vue';
import MovieList from './components/MovieList.vue';
import TrippleClickButton from './components/TrippleClickButton.vue';
import VideoPlayer from './components/VideoPlayer.vue'
import fetch from './components/fetch.vue';


export default {
  name: 'App',
  components: {
    Header,
    Filters,
    MovieList,
    VideoPlayer,
    TrippleClickButton,
    fetch
},
  data(){
    return { 
      movies:[
        {
          image: 'https://kinogo.zone/uploads/mini/short/7b/1574838856-2006372218-prostaya-prosba.webp',
          title: "The Shawshank Redemption",
          releaseYear: 1994,
          genre: "Drama",
          country: "USA",
          rating: 9.2
          },
          {
          title: "The Godfather",
          releaseYear: 1972,
          genre: "Crime, Drama",
          country: "Germany",
          rating: 9.2
          },
          {
          title: "The Dark Knight",
          releaseYear: 2008,
          genre: "Action, Crime, Drama",
          country: "Brazil",
          rating: 9.0
          },
          {
          title: "Pulp Fiction",
          releaseYear: 1994,
          genre: "Crime",
          country: "Albania",
          rating: 8.9
          },
          {
          title: "The Lord of the Rings: The Return of the King",
          releaseYear: 2003,
          genre: "Adventure, Fantasy",
          country: "USA",
          rating: 9.0
          }
        ],
        searchText: '',
        titleOfGenreSelected: [],
        titleOfCountrySelected: [],
        dayMovie:
          {
            image: 'https://content.internetvideoarchive.com/content/hdphotos/11946/011946/011946_1280x720_544044_023.jpg',
            title: "A Simple Favor",
            description: "Stephanie is a single mother with a parenting vlog who befriends Emily, a secretive upper-class woman who has a child at the same elementary school. When Emily goes missing, Stephanie takes it upon herself to investigate.",
            duration: "1 hr 59 min ",
            genre: "Crime, Comedy, Mystery",
            rating: 7.2
          },
      }
  },
  methods:{
    search(searchText){
      this.searchText = searchText;
    },
    selectedGenreChanged(genres){
      this.titleOfGenreSelected = genres;
    },
    selectedCountryChanged(countries){
      this.titleOfCountrySelected = countries;
    },
    tripleclick(data, clickCount){
      console.log(data, clickCount)
    }
  },
  computed: {
    searchedMovie(){
      return this.movies
      .filter((movie) => movie.title.toLowerCase().includes(this.searchText.toLowerCase()) 
        || movie.genre.toLowerCase().includes(this.searchText.toLowerCase()))
      .filter((movie) => !this.titleOfGenreSelected.length || this.titleOfGenreSelected.some(genre => movie.genre.includes(genre)))
      .filter(movie => !this.titleOfCountrySelected.length || this.titleOfCountrySelected.some(country => movie.country.includes(country)))
    }
  }
}
</script>

<style>

</style>
