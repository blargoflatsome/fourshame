<template lang="pug">
section(v-if='post')    
  div(class="md:flex")
    div(class="flex-1 max-w-min min-w-max")
      img(:src='post.thumbnail' width="280" height="280" :alt="post.name")
    div(class="my-4 md:my-0 md:ml-4 leading-snug")
      h1(class="leading-none m-0") {{ post.name }}
      h2(class="leading-none mt-1") {{ post.subtitle }}
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
          hid: 'og:title',
          name: 'og:title',
          content: `${this.post.name}`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `${this.post.metaDescription || this.post.subtitle}`
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

