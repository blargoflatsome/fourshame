<template lang="pug">
main
  section(v-if="posts")
    h1(class="title") {{pageTitle}}    
    div(class="w-full md:flex space-x-4")
      div
        posts(:posts="posts" :key="pageTitle" :pathPrefix="pageType")
      div(class="flex-1")
        nuxt(:key="$route.fullPath")
</template>

<script>
export default {
  name: "Articles",
  props: {
    pageTitle: {
      type: String,
      required: true,
      default: 'Articles'
    },
    pageType: {
      type: String,
      required: true,
      default: 'default'
    }
  },
  data: () => ({
    posts: []
  }),
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {    
    this.posts = await this.$content("articles").where({type: this.pageType}).sortBy({key: 'slug', direction: 'asc'}).fetch();
  },
}
</script>
