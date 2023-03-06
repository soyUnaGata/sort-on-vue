<template>
   <header class="header linear__bg"
   :theme = "theme">
      <div class="logo padding-top">
        <a href=""><img src="@/assets/img/logo.png" alt="" class="company__logo"></a> 
          <span class="company__name">MovieBox</span>
      </div>
      <Search @search-text-changed="search"></Search>
      <SignUp></SignUp>
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

</style>

<script>

import Search from './Search.vue';
import ToogleMode from './ToogleMode.vue';
import SignUp from './SignUp.vue'

export default {
  name: 'Header',
  components: {
    Search,
    ToogleMode,
    SignUp
  },
  props: ['theme'],
  methods: {
    search(searchText){
      this.$emit('search-text-changed', searchText)
    }
  }
}

</script>