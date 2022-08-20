<template lang="pug">
div
  header(id='top' class="p-3 bg-black border-b-4 border-accent-dark")
    div(class="container m-auto flex text-white items-center justify-start ")
      Nav(class="mr-5")      
      nuxt-link(to="/")
        img(src="@/assets/images/4-shame-not-honor-logo.png" alt="4 Shame Logo")      

  div(class="container m-auto py-5 p-3")
    nuxt(keep-alive)
    
  footer(class="p-3 border-t-4 border-b-4 border-accent-dark bg-gray-100")
    div(class="container m-auto flex space-x-4 text-sm")
      div(class="mr-auto") © 2022 4 Shame Not Honor LLC
        div(class="flex space-x-3 mt-2")
          a(href="https://www.facebook.com/4shamenothonor/") 
            img(src="../assets/social-icons/facebook.png" alt="Facebook" width="20")
          a(href="https://www.instagram.com/4shamenothonor/") 
            img(src="../assets/social-icons/instagram.png" alt="Instagram" width="20")
          a(href="https://www.twitch.tv/4shamenothonor") 
            img(src="../assets/social-icons/twitch.png" alt="Twitch" width="20")
          a(href="https://www.paypal.me/4Shame")
            img(src="../assets/social-icons/paypal.png" alt="Support Us" width="20")
      div(data-netlify-identity-button) 

      div
        strong Support Us
        ul(class="text-xs")
          li
            a(href="https://www.paypal.me/4Shame") Donate
</template>

<script>
import Nav from "@/components/global/nav.vue";

// div(data-netlify-identity-menu)

export default {
  name: "App",
  components: { Nav }
};
</script>
