<template>
    <div class="movie__rating">
        <div class="rating__stars" v-for="star in generalStars">
            <div class="star__empty">☆</div>
            <div class="star__full" :style="{ maxWidth: `${starRatingFullness(star)}%` }">★</div>
        </div>
        <span class="rating">{{ rating }}</span>
    </div>
</template>

<style>
    .movie__rating{
        position: relative;
        display: flex;
        align-items: center;
    }
    .rating__stars {
        font-size: 23px;
        color: var(--rating-color);
        cursor: default;
        position: relative;
    }
    .star__full{
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
    .rating{
        margin-left: auto;
    }
</style>
    
<script>

export default {
    name: 'MovieRating',
    props: {
        rating:{
            type: Number,
        },
        mode:{
            type: String
        }
    },
    data(){
        return {
            totalStars: 10,
        }

    },
    computed:{
        generalStars(){
                const stars = [];
                let temp = this.rating;
                while(temp > 0){
                    if(temp < 1){
                        stars.push(temp.toFixed(1) )
                    }
                    else{
                        stars.push(1)
                    }

                    temp--;
                }

                if(this.totalStars > stars.length){
                    const generalStar = (this.totalStars - stars.length)
                    for (let i = 0; i < generalStar; i++) {
                        stars.push(0)                        
                    }
                }

                return stars;
            }
    },
    methods:{
        starRatingFullness(star){
            return 25+ star * 50;
        },
    }
}
</script>