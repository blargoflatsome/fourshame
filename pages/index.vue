<template lang="pug">
main
  section
    h1(class="title text-center") 4Shame Not Honor!
    h2(class="subtitle text-center") Something something oops
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