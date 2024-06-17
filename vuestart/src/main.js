import { createApp } from 'vue'
import App from './App.vue'
import FriendContent from "@/components/FriendContent.vue";

const app = createApp(App);
app.component('friend-content', FriendContent)
app.mount('#app');
