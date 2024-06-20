import { createApp } from 'vue';
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue';
import TeamsList from "@/components/teams/TeamsList.vue";
import UsersList from "@/components/users/UsersList.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            //ilyenkor ténylegesen van url csere, beírják a /-t, akkor átvált /teams-re
            path: '/', redirect: '/teams',
        },
        {
            //ha itt alias van, akkor nincs url csere, sima /-nél is ez látszik
            path: '/teams', component: TeamsList, /*alias: '/' */
        },
        {
            path: '/users', component: UsersList
        },
        {
            path: '/teams/:teamId', component: TeamMembers, props: true
        },
        {
            path: '/:notFound(.*)', component: NotFound
        }
    ]
});
const app = createApp(App)
app.use(router)
app.mount('#app');
