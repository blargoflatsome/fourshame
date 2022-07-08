<template lang="pug">
blockquote(
  class="relative m-auto font-bold text-sm text-center p-8 my-10 border-l-4 border-accent-fade rounded-lg" 
  :class="{'hasAuthor':$slots.author}"
  style="max-width: 800px;"
)
    <slot></slot>
    cite(v-if="$slots.author" class="author block text-right text-gray-base")
        <slot name="author"></slot>
</template>

<script>
export default {
  name: "Blockquote",
}
</script>

<style scoped>
.author:before {
  content: "\2015";
  font-family: "Noto Sans", sans-serif;
  padding-right: 1rem;
}

blockquote.hasAuthor:after {
  content: "\201D";
  color: theme("colors.accent.fade");
  font-family: "Sanchez", serif;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 4rem;
  font-style: italic;
  line-height: 3rem;
}

blockquote:not(.hasAuthor):before {
  content: "A Note: ";
  font-weight: bold;
}
</style>
