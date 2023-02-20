<template>
   <header class="header linear__bg"
   :theme = "theme">
      <div class="logo padding-top">
        <a href=""><img src="@/assets/img/logo.png" alt="" class="company__logo"></a> 
          <span class="company__name">MovieBox</span>
      </div>
      <Search @search-text-changed="search"></Search>
      <a href="" class="sigin">Sign In</a>
      <ToogleMode :theme = "theme"
      @toogle="$emit('toogle')"></ToogleMode>
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
  padding-right: 95px;
  padding-top: 20px;
  color: var(--text-color);
}
</style>

<script>

import Search from './Search.vue';
import ToogleMode from './ToogleMode.vue';

export default {
  name: 'Header',
  components: {
    Search,
    ToogleMode
  },
  props: ['theme'],
  methods: {
    search(searchText){
      this.$emit('search-text-changed', searchText)
    }
  }
}

</script>