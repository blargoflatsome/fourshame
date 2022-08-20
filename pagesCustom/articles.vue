<template lang="pug">
main
  section(v-if="posts")
    h1(class="title") {{pageTitle}}    
    div(class="w-full md:flex space-x-4")
      div
        posts(:posts="posts" :key="pageTitle" :pathPrefix="pageType")
      div(class="flex-1")
        nuxt(:key="$route.fullPath")
</template>

<script>
export default {
  name: "Articles",
  props: {
    pageTitle: {
      type: String,
      required: true,
      default: 'Articles'
    },
    pageType: {
      type: String,
      required: true,
      default: 'default'
    }
  },
  data: () => ({
    posts: []
  }),
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {    
    this.posts = await this.$content("articles").where({type: this.pageType}).sortBy({key: 'slug', direction: 'asc'}).fetch();
  },
  head(){
    let desc = ''
    switch(this.pageType){        
      case 'blog':
        desc = 'The 4ShameNotHonor blog is a place to gain DM tips, discover homebrew ideas, and get even more behind the scenes information.'
        break;
      case 'cosmology':
        desc = `Deep dive into the cosmology of Urroth.`
        break;
      case 'houserule':
        desc = `Discover the house rules that 4ShameNotHonor uses during play.`
        break;
      case 'location':
        desc = `Deep dive into the locations of Urroth.`
        break;
      default:
        desc = `Deep dive into the lore of Urroth.`
        break;
    }

    return {
      title: `${this.pageTitle} | 4 Shame Not Honor`,
      meta: [
        {
          hid: 'og:description',
          name: 'og:description',
          content: desc,
        }
      ]
    }
  }
}
</script>
