<template lang="pug">
div
  div(id="top")
    ul(
      ref="tabBar"
      class="hidden md:flex sticky top-0 py-3 bg-white border-b-2 border-gray-lighter font-bold text-center text-sm leading-tight text-base w-full"
    )
      li(
        v-on:click="goto()"
        class="flex items-center py-2 px-3 cursor-pointer"
        style="margin-bottom: -2px;"
      ) Top
      li(
        v-for="(tab) in tabs"
        :key="tab.tabName"
        v-on:click="goto(tab.tabName)"
        class="flex items-center py-2 px-3 cursor-pointer"
        :class="{'bg-accent-dark border-b-2 border-accent-light text-white': active === tab.tabName}"
        style="margin-bottom: -2px;"
      ) {{ tab.tabName }}

    div(v-for="(tab,index) in tabs" :key="`body-${tab.tabName}`")
      div(:id="tab.tabName"  v-html='$md.render(tab.body)')
</template>

<script>
/**
 * ToDo
 * - Active Tab highlight
 */
export default {
  name: "Tabs",
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      active: null
    };
  },
  created() {
    this.active = this.tabs[0].id
  },
  mounted() {
    this.stickyTop = this.$refs.tabBar.offsetTop;
  },
  methods: {
    goto(id="top") {
      if(this.$route.hash === `#${id}`) return
      this.active = id
      this.$router.replace({ name: this.$route.name, hash: `#${id}` });          
    }
  }
}
</script>
