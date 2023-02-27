<template>
  <Header @search-text-changed="search"
  @toogle="toogle"></Header>
  <Filters
     @select-genre-changed="selectedGenreChanged"
     @select-country-changed="selectedCountryChanged"
     @select-year-changed="selectedYearsChanged"
     @toogle="toogle"></Filters>
  <MovieList 
    :movies="searchedMovie"
    :page="page"
    :movies-genres="moviesGenres"
    @preview-page="previewPage"
    @next-page="nextPage"></MovieList>

  <VideoPlayer :day-movie="dayMovie"></VideoPlayer>
  
  <TrippleClickButton @tripleclick="tripleclick"></TrippleClickButton>
</template>

<script>
import Filters from './components/Filters.vue';
import Header from './components/Header.vue';
import MovieList from './components/MovieList.vue';
import TrippleClickButton from './components/TrippleClickButton.vue';
import VideoPlayer from './components/VideoPlayer.vue'
import MovieService from './services/MovieService';

export default {
  name: 'App',
  components: {
    Header,
    Filters,
    MovieList,
    VideoPlayer,
    TrippleClickButton,
    
},
  data(){
    return { 
        searchText: '',
        selectedGeneres: [],
        titleOfCountrySelected: [],
        selectedYears: [],
        dayMovie:
        {
          image: 'https://content.internetvideoarchive.com/content/hdphotos/11946/011946/011946_1280x720_544044_023.jpg',
          title: "A Simple Favor",
          description: "Stephanie is a single mother with a parenting vlog who befriends Emily, a secretive upper-class woman who has a child at the same elementary school. When Emily goes missing, Stephanie takes it upon herself to investigate.",
          duration: "1 hr 59 min ",
          genre: "Crime, Comedy, Mystery",
          rating: 7.2
        },
        movies: [],
        page: 1,
        moviesGenres: [],
        mode: ['light', 'dark'],
        theme: 'light'
        
      }
  },
  methods:{
    search(searchText){
      this.searchText = searchText;
    },
    selectedGenreChanged(genres){
      this.selectedGeneres = genres;
    },
    selectedCountryChanged(countries){
      this.titleOfCountrySelected = countries;
    },
    selectedYearsChanged(years){
      this.selectedYears = years;
    },
    tripleclick(data, clickCount){
      console.log(data, clickCount)
    },
    toogle(){
      if(this.theme == 'dark'){
        this.theme = 'light'
        document.body.setAttribute('data-theme', 'light');

      }
      else{
        document.body.setAttribute('data-theme', 'dark');
        this.theme = 'dark'
      }
    },
  
    async loadMovies(){
      const response = await MovieService.getPopular(this.page);
      if(response.results){
        response.results.forEach(x => this.movies.push(x));
      }
    },
    // previewPage(){
    //   this.page--;
    // },
    async nextPage(){
      this.page++;
      if(this.movies.length < this.page * 20){
        await this.loadMovies();
      }
    },
    async loadGenres(){
        const response = await MovieService.getGenres();
        response.genres.forEach(x => this.moviesGenres.push(x));
      },
  },
  computed: {
    searchedMovie(){
      return this.movies
      .filter((movie) => movie.title.toLowerCase().includes(this.searchText.toLowerCase()))
      .filter((movie) => !this.selectedYears.length || this.selectedYears.some(date => movie.release_date.includes(String(date))))
      .filter((movie) => !this.selectedGeneres.length || this.selectedGeneres.some(genre => movie.genre_ids.includes(genre.id)))
      
    },
  },
  async mounted(){
    await this.loadMovies();
    await this.loadGenres();
  }
}
</script>

<style>

</style>
