<template lang="pug">
div
    div(class="relative md:flex md:space-x-4")
      ul(class="hidden list-none md:block m-0 p-0 sticky top-4 self-start text-sm pr-2 border-r rounded")
        li(class="font-bold whitespace-nowrap pb-1 mb-1 border-b border-accent-dark") Table of Contents
        li(
          v-on:click="goto('top')"
          class="cursor-pointer pl-2 pb-1 mb-1 border-b border-accent-dark rounded hover:text-accent-dark") Top
        li(
            v-for="(tab) in level2"                
            :key="tab.id"
            v-on:click="goto(tab.id)"
            class="cursor-pointer pl-2 pb-1 mb-1 border-b border-accent-dark rounded hover:text-accent-dark"            
        ) {{ tab.text }}
      div
        slot
        
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
