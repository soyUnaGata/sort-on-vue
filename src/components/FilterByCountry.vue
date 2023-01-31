<template>
    <div class="select country">
            <div class="title_headline select-button__style"
                 :class="{ 'has-content' : titleOfCountrySelected.length }" 
                 :data-titles="titleOfCountrySelected.join(', ')"
                 v-on:click="select = !select"> 
                    {{ formatedSelectionText || 'Country'}}
                </div>
                <div class="selected_genres_buttons">
                    <input class="input__country-search" type="text" placeholder="Search" v-model="searchCountry" v-show="select">
                </div>
                <div class="scroll-list" v-show="select">
                    <div class="list_of_countries" v-show="select" v-for="country in search">
                    <div class="countries" v-on:click="selectedCountry(country)">{{ country }}</div>
                </div>
            
            </div>
    </div>
</template>

<style>
    .has-content{
        width: 150px;
        max-width: 150px;
        overflow: initial;
        position: relative;
    }

    .scroll-list {
        overflow: hidden;
        overflow-y: scroll;
        height: 200px;
    }
    .scroll-list::-webkit-scrollbar{
        height: 10px;
        width: 8px;
    }
    .scroll-list::-webkit-scrollbar-track{
        background-color: transparent;   
    }
    .scroll-list::-webkit-scrollbar-thumb{
        background-color: yellow;
        height: 38px;
        border-radius: 10px;
    }
    .input__country-search{
        border: 1px solid white;
        background-color: transparent;
        border-radius: 7px;
        margin-top: 15px;
        padding: 5px 20px;
        width: fit-content;
        height: fit-content;
    }
    input[type="text"].input__country-search{
        outline: none;
        color: white;
        font-size: 16px;
    }
     input[type="text"].input__country-search:-webkit-autofil{
        color: white;
        -webkit-text-fill-color:white;
    }
     input[type="text"].input__country-search::placeholder{
        color: white;
        font-size: 16px;
        font-weight: 200;
    }
    .list_of_countries {
        margin-top: 10px;
        cursor: pointer;
    }

    .has-content:hover::after{
        opacity: 1;
        content: attr(data-titles);
        position: absolute;
        top: -35px;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        background-color: transparent;
        padding: 3px 5px;
        white-space: nowrap;
        transition: all .3s;
        display:flex;
        border-radius: 5px;
        width: 200px;
    }
</style>
<script>

export default {
    name: 'FilterByContry',
    data(){
        return {
            countries: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea","Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],
            select: false,
            titleOfCountrySelected: [],
            searchCountry: '',
        }
    },
    methods:{
        selectedCountry(country){
             if(!this.titleOfCountrySelected.includes(country)){
                this.titleOfCountrySelected.push(country)
             }
             this.select = false;
             this.$emit('select-country-changed', this.titleOfCountrySelected)
        },
        removeSelectedCountry(title){
            this.titleOfCountrySelected = this.titleOfCountrySelected.filter(t => t !== title);
            this.$emit('select-country-changed', this.titleOfCountrySelected)
        },
        clear(){
            this.titleOfCountrySelected = [];
            this.searchCountry = '';
            this.$emit('select-country-changed', this.titleOfCountrySelected);
        },
        cutString(source){
            return source.length > 10 ? (source.substring(0, 7) + '...') : source;
        }
    },
    computed:{
        search(){
            return this.countries
            .filter((country) => country.toLowerCase().includes(this.searchCountry.toLowerCase()))          
        },
        formatedSelectionText(){
            return this.titleOfCountrySelected.length 
                ? this.cutString(this.titleOfCountrySelected.join(', '))
                : ''
        }
    }

}
</script>