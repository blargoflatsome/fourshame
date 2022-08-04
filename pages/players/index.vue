<template lang="pug">
main
  section( v-if="posts" class="w-full max-w-5xl mx-auto")
    h1( class="title") The Cast of 4ShameNotHonor
    div(class="grid gird-cols-1 md:grid-cols-2 gap-4 md:p-3")
      div(
        v-for="(post,index) in posts" 
        :key="'players-'+index"
        class="md:flex p-4"
      )        
          div(v-if="post.thumbnail" class="md:rounded md:border-r-2 md:border-black md:pr-2" style="width:100px;height:auto;")
              img(v-if="post.thumbnail" :src='post.thumbnail' width="280" height="280" class="w-full h-auto")
          div(class="flex flex-col flex-1 my-4 md:my-0 md:ml-4 leading-snug")
              h2(class="card-title mb-0 border-b-2 border-black") {{ post.title || post.name }}        
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
