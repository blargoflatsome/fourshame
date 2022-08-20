<template lang="pug">
section( v-if="posts")
  h2 The Cast of 4ShameNotHonor
  div(class="grid gird-cols-1 lg:grid-cols-2 gap-4 lg:p-3")
    div(
      v-for="(post,index) in posts" 
      :key="'players-'+index"
      class="md:flex p-4"
    )        
        div(v-if="post.thumbnail" class="mx-auto md:ml-0 md:mr-3 lg:mr-0 lg:rounded lg:border-r-2 lg:border-black lg:pr-2" style="width:150px;height:auto;")
            img(v-if="post.thumbnail" :src='post.thumbnail' width="280" height="280" class="w-full h-auto")
        div(class="flex flex-col flex-1 my-4 lg:my-0 lg:ml-4 leading-snug")
            p(class="header") {{ post.name }}        
            nuxt-content(:document="post")
</template>

<script>
export default {
    name: "PlayersWidget",
    data() {
        return {
            posts: {},
        }
    },
    async fetch() {        
        this.posts = await this.$content("players").sortBy('name').fetch()
    },
}
</script>
