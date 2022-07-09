<template lang="pug">
main
  section(v-if="posts")
    h1(class="title") {{pageTitle}}
    
    div(class="md:flex")
      div(class="md:order-2")
        //- Make this hideable on D-Top and a floating icon on mobile?
        posts(:posts="posts" :key="pageTitle" :pathPrefix="pageType")
      div(class="flex-1 md:pr-10 md:order-1")
        nuxt
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
