<template lang="pug">
nav
  div(@click="show=true" class="hamburger cursor-pointer")
    div
    div 
    div
  transition(name="slide")
    aside(v-if="show")
      div(class="fixed z-40 top-0 bottom-0 right-0 left-0 bg-black opacity-80" @click="show=false")
      div(class="menu p-5 z-50 w-1/2 md:w-1/3 lg:w-1/5 h-screen shadowbg-white border-r overflow-y-auto")
        div(class="flex items-center justify-between border-b") 
          span 
          div(@click="show=false" class="cursor-pointer") X
        ul(class="list-none ml-0")
          li(v-if="blogs.length > 0")
            Collapse(:defaultOpen="$route.matched[0] && 'blogs' == $route.matched[0].name")
              template(#trigger)
                span(class="inline-block text-action-light font-bold") Articles
              ul(class="mt-0 ml-2 text-sm list-none")
                li(v-for="page in blogs" :key="page.slug")
                  router-link(
                    :to="`/blogs/${page.slug}`"
                    class="whitespace-nowrap"
                    :class="{'active text-action-light': articleName == page.slug}"
                  ) {{ page.title }}       
          
          li(v-if="setting.length > 0")
            Collapse(:defaultOpen="$route.matched[0] && 'setting' == $route.matched[0].name")
              template(#trigger)
                span(class="inline-block text-action-light font-bold") The Setting
              ul(class="mt-0 ml-2 text-sm list-none")
                li(v-for="page in setting" :key="page.slug")
                  router-link(
                    :to="`/setting/${page.slug}`"
                    class="whitespace-nowrap"
                    :class="{'active text-action-light': articleName == page.slug}"
                  ) {{ page.title }}  
                li(v-if="locations.length > 0")
                  Collapse(:defaultOpen="$route.matched[0] && 'location' == $route.matched[0].name")
                    template(#trigger)
                      span(class="inline-block text-action-light font-bold") Locations
                    ul(class="mt-0 ml-2 text-sm list-none")
                      li(v-for="page in locations" :key="page.slug")
                        router-link(
                          :to="`/locations/${page.slug}`"
                          class="whitespace-nowrap"
                          :class="{'active text-action-light': articleName == page.slug}"
                        ) {{ page.title }}
                li
                  router-link(
                    to="/timeline/2022-06-16t15-40-38-831z-campaign" 
                    class="inline-block"              
                  ) Timeline 
          
          li
            Collapse(:defaultOpen="$route.matched[0] && ('roudgara-campaign' == $route.matched[0].name ||  'characters' == $route.matched[0].name)")
              template(#trigger)
                span(class="inline-block text-action-light font-bold") The Roudgara Campaign
              ul(class="mt-0 ml-2 text-sm list-none")                
                li
                  router-link(
                    to="/characters" 
                    class="inline-block"              
                  ) The Characters
                template(v-if="roudgaraCampaign.length > 0")                     
                  li(v-for="page in roudgaraCampaign" :key="page.slug")
                    router-link(
                      :to="`/roudgara-campaign/${page.slug}`"
                      class="whitespace-nowrap"
                      :class="{'active text-action-light': articleName == page.slug}"
                    ) {{ page.title }}
                           
                  
          li(v-if="houseRules.length > 0")
            Collapse(:defaultOpen="$route.matched[0] && 'houserules' == $route.matched[0].name")
              template(#trigger)
                span(class="inline-block text-action-light font-bold") House Rules
              ul(class="mt-0 ml-2 text-sm list-none")
                li(v-for="page in houseRules" :key="page.slug")
                  router-link(
                    :to="`/houserules/${page.slug}`"
                    class="whitespace-nowrap"
                    :class="{'active text-action-light': articleName == page.slug}"
                  ) {{ page.title }}   
</template>

<script>
/**
 * 
 * Nav should be 
 * Campaigns -> Roudgara / Characters / Story So Far
 * The Setting -> everything else
 * 
 */



import Collapse from "./collapse.vue";
export default {
  name: "Nav",
  components: { Collapse },
  data() {
    return {
      show: false,
      houseRules: null,
      cosmology: null,
      locations: null,
      blogs: null,
      general: null,
      setting: null,
      roudgaraCampaign: null,
    }
  },
  async fetch() {   
    // Convert this to a Promise.all     
    this.houseRules = await this.$content("articles").where({type: 'houserule'}).only(['slug','title']).sortBy('title').fetch()
    this.locations = await this.$content("articles").where({type: 'location'}).only(['slug','title']).sortBy('title').fetch()
    this.blogs = await this.$content("articles").where({type: 'blog'}).only(['slug','title']).sortBy('title').fetch()
    this.setting = await this.$content("articles").where({type: 'setting'}).only(['slug','title']).sortBy('title').fetch()
    this.roudgaraCampaign = await this.$content("articles").where({type: 'roudgara-campaign'}).only(['slug','title']).sortBy('title').fetch()
  },
  computed: {
    articleName() {
      return this.$route.params.article || null
    },
  },
  mounted(){
    console.log(this.$route)
  },
  watch:{
    $route (to, from){
        this.show = false;
    }
} 
};
</script>

<style scoped>
.hamburger div {
  width: 30px;
  height: 3px;
  background-color: #fff;
  margin: 6px 0;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  transition: left 0.5s ease-in-out;
  background: #3a3a3a;
  border-color: #3a3a3a;
  color: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
}

.active::before {
  content: "[";
  margin-right: 0.5rem;
}
.active::after {
  content: "]";
  margin-left: 0.5rem;
}

/* before the element is shown, start off the screen to the right */
.slide-enter-active,
.slide-leave-active {
  left: -100%;
}

.slide-enter-to {
  left: 0;
}
</style>
