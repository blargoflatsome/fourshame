<template lang="pug">
main
  section
    div(v-html='$md.render(posts.content)')
</template>

<script>

export default {
  name: "Homepage",
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("site", 'about').fetch();
    } catch (e) {
      error({ message: "Homepage posts not found" });
    }
    
    return { posts };
  },
  head(){
    return {
      title: `4 Shame Not Honor`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "We are a homebrew D&D twitch stream"
        }
      ]
    }
  }
}
</script>