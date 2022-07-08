<template lang="pug">
div
  ul(
    ref="tabBar"
    class="z-50 font-bold text-center w-full text-sm leading-tight lg:flex lg:text-base lg:border-b-2" 
    :class="{ 'fixed top-0 left-0 mt-0 bg-gray-lighter border-b  lg:container lg:m-auto lg:border-gray-light lg:shadow-md lg:left-auto ': isFixed, 'mt-5 border-gray-lighter ': !isFixed }"
  )
    li(
      v-if="isFixed"
      v-on:click="slideTo('app')"
      class="flex items-center py-2 px-3 cursor-pointer lg:py-1"
      style="margin-bottom: -2px;"
    ) Top
    li(
      v-for="(tab,index) in tabs"
      :key="tab.id"
      v-on:click="slideTo(tab.id)"
      class="flex items-center py-2 px-3 cursor-pointer lg:py-1"
      :class="{'bg-accent-dark border-b-2 border-accent-light text-white': active==tab.id}"
      style="margin-bottom: -2px;"
    ) {{ tab.title }}

  slot
</template>

<script>
export default {
  name: "Tabs",
  props: {
    tabs: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isFixed: false,
      scrollY: 0,
      stickyTop: 0,
      active: null
    };
  },
  created() {
    this.active = this.tabs[0].id;
  },
  mounted() {
    this.stickyTop = this.$refs.tabBar.offsetTop;

    this.$nextTick(() => {
      // Listen to sticky the top bar
      window.addEventListener("scroll", () => {
        this.scrollY = Math.round(window.scrollY);
      });

      // Check if we should fix the top bar now
      const yPos = Math.round(window.scrollY);
      this.shouldBeFixed(yPos);
    });
  },
  watch: {
    scrollY(newVal) {
      // if (this.stickyTop <= 0) return false;
      this.shouldBeFixed(newVal);
    }
  },
  methods: {
    shouldBeFixed(yPos) {
      if (yPos > this.stickyTop) this.isFixed = true;
      else this.isFixed = false;
    },
    slideTo(id) {
      this.active = id;
      const myEl = document.getElementById(id);
      const barH = -Math.abs(this.$refs.tabBar.offsetHeight + 50);
      this.$smoothScroll({
        scrollTo: myEl,
        offset: barH
      });
    }
  }
};
</script>
