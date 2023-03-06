<template>
    <span class="signup">Sign Up</span>
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
                    <iframe ref="video" src="https://www.youtube.com/embed/rAqMlh0b2HU?autoplay=1&enablejsapi=1" title="A Simple Favor (2018 Movie) Official Trailer" allow="autoplay" frameborder="0" seamless sandbox="allow-scripts allow-same-origin allow-presentation"></iframe>
                    <!-- <slot name="body">
                        <iframe width="1024px" height="768px" src="https://www.youtube.com/embed/rAqMlh0b2HU" title="A Simple Favor (2018 Movie) Official Trailer – Anna Kendrick, Blake Lively, Henry Golding" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                     </slot> -->
                </section>
          </div>
        </div>  
</template>

<style>
.sigup {
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding-right: 95px;
  padding-top: 20px;
  color: var(--text-color);
}
</style>

<script>
  export default {
    data(){
        return {
            opened: false,
           
        }
    },
}
</script>