<template>
  <Header @search-text-changed="search"></Header>
  <Filters
     @select-genre-changed="selectedGenreChanged"
     @select-country-changed="selectedCountryChanged"></Filters>
  <MovieList v-bind:movies="searchedMovie"></MovieList>
  
  <TrippleClickButton @tripleclick="tripleclick"></TrippleClickButton>
</template>

<script>
import Filters from './components/Filters.vue';
import Header from './components/Header.vue';
import MovieList from './components/MovieList.vue';
import TrippleClickButton from './components/TrippleClickButton.vue'


export default {
  name: 'App',
  components: {
    Header,
    Filters,
    MovieList,
    TrippleClickButton
},
data(){
 return { 
    movies:[
      {
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
