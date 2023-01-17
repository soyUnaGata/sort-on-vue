<template>
    <div class="select country">
            <div class="title_headline select-button__style" v-on:click="select = !select">Country</div>
                <div class="list_of_countries">
                <div class="countries"></div>
            </div>
        </div>
</template>

<script>

export default {
    name: 'FilterByContry',
    components: {
        FilterByCountry
    },
    data(){
        return {
            country: ["Action","Crime","Drama","Comedy","Horror","Detective","Historical","Documentary","Biography"],
            select: false,
            titleOfCountrySelected: [],
        }
    },
    methods:{
        selectedCountry(genre){
             if(!this.titleOfCountrySelected.includes(genre)){
                this.titleOfCountrySelected.push(genre)
             }
             this.select = false;
        }
    },

}
</script>