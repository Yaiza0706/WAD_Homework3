import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Browse from './components/Browse.vue'
import Profile from "./models/Profile"
import Post from "./models/Post"
import Main from './components/Main.vue'
import Login from './components/Login.vue'


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/browse', component: Browse},
    { path: '/profiles/:id', name: "profiles", component: Browse },
    { path: '/main', component: Main },
    { path: '/', component: Login}
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        profiles: [
            new Profile("John", "Doe",  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"),
            new Profile("Gordon", "Freeman", "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"),
            new Profile("John", "Doe", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"),
            new Profile("Bruce",  "Wayne", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"),
            new Profile("Richard", "Stallman","https://images.unsplash.com/photo-1553798194-cc0213ae7f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80")
        ],
        posts: [
            new Post("http://www.pastatdude.com/uploaded_images/hl2-2007-10-20-16-36-36-32-713089.jpg", "I think it's going to rain"),
            new Post(null, "Which weighs more, a pound of feathers or a pound of bricks?"),
            new Post("https://i.pcmag.com/imagery/reviews/00EfzjLJNL6FNKVxviGg7Zw-2.1569473216.fit_scale.size_1182x667.jpg", "Felt cute, might delete later"),
            new Post("https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4", null)
        ]
    },
    mutations: {
        
    },
    getters: {
        
    }
});



new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
