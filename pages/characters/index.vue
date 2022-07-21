<template lang="pug">
main
  section( v-if="posts" class="w-full max-w-5xl mx-auto")
    h1( class="title") Characters
    div(class="flex justify-evenly")
      div(
        v-for="(post,index) in posts" 
        :key="index"
        class="flex-1"
      )
        div(class="flex")
          img(:src='post.thumbnail' width="200" height="200" class="card-image  border-4 border-accent-dark")
          div(class="flex-col my-4 md:my-0 md:ml-4 leading-snug")
            h2(class="card-title") {{ post.title || post.name }}
            h3(class="leading-none") {{ post.subtitle }}
        div(class="flex-col")
          nuxt-content(:document="{ body: post.excerpt || post.body }" class="max-h-80 overflow-hidden")
          nuxt-link(type="button" :to="`/characters/${post.slug}`" class="btn mb-3 text-center block w-full") Learn More

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
