<template>
    <div class="container padding-top">
        <div class="about__movie" >
            <img class="about__movie__bg" :src="dayMovie.image" />
            <div class="shadow"></div>
            <div class="about right-side">
                <h3>{{dayMovie.title}}</h3>
                <!-- <span class="description">{{dayMovie.description }}</span>
                <a href="#">Read More</a> -->
                <LimitedText :text="dayMovie.description" :limit="210"></LimitedText>
                <p class="genre">Genre: 
                   <span>{{dayMovie.genre}}</span> 
                </p>
                <span class="duration">Duration: 
                   <span>{{dayMovie.duration}}</span> 
                </span>
                <p class="rating_movie_day">Rating: 
                    <span>{{ dayMovie.rating }}</span>
                </p>
            </div> 
            
            <button type="button" class="playVideo" @click="show" >
                <img src="@/assets/img/playbutton.svg" class="btn-play"/>
            </button>
        </div>   

        <div class="modal-backdrop" v-show="opened">
            <div class="modal">
                <header class="modal-header">
                    <slot name="header">
                        <button type="button" class="btn-close"
                            @click="close()">
                            x
                        </button>
                    </slot>
                </header>

                <section class="modal-body">
                    <iframe ref="video" src="https://www.youtube.com/embed/rAqMlh0b2HU?autoplay=1&enablejsapi=1&mute=1" title="A Simple Favor (2018 Movie) Official Trailer" allow="autoplay" frameborder="0" seamless sandbox="allow-scripts allow-same-origin allow-presentation"></iframe>
                    <!-- <slot name="body">
                        <iframe width="1024px" height="768px" src="https://www.youtube.com/embed/rAqMlh0b2HU" title="A Simple Favor (2018 Movie) Official Trailer – Anna Kendrick, Blake Lively, Henry Golding" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                     </slot> -->
                </section>
          </div>
        </div>            
    </div>

</template>



<style>
.container {
    padding-right: 80px;
    margin-top: 40px;
}
.about__movie{
    position: relative;
    height: 700px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.about__movie__bg{
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -1;
    width: 100%;
    height: 100%;
}
.shadow{
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
}
 .about {
    width: 45%;
    margin-top: 75px;
    gap: 10px;
    display: flex;
    flex-direction: column;
 }
 h3 {
    font-size: 73px;
    color: white;
 }
 .description,.genre,.duration,.rating_movie_day {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
 }
 .genre, .duration, .rating_movie_day{
    color: var(--button-color);
 }
 .genre span{
    color: #ffffff;
 }
 .duration span{
    color: #ffffff;
 }
 .rating_movie_day span{
    color: #ffffff;
 }
 iframe {
    width: 1024px;
    height: 768px;
 }
 .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header{
    display: flex;
  }

  .modal-header {
    color: white;
    justify-content: right;
  }
  .modal-body {
    position: relative;
    padding: 10px 5px;
    justify-content: center;
    display: flex;
  }
  .playVideo {
    background: transparent;
    cursor: pointer;
    border: none;
    top: 49%;
    position: absolute;
    right: 87%;
  }
  .btn-play {
    height: 110px;
  }
  .btn-close {
    border: none;
    font-size: 25px;
    padding-right: 24px;
    padding-top: 10px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    background: transparent;
  }
</style>

<script>
    import LimitedText from './LimitedText.vue';

    export default {
        name: 'modal',
        components:{
            LimitedText,
        },
        props:{
            dayMovie: {
                type: Object,
            }
        },
        data(){
            return {
                opened: false,
                videoSrc: 'https://www.youtube.com/watch?v=C5q0ULg0nmY',
            }
        },
        methods:{
            show(){
                this.opened = true;
                this.$refs.video.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'playVideo' }), '*');

            },
            close(){
                // this.$emit('close')
                this.opened = false;
                this.$refs.video.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo' }), '*');
            },
        },
    }
</script>