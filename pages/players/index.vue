<template lang="pug">
main
  section( v-if="posts" class="w-full max-w-5xl mx-auto")
    h1( class="title") The Cast
    posts(:posts="posts" key="players" pathPrefix="players")
</template>

<script>
// Display cards of Players, with no child detail pages
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
  head(){
    return {
      title: `The Players | 4 Shame Not Honor`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Learn more about the players of 4 Shame Not Honor!"
        }
      ]
    }
  }
}
</script>
