<template lang="pug">
div
  div(
      @click="open=!open"
      class="trigger cursor-pointer"
      :class="{'isOpen':open}"
  )
      slot(name="trigger")
  transition(name="slidedown")
      .reveal(
          v-if="open"
          :class="{'p-2':padding}"
      )
          slot
</template>

<script>
export default {
  name: "Collapse",
  props: {
    defaultOpen: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: false
    };
  },
  created() {
    this.open = this.defaultOpen;
  }
};
</script>

<style scoped>
.slidedown-enter-active,
.slidedown-leave-active {
  transition: max-height 0.25s ease-in-out;
}

.slidedown-enter-to,
.slidedown-leave-from {
  overflow: hidden;
  max-height: 600px;
}

.slidedown-enter-from,
.slidedown-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
