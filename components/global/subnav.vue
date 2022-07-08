<template lang="pug">
div
  ul(
      v-for="(route, index) in curRoute"
      :key="index"
      class="hidden text-sm border-t border-b px-3 py-1 rounded md:block"
  )
      li(class="font-bold") Table of Contents
      li(
          v-if="route.children.length > 0"
          v-for="child in route.children"
          :key="child.path"
      )
          router-link(
              :to="route.path+'/'+child.path"
              class="whitespace-nowrap"
              :class="{'active': $route.matched[1] && child.name == $route.matched[1].name}"
          ) {{ child.name }}
</template>

<script>
export default {
  name: "SubNav",
  computed: {
     curRoute() {
      return this.$router.options.routes.filter(
        (x) => x.path == this.$route.matched[0].path
      )
     }
  }
};
</script>

<style scoped>
.active::before {
  content: "[";
  margin-right: 0.5rem;
}
.active::after {
  content: "]";
  margin-left: 0.5rem;
}
</style>
