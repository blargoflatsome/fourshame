<template lang="pug">
ul(v-if="posts" class="hidden m-0 list-none text-sm border-t border-b border-accent-dark px-3 py-1 rounded md:block")
  li(
    v-for="(post, index) in posts"
    :key="index"
  )
    nuxt-link(
      :to="`/${pathPrefix}/${post.slug}`" 
      class="router-link-active router-link-exact-active whitespace-nowrap"
      :class="{'active': `/${pathPrefix}/${post.slug}` === $route.path}"
    )
      span(class="whitespace-nowrap") {{ post.title || post.name }}
p(v-else class="max-w-5xl mx-auto") Not found
</template>

<script>
  export default {
    name: 'Posts',
    props: {
      posts: {
        type: Array,
      },
      pathPrefix: {
        type: String,
      },
    }
  }
</script>

<style scoped>
.active::before {
  content: "[";
  margin-right: 0.5rem;
}
.active::after {
  content: "]";
  margin-left: 0.5rem;
}
</style>