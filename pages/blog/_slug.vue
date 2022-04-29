<template>
  <article class='prose prose-custom max-w-3xl mx-auto p-8 my-4' style="border-radius: 8px; background-color: rgb(35 35 35);">
    <nuxt-content :document="article" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('blog', params.slug)
      .fetch()

      return { article }
    }
  }
</script>

<style scoped>



</style>