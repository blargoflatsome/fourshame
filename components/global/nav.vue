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
          div Urroth
          div(@click="show=false" class="cursor-pointer") X
        ul
          li
            router-link(
              to="/timeline" 
              class="inline-block"              
            ) Timeline
          li About
          li PCs
          li NPCs 
          li
            Collapse
              template(#trigger)
                span(class="inline-block text-action-light font-bold") Setting Lore
              ul(class="mt-0 text-sm")                
                li
                  router-link(
                    to="/"
                    class="whitespace-nowrap"                    
                  ) Locations
                li
                  router-link(
                    to="/"
                    class="whitespace-nowrap"                    
                  ) Cosmology
          li
            Collapse
              template(#trigger)
                span(class="inline-block text-action-light font-bold") House Rules
              ul(class="mt-0 text-sm")
                li
                  router-link(
                    to="/"
                    class="whitespace-nowrap"                    
                  ) Altered Content
                li
                  router-link(
                    to="/"
                    class="whitespace-nowrap"                    
                  ) Combat Manuevers
</template>

<script>
import Collapse from "./collapse.vue";
export default {
  name: "Nav",
  components: { Collapse },
  data() {
    return {
      show: false,
    }
  },
};
</script>

<style scoped>
.hamburger div {
  width: 30px;
  height: 3px;
  background-color: #000;
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
