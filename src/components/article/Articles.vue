<template>
    <main role="main">
      <div class="album py-5 bg-light">
        <div class="container" v-if="loadMore">
          <div class="row" v-if="articleFilter">
           
           <div class="col-md-4"  v-for="article in articleFilter" :key="article.id">
                <ArticleItem :article="article" />
           </div>
          </div>
        </div>
      </div>

    </main>
</template>
<script>
import axios from 'axios'
import ArticleItem from './ArticleItem'

export default {
    name: 'Articles',
    components: { ArticleItem  },
    data: function() {
        return {
            articles: [],
            loadMore: true 
        }
    },
    watch: {
        $route(to) {
            this.articles = []
            this.loadMore = true
            this.getArticles()
        }
    },
    mounted() {
        this.getArticles()
    },
    computed: {

		articleFilter () {
			var filteredList = this.articles;
            return filteredList;
		}
    },
    methods: {
        getArticles() {
            const url = "https://strapi.lakritsroten.se/articles"
            axios(url).then(res => {
               this.articles = this.articles.concat(res.data)
                localStorage.setItem('articles',JSON.stringify(res.data))
                if(res.data.length === 0) this.loadMore = false 
            })
        }
    },

}
</script>

<style>
    .articles-by-category ul {
        list-style-type: none;
        padding: 0px;
    }

    .articles-by-category .load-more {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;/*uma distancia bo botão com os artigos */
    }
</style>
