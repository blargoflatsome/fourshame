<template lang="pug">
article(v-if="post")  
  TOC(:toc="post.toc")
    h2(class="text-black") {{ post.title }}  
    nuxt-content(:document="post")
</template>

<script>
import TOC from '@/components/global/toc.vue'

export default {
  components: { TOC },
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("articles", params.article).fetch();
    } catch (e) {
      error({ message: "Articles post not found" });
    }
    return { post };
  },
  head() {
    if(this.post.metaDescription) {
      return {
        title: `${this.post.title} | 4 Shame Not Honor`,
        meta: [
          {
            hid: 'og:description',
            name: 'og:description',
            content: this.post.metaDescription,
          }
        ]
      } 
    }

    return { title: `${this.post.title} | 4 Shame Not Honor` }
  }
}
</script>
