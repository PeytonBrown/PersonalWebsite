<template>
  <div class="home-page">
	  <h2>Latest Posts</h2>
	  <div class="articles">
		  <div class="article" :style="styleObject(idx)" v-for="(article, idx) of articles" :key="idx">
			  <nuxt-link style="text-decoration: none;" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
				  <div class="article-inner">
						<div class="detail">
							<h3 :style="{color: getTextColor(idx)}">{{ article.title }}</h3>
							<p :style="{color: getSubtitleColor(idx)}">{{ article.description }}</p>
						</div>
				  </div>
			  </nuxt-link>
		  </div>
	  </div>
  </div>
</template>

<script>
export default {
	async asyncData({ $content, params }) {
		const articles = await $content('blog', params.slug)
			.only(['title', 'description', 'slug'])
			.sortBy('createdAt')
			.fetch();

		return {
			articles
		}
	},
  methods: {
    styleObject: function(idx) {
      return {
        '--color': this.getTextColor(idx),
        '--color-hover': this.getSubtitleColor(idx),
      }
    },
  getTextColor(index) {
    var textColorArray = ['#fd5764', '#f48c43', '#91e24f', '#669efd', '#e95fd7'];
    return textColorArray[index % textColorArray.length];
  },
  getSubtitleColor(index) {
    var subtitleColorArray = ['#fea3aa', '#f8b88b', '#baed91', '#b2cefe', '#f2a2e8'];
    return subtitleColorArray[index % subtitleColorArray.length];
  }
  },
}
</script>

<style lang="scss" scoped>

.home-page {
  padding: 50px 30px;
}

h2 {
  margin-bottom: 30px;
  text-align: center;
  font-size: 150%;
}

.articles {
  margin: 0 auto;
  max-width: 800px;
}

.article {
  margin-bottom: 25px;
  border-radius: 8px;
  outline: 4px solid;
  outline-color: var(--color);

}

.article:hover {
  border-radius: 8px;
  outline: 4px solid;
  outline-color: var(--color-hover); 
}

.article-inner {
  padding: 15px;
  background-color: rgb(26, 26, 26);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
}

.article-inner img {
  display: block;
  width: 100%;
  max-width: 300px;
}
.article-inner .detail {
  padding-left: 15px;
  padding-right: 15px;
}

h3 {
  color: #fd5764;
  font-size: 24px;
  text-decoration: none;
}

p {
  color: rgb(61, 61, 61);
  font-size: 18px;
  text-decoration: none;
}
</style>