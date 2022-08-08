<template lang="pug">
div
    div(class="relative md:flex md:space-x-4")
      div
        slot
      ul(v-if="level2.length > 0" class="hidden md:block m-0 p-0 sticky top-4 self-start text-sm")
        li(class="font-bold whitespace-nowrap pb-1 mb-1 border-b border-accent-dark") Table of Contents
        li(
            v-for="(tab) in level2"                
            :key="tab.id"
            v-on:click="goto(tab.id)"
            class="cursor-pointer pb-1 mb-1 border-b border-accent-dark hover:text-accent-dark"            
        ) {{ tab.text }}
        
</template>

<script>
export default {
  name: "TOC",
  props: {
    toc: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    level2() {
      return this.toc ? this.toc.filter(({depth}) => depth === 2) : []
    },
  },
  methods: {
    goto(id="top") {
      if(this.$route.hash === `#${id}`) return
      this.$scrollTo(`#${id}`, 300, {
        offset: -60,
      })   
    }
  }
}
</script>
