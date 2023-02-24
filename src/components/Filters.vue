<template>
     <p class="search__movie padding-top" ref="text">Search Movie</p>
     <div class="select__filters padding-top" >
        <FilterByGenre @select-genre-changed="selectedGenreChanged"
         ref="filterByGenre"></FilterByGenre>
        <FilterByCountry @select-country-changed="selectedCountryChanged" ref="filterByCountry"></FilterByCountry>
        <button class="clear__all_filters select-button__style" @click="clearAll" v-show="genreFilterActive">Clear All</button>
     </div>
    
</template>

<style>
.select__filters{
    display: flex;
    margin-top: 10px;
    gap: 20px;
}
.search__movie{
    margin-top: 30px;
    font-size: 40px;
    font-weight: 700;
}
.clear__all_filters.select-button__style{
  background-color: var(--for-search);
  border-color: var(--for-search-border);
  color: #fff;
  font-size: 17px;
  display: flex;
}

</style>

<script>
import FilterByGenre from './FilterByGenre.vue';
import FilterByCountry from './FilterByCountry.vue';
import { eventBus } from '@/eventBus';

export default {
    name: 'Filters',
    data(){
      return {
        genreFilterActive: false
      }
    },
    components: {
        FilterByGenre,
        FilterByCountry
    },
    methods: {
    selectedGenreChanged(selectedGeneres){
      this.genreFilterActive = selectedGeneres.length > 0,
      this.$emit('select-genre-changed', selectedGeneres)
    },
    selectedCountryChanged(titleOfCountrySelected){
      this.genreFilterActive = titleOfCountrySelected.length > 0,
      this.$emit('select-country-changed', titleOfCountrySelected)
    },
    clearAll(){
      this.$refs.filterByGenre.clear(),
      this.$refs.filterByCountry.clear();
      eventBus.$emit('clear-all-filters')
    }
  }
}
</script>
