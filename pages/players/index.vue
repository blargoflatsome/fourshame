<template lang="pug">
main
  section( v-if="posts" class="w-full max-w-5xl mx-auto")
    h1( class="title") The Cast of 4ShameNotHonor
    div(class="cards grid grid-cols-2 gap-4")
      div(
        v-for="(post,index) in posts" 
        :key="index"
        class="card"
      )
        img(v-if="post.thumbnail" :src='post.thumbnail' width="200" height="200" class="border-4 border-accent-dark")
        div(class="flex-col my-4 md:my-0 md:ml-4 leading-snug")
          h2(class="card-title") {{ post.title || post.name }}
          nuxt-content(:document="post")
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
