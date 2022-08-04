<template lang="pug">
nuxt-link(:to="`/characters/${post.slug}`")
    div(class="md:flex p-4")        
        div(class="md:rounded md:border-r-2 md:border-black md:pr-2" style="width:100px;height:auto;")
            img(v-if="post.thumbnail" :src='post.thumbnail' width="280" height="280" class="w-full h-auto")
        div(class="flex flex-col flex-1 my-4 md:my-0 md:ml-4 leading-snug")
            h2(class="card-title mb-0 border-b-2 border-black") {{ post.title || post.name }}        
            span(class="mt-2 text-black") {{ post.subtitle }}
</template>

<script>
// Look at using the picture element to make mobile look ok
export default {
    name: "CharacterCard",
    props: {
        post: {
            type: Object,
        },
    }
}
</script>