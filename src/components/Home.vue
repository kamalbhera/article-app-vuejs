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
import ArticleItem from './article/ArticleItem'

export default {
    name: 'Articles',
    components: { ArticleItem  },
    data: function() {
        return {
            articles: [],
            status: "published",
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
             if(filteredList.length != 0){
                filteredList =  this.articles.filter(article => article.status == this.status);
            }
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
