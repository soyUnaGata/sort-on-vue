<template>
       <div class="select year">
        <div ref="openBtn" class="title_headline select-button__style" 
        :class="{ 'has-content' : selectedYears.length }" 
        :data-titles="selectedYears.map(item => item).join(', ')"
        v-on:click="switchOpen">
         {{ formatedSelectionText || 'Year'}}</div>
            <div class="scroll-list" v-show="select">
                <div class="list_of_years" v-show="select" v-for="year in years">
                <div class="years"  v-on:click="selectYear(year)">{{ year }}</div>
            </div>
        </div>
    </div>   
</template>

<style>

</style>

<script>

export default {
    name: 'FilterByYear',
    data(){
        return {
            years: [],
            select: false,
            selectedYears: [],
        }
    },
    methods:{
        selectYear(year){    
            const index = this.selectedYears.findIndex(item => item.id === year.id);

             if(!this.selectedYears.includes(year)){
                this.selectedYears.push(year)
             }
            //  else{
            //     this.selectedYears.splice(index, 1);
            //  }
             this.select = false;
             this.$emit('select-year-changed', this.selectedYears)
        }, 
        clear(){
            this.selectedYears = [];
            this.$emit('select-year-changed', this.selectedYears);
        },
        cutString(source){
            return source.length > 10 ? (source.substring(0, 7) + '...') : source;
        },
        clickOutside(e){
            if(e.target !== this.$refs.openBtn && this.select) 
            {
                this.select = false;
            }
            
        },
        switchOpen(){
            this.select = !this.select
        }
    },
    computed:{
        formatedSelectionText(){
            return this.selectedYears.length 
                ? this.cutString(this.selectedYears.map(item => item).join(', '))
                : ''
        }
    },
    mounted(){
        for (let i = 2000; i <= 2023; i++) {
            this.years.push(i)
        }
        window.addEventListener('click', this.clickOutside)
    },
    unmounted(){
        window.removeEventListener('click', this.clickOutside)
    }
}
</script>