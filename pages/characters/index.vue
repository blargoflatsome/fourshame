<template lang="pug">
main
  section( v-if="posts" class="w-full mx-auto")
    h1( class="title") Characters
    div(class="grid grid-cols-2 gap-4")
      div(
        v-for="(post,index) in posts" 
        :key="index"
      )
        div(class="flex")
          div(class="card-image border-4 border-accent-dark" style="width:200px;height:200px;")
            img(v-if="post.thumbnail" :src='post.thumbnail' width="200" height="200" class="w-full h-full")
            img(v-if="post.status == 'dead'" src="@/assets/images/dead-character-profile.jpg" width="200" height="200" class="w-full h-full")
          div(class="flex flex-col flex-1 my-4 md:my-0 md:ml-4 leading-snug")
            h2(class="card-title mb-0") {{ post.title || post.name }}
            h3(class="leading-none") {{ post.subtitle }}
            nuxt-link(type="button" :to="`/characters/${post.slug}`" class="btn mt-auto") Learn More

</template>

<script>
// Display cards of Characters
// Sort - PC's first, then Alive / Unknown, Dead, Then Alpha
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
