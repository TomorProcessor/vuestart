import { createApp } from 'vue'
import App from './App.vue'
import FriendContent from "@/components/FriendContent.vue";
import NewFriend from "@/components/NewFriend.vue";

const app = createApp(App);
app.component('friend-content', FriendContent)
app.component('new-friend', NewFriend);
app.mount('#app');
