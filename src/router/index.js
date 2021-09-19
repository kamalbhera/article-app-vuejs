import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import Articles from '../components/article/Articles.vue';
import Article from '../components/article/Article.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
    routes: [
    { path: '/', component: Home },
    { path: '/articles', component: Articles, name: 'articles' },
    { path: '/article/:id', component: Article, name: 'article' },
    ]
});

export default router;

