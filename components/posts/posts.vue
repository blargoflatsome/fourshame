<template>
  <ul v-if="posts.length > 0" class="cards">
    <li
      v-for="(post, index) in posts"
      :key="index"
    >
      <nuxt-link
        :to="`/${pathPrefix}/${post.slug}`"
        class="card card--clickable"
      >
        <template>
          <span class="w-full">
            <span class="flex justify-between align-baseline">
              <h3 class="card-title">{{ post.title || post.name }}</h3>
              <h6
                v-if="post.createdAt"
                class="self-start inline-block mt-0 py-1 px-2 bg-gray text-white text-base font-medium rounded-sm whitespace-no-wrap"
              >{{ formatDate(post.createdAt) }}</h6>
            </span>
            <p v-if="post.description" class="mt-2">{{ post.description }}</p>
          </span>
        </template>
      </nuxt-link>
    </li>
  </ul>
  <p v-else class="max-w-5xl mx-auto">
    {{ amount > 1 ? 'Posts not found' : 'Post not found' }}
  </p>
</template>

<script>
  export default {
    name: 'Posts',
    props: {
      posts: {
        type: Array,
      },
      pathPrefix: {
        type: String,
      },
    },
    methods: {
      formatDate(dateString) {
        const date = new Date(dateString)
        return date.toLocaleDateString(process.env.lang) || ''
      },
    },
  }
</script>
