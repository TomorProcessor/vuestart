import {createApp, defineAsyncComponent} from 'vue';
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue';
import TeamsList from "@/components/teams/TeamsList.vue";
import UsersList from "@/components/users/UsersList.vue";
import TeamMembers from "@/components/teams/TeamMembers.vue";
// import NotFound from "@/components/NotFound.vue";
import TestFooter from "@/components/TestFooter.vue";

const NotFound = defineAsyncComponent(() => import('./components/NotFound.vue'));

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            //ilyenkor ténylegesen van url csere, beírják a /-t, akkor átvált /teams-re
            path: '/', redirect: '/teams',
        },
        {
            //ha itt alias van, akkor nincs url csere, sima /-nél is ez látszik
            name: 'teams',
            path: '/teams',
            components: {default: TeamsList, footer: TestFooter}, /*alias: '/' */
            children: [
                {
                    name: 'team-members', path: ':teamId', component: TeamMembers, props: true
                }
            ],
            meta: {needsAuth: true}
        },
        {
            path: '/users', component: UsersList,
        },
        {
            path: '/:notFound(.*)', component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log('to', to, 'from', from, 'savedPosition', savedPosition);
        /**
         * saved position: alapból undefined, egyébként az előbbi route srcoll állapotát tartalmazza (left és top)
         * Az itt visszaadott object-tel lehet befolyásolni, hogy az egyes route-okra érkezve hova scroll-lozzon
         * a böngésző
         */
        if (savedPosition) return savedPosition;
        return {left: 0, top: 0};
    }
});
router.beforeEach((to, from, next) => {
    console.log(from, to);
    // next(); //ilyenkor nem gátol egy route-ot se
    // next(false); ilyenkor egy route-ot se enged
    // next({name: 'team-members', params: {teamId: 't2'}}); ilyenkor fixen ide redirect-el
    if (to.meta.needsAuth) {
        //itt kellene csekkolni, hogy authentikálva van-e
        console.log('auth kell');
        next();
    } else {
        next();
    }
})
const app = createApp(App)
app.use(router)
app.mount('#app');
