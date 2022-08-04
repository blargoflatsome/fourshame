<template lang="pug">
main
  section( v-if="posts")
    h1( class="title") The Characters of the Roudgara Campaign
    h2 The Main Cast
    div(class="grid gird-cols-1 md:grid-cols-2 gap-4 md:p-3")
      div(
        v-for="(post,index) in activePCs" 
        :key="'active-'+index"
      )
        CharacterCard(:post="post")

    h2(class="mt-4") NPC's of Note
    div(class="grid gird-cols-1 md:grid-cols-2 gap-4 md:p-3")
      div(
        v-for="(post,index) in NPCs" 
        :key="'active-'+index"
      )
        CharacterCard(:post="post")

    h2(class="mt-4") The Dead
    div(class="grid gird-cols-1 md:grid-cols-2 gap-4 md:p-3")
      div(
        v-for="(post,index) in deadPCs" 
        :key="'active-'+index"
      )
        CharacterCard(:post="post")
</template>

<script>
import CharacterCard from './characterCard.vue'

export default {
  components: {
    CharacterCard
  },
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("characters").fetch();
    } catch (e) {
      error({ message: "Character posts not found" });
    }
    return { posts };
  },
  computed: {
    activePCs() {
      return this.posts.filter(({type, status}) =>  type == 'pc' && status == 'alive')
    },
    deadPCs() {
      return this.posts.filter(({type, status}) => status == 'dead')
    },
    NPCs() {
      return this.posts.filter(({type}) =>  type == 'npc')
    }
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
