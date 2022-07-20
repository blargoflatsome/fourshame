<template lang="pug">
main
  section(v-if='post')
    h1 {{ post.title }}
    article(class="relative my-0 mx-auto")
      nuxt-content(:document="post")
      Tabs(:tabs="post.tabs")
 
</template>

<script>
import Tabs from '@/components/global/tabs.vue'

export default {
  async asyncData({ $content, params, error }) {
    let post;

    try {
      post = await $content("houseRules", params.houserules).fetch();
    } catch (e) {
      error({ message: "House rule post not found" });
    }
    return { post };
  },
  components: [Tabs],
  head(){
    return {
      title: `${this.post.title} | 4 Shame Not Honor`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Learn more about the Roudgara Campaign's house rules",
        }
      ],
    }
  }
}
</script>
