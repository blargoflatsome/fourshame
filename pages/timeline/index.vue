<template lang="pug">
main
  section( v-if="posts" class="w-full max-w-5xl mx-auto")
    h1( class="title") Timeline
    posts( post-type="timeline" :amount="10")

</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("timeline").fetch();
    } catch (e) {
      error({ message: "Timeline posts not found" });
    }
    return { posts };
  },
}
</script>
