import Vue from "vue"
import VueRouter from 'vue-router'

import Home from "../views/Home.vue"
import Card from "../views/Card.vue"
import Cinema from "../views/Cinema.vue"
import City from "../views/City.vue"
import Film from "../views/Film.vue"
import Login from "../views/Login.vue"
import Money from "../views/Money.vue"
import Center from "../views/Home/Center.vue"
import Cinemas from "../views/Home/Cinemas.vue"
import Films from "../views/Home/Films.vue"
import ComingSoon from "../views/Home/Fimls/ComingSoon.vue"
import NowPlaying from "../views/Home/Fimls/NowPlaying.vue"




Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            component: Home,
            children: [{
                    path: 'films',
                    component: Films,
                    meta: {
                        tabId: 1
                    },
                    children: [{
                            path: 'nowPlaying',
                            component: NowPlaying,
                            meta: {
                                tabId: 1
                            }
                        },
                        {
                            path: 'comingSoon',
                            component: ComingSoon,
                            meta: {
                                tabId: 1
                            }
                        },
                        {
                            path: '',
                            redirect: '/films/nowPlaying'
                        }
                    ]
                },
                {
                    path: 'center',
                    component: Center,
                    meta: {
                        tabId: 4
                    }
                },
                {
                    path: 'cinemas',
                    component: Cinemas,
                    meta: {
                        tabId: 2
                    }
                },
                {
                    path: '',
                    redirect: '/films/nowPlaying'
                }


            ]
        },
        {
            path: '/card',
            component: Card
        },
        {
            path: '/cinema/:id/film',
            component: Cinema
        },
        {
            path: '/city',
            component: City
        },
        {
            path: '/film/:id',
            component: Film
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/money',
            component: Money
        }



    ]
})
export default router