<template>
  <Header></Header>
  <FilterByGenre></FilterByGenre>
</template>

<script>
import FilterByGenre from './components/FilterByGenre.vue'
import Header from './components/Header.vue';


export default {
  name: 'App',
  components: {
    FilterByGenre,
    Header
}
}
</script>

<style>

</style>
