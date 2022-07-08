<template lang="pug">
main
  section( v-if="posts" class="w-full max-w-5xl mx-auto")
    h1( class="title") Locations
    posts( :posts="posts" pathPrefix="locations" :amount="10")
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let posts;
    try {
      posts = await $content("articles").sortBy({key: 'slug', direction: 'asc'}).where({type: params.type}).limit(10).fetch();
    } catch (e) {
      error({ message: "Location posts not found" });
    }
    return { posts };
  },
}
</script>
