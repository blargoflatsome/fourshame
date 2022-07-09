<template>
  <main>
    <section v-if="post">
      <article>
        <h1 class="">{{ post.title }}</h1>
        <nuxt-content :document="post" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("articles", params.article).fetch();
    } catch (e) {
      error({ message: "Articles post not found" });
    }
    return { post };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }
  }
}
</script>
