<template>
    <main role="main">
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
           <div class="col-md-4">
                <div class="article-item">
                    <div class="card mb-4 box-shadow">
                        <div class="article-item-image d-none d-sm-block">
                            <img class="card-img-top" v-if="article.image.url"
                                :src="`https://strapi.lakritsroten.se/${article.image.url}`"
                                height="150" width="150" alt="Article">
                            <img class="card-img-top" v-else
                                src="data:image/jpeg;base64,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"
                                height="150" width="150" alt="Article">
                        </div>
                        <div class="card-body">
                        <router-link :to="{ name: 'article', params: { id: article.id } }">
                            <h5 class="card-title">{{ article.title }}</h5>
                        </router-link>
                        <p class="card-text">{{ article.intro }}</p>
                        <div class="d-flex justify-content-between align-items-center">
                           <div class="">
                                <span class="text-muted">{{ article.slug }}</span>
                                </div>
                                <small class="text-muted">Status : {{ article.status }}</small>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
          </div>
        </div>
      </div>

    </main>
    
</template>

<script>
import axios from 'axios'
export default {
    name: 'Article',
    components: { 

    },
    data: function() {
        return {
            article: {}
        }
    },
    mounted() {
        const url = `https://strapi.lakritsroten.se/articles/${this.$route.params.id}`
        axios.get(url).then(res => this.article = res.data)
    },
}
</script>
