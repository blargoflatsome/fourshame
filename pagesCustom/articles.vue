<template lang="pug">
main
  section(v-if="posts")
    h1(class="title") {{pageTitle}}
    
    div(class="md:flex")
      div(class="md:order-2")
        //- Make this hideable on D-Top and a floating icon on mobile?
        posts(:posts="posts" :key="pageTitle" :pathPrefix="pageType" :amount="10")
      div(class="flex-1 md:pr-10 md:order-1")
        router-view
</template>

<script>
export default {
  name: "Articles",
  props: {
    pageTitle: {
      type: String,
      default: 'Articles'
    },
    pageType: {
      type: String,
      default: 'default'
    }
  },
  async asyncData({ $content, route, error }) {
    let posts;
    const props = route.matched[0].props.default
    try {
      posts = await $content("articles").where({type: props.pageType}).sortBy({key: 'slug', direction: 'asc'}).limit(10).fetch();
    } catch (e) {
      error({ message: "Articles posts not found" });
    }
    return { posts };
  },
}
</script>
