<template>
  <main>
    <section v-if="post">
      <h1 class="">{{ post.title }}</h1>
      <article>
        <div v-for="year in post.years" :key="'year'+year.year">
          <h2 class="">{{ year.year }} {{ year.era }}</h2>
          <div class="mt-1 mb-4 text-primary-600 dark:text-primary-400" v-html="$md.render(year.overview)"></div>
          <div v-for="event in year.events" :key="'event'+event.month">
            <h3>{{event.month}}</h3>
            <div class="mt-1 mb-4 text-primary-600 dark:text-primary-400" v-html="$md.render(event.body)"></div>
          </div>
        </div>     
      </article>
      
      <pre>{{post}}</pre>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("timeline", params.timeline).fetch();
    } catch (e) {
      error({ message: "Timeline post not found" });
    }
    return { post };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
  }
}
</script>
