import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.css'
import '@/assets/css/mobile.css'
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'

const app = createApp(App);
app.use(Vue3VideoPlayer, {
    lang: 'zh-CN'
  });

app.mount('#app')