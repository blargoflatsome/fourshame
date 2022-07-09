<template lang="pug">
main
  section( v-if="posts" class="w-full max-w-5xl mx-auto")
    h1( class="title") The Cast
    posts(:posts="posts" pathPrefix="players" :amount="10")
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("players").fetch();
    } catch (e) {
      error({ message: "Player posts not found" });
    }
    return { posts };
  },
}
</script>
