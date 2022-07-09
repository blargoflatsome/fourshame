<template lang="pug">
div
  header(class="flex items-center p-3 border-b-4 border-accent-dark")
    Nav(class="mr-5")
    div(class="flex w-full items-center justify-between")
      div
        nuxt-link(to="/")
          img(src="//res.cloudinary.com/dehtu15lz/image/upload/v1611894390/fourshame/website-logo-transp_litkda.png" alt="4 Shame Logo")
      div(class="flex justify-end space-x-3")
        a(href="https://www.facebook.com/4shamenothonor/") 
          img(src="../assets/social-icons/facebook.png" alt="Facebook" width="20")
        a(href="https://www.instagram.com/4shamenothonor/") 
          img(src="../assets/social-icons/instagram.png" alt="Instagram" width="20")
        a(href="https://www.twitch.tv/4shamenothonor") 
          img(src="../assets/social-icons/twitch.png" alt="Twitch" width="20")
        a(href="https://www.paypal.me/4Shame")
          img(src="../assets/social-icons/paypal.png" alt="Support Us" width="20")
  
  div(class="container my-5 p-3")
    nuxt(keep-alive)
    
  footer(class="p-3 border-t-4 border-accent-dark")
    div(class="container flex space-x-4 text-sm")
      div(class="mr-auto") © 2021 4 Shame Not Honor LLC
      div
        strong Support Us
        ul(class="text-xs")
          li
            a(href="https://www.paypal.me/4Shame") Donate
      div
        strong Follow Us
        ul(class="text-xs")
          li
            a(href="https://www.facebook.com/4shamenothonor/") Facebook
          li
            a(href="https://www.instagram.com/4shamenothonor/")  Instagram
          li
            a(href="https://www.twitch.tv/4shamenothonor")  Twitch

</template>

<script>
import Nav from "@/components/global/nav.vue";

export default {
  name: "App",
  components: { Nav }
};
</script>
