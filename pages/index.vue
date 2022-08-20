<template lang="pug">
main
  section
    div(v-html='$md.render(posts.content)')
  
    //- iframe(
    //-     src="https://player.twitch.tv/?channel=4shamenothonor&parent=fourshame.com&muted=true"
    //-     height="720"
    //-     width="1280"
    //-     allowfullscreen
    //- )
    
</template>

<script>

export default {
  name: "Homepage",
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("site", 'info').fetch();
    } catch (e) {
      error({ message: "Homepage posts not found" });
    }
    
    return { posts };
  },
  head(){
    return {
      title: `4 Shame Not Honor`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "We are a homebrew D&D twitch stream"
        }
      ]
    }
  }
}
</script>