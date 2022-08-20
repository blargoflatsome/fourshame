<template lang="pug">
main
  section
    div(class="w-full bg-gray-dark flex justify-center items-center text-white font-bold" style="height:200px") SPLASH IMAGE / VIDEO
    div(class="flex flex-col my-10 space-y-5 lg:flex-row lg:space-x-10 lg:space-y-0")

      div(id="twitch" class="flex flex-col justify-between justify-end p-3 border text-center rounded-sm flex-1")
        h2 Twitch.tv/4ShameNotHonor
        p A brutal, persistant, homebrew world with lovely and lively players and a drunk dungeon master; what more could you ask for?!
        
        div(class='flex justify-center flex-row space-x-4 py-2')    
          a(href="https://www.paypal.me/4Shame" target="_blank"  class="btnSecondary w-full") $upport Us
          a(href="https://www.twitch.tv/4shamenothonor" target="_blank"  class="btnSecondary w-full") Watch Us
                
        a(href="https://www.twitch.tv/subs/4shamenothonor" target="_blank" class="btn w-full") Subscribe
     
      div(id="discord" class="flex flex-col justify-between justify-end p-3 border text-center rounded-sm flex-1")
        h2 Discord
        p Want to know us better? Join our discord!
        ul
          li Stay informed
          li Provide feedback
          li Chat with us midweek
        a(href="" target="_blank" class="btn") Join Our Discord
     
      div(id="newsletter" class="flex flex-col justify-between justify-end p-3 border text-center rounded-sm flex-1")
        h2 Join Our Newsletter
        p We may not know what to do with it yet, but someday you'll be happy you did!          
        input(type='email' placeholder="Enter Your Email" class="border w-full p-2 mb-4") 
        button(type="submit" class="btn w-full") Submit
    
    
    Players
    
    div(class="flex flex-col my-10 space-y-5 lg:flex-row lg:space-x-10 lg:space-y-0")
      div(id="merch" class="flex flex-col justify-between justify-end p-3 border text-center rounded-sm flex-1")
        h2 Merchandise
        p To help fund our efforts, new equipment, upkeep subscriptions, etc we have also created a 4shameNotHonor store on teespring! If you don't see anything you like, feel free to request something on our Discord Serve!
        a(href="https://4-shame-not-honor.creator-spring.com" target="_blank" class="btn") Buy Stuff
        
      div(id="partners" class="flex flex-col justify-between justify-end p-3 border text-center rounded-sm flex-1")
        h2 Partnership With RolePositiveGaming
        p Speaking of new friends, and helping our stream grow, we have joined our community with the very talented people over on RolePositiveGaming. Kayla is now a player in their Friday game, and both Jordan and Kayla play in the Monday game.
        p You should absolutely check them out!
        a(href="https://www.twitch.tv/rolepositivegaming" target="_blank" class="btn") RolePositiveGaming
</template>

<script>
import Players from '@/components/global/players.vue'

export default {
  name: "Homepage",
  components: {
    Players,
  },
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("site", 'info').fetch();
    } catch (e) {
      error({ message: "Homepage posts not found" });
    }
    
    return { posts };
  },
  head(){
    return {
      title: `4 Shame Not Honor`,
      meta: [
        {
          hid: 'og:description',
          name: 'og:description',
          content: "We are a homebrew D&D twitch stream"
        }
      ]
    }
  }
}
</script>