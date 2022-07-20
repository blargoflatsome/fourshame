<template lang="pug">
main
  section( v-if="posts" class="w-full max-w-5xl mx-auto")
    h1( class="title") Characters
    posts(:posts="posts" key="characters" pathPrefix="characters")
</template>

<script>
// Display cards of Characters
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("characters").fetch();
    } catch (e) {
      error({ message: "Character posts not found" });
    }
    return { posts };
  },
  head(){
    return {
      title: `Characters | 4 Shame Not Honor`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Learn more about the Roudgara Campaign's characters",
        }
      ],
    }
  }
}
</script>
