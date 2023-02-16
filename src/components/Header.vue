<template>
   <header class="header linear__bg">
      <div class="logo padding-top">
        <a href=""><img src="@/assets/img/logo.png" alt="" class="company__logo"></a> 
          <span class="company__name">MovieBox</span>
      </div>
      <Search @search-text-changed="search"></Search>
      <a href="" class="sigin">Sign In</a>
   </header>
    
</template>

<style>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo{
    display: flex;
    align-items: center;
    gap: 20px;
}
.company__name{
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
}
.sigin {
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: white;
  padding-right: 95px;
  padding-top: 20px;
}
</style>

<script>

import Search from './Search.vue';

export default {
  name: 'Header',
  components: {
    Search
  },
  methods: {
    search(searchText){
      this.$emit('search-text-changed', searchText)
    }
  }
}

</script>