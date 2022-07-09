<template lang="pug">
main
  section( v-if="posts" class="w-full max-w-5xl mx-auto")
    h1( class="title") House Rules
    posts(:posts="posts" key="houserules" pathPrefix="houserules" :amount="10")
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("houseRules").fetch();
    } catch (e) {
      error({ message: "houseRules posts not found" });
    }
    return { posts };
  },
}
</script>
