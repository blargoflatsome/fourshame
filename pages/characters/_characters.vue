<template lang="pug">
section(v-if='post')    
  div(class="md:flex")
    img(:src='post.thumbnail' width="280" height="280")
    div(class="my-4 md:my-0 md:ml-4 leading-snug")
      h1(class="leading-none m-0") {{ post.name }}
      h2(class="leading-none") {{ post.subtitle }}
  article(class="relative my-0 mx-auto")
    nuxt-content(:document="post")
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("characters", params.characters).fetch();
    } catch (e) {
      error({ message: "Character post not found" });
    }
    return { post };
  },
  head(){
    return {
      title: `${this.post.name} | 4 Shame Not Honor`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.post.name} ${this.post.subtitle}`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.post.thumbnail
        },
      ]
    }
  }
}
</script>

