<template>
    <div class="movie__rating">
        <span class="movie__rating">{{ rating }}</span>
    </div>
</template>

<script>


export default {
    name: 'MovieRating',
    props: {
        rating:{
            type: Number,
        },
    }
}
</script>