<template lang="pug">
main
  div(
    class="w-full flex flex-col md:flex-row space-y-5 px-4 lg:px-0 justify-center items-center py-4 bg-accent-base"
  )
    div
      img(src="/img/hp-banner-1.png" width="617" height="283" class="w-full h-auto")
    div
      img(src="/img/hp-banner-2.png" width="597" height="281" class="w-full h-auto")
  section
    div(class="flex flex-col my-10 space-y-5 lg:flex-row lg:space-x-10 lg:space-y-0")

      div(
        id="twitch" 
        class="flex flex-col justify-between justify-end p-3 text-center flex-1"
        style="background: url(/img/twitch.png);background-repeat: no-repeat;"
      )
        p(class="header") Twitch
        
        p A brutal, persistant, homebrew world with lovely, lively players and a drunk dungeon master
        p What more could you ask for?!
        
        div(class='flex flex-col justify-center py-2 space-y-4 md:space-y-0  md:space-x-4 md:flex-row')    
          a(href="https://www.paypal.me/4Shame" target="_blank"  class="btnSecondary w-full whitespace-nowrap") $upport Us
          a(href="https://www.twitch.tv/4shamenothonor" target="_blank"  class="btnSecondary w-full whitespace-nowrap") Watch Us
                
        a(href="https://www.twitch.tv/subs/4shamenothonor" target="_blank" class="btn w-full") Subscribe To Twitch
     
      div(
        id="discord" 
        class="flex flex-col justify-between justify-end p-3 text-center flex-1"
        style="background: url(/img/discord.png);background-repeat: no-repeat;"
      )
        p(class="header") Discord
        div 
          p Want to know us better? Join our discord!
          ul(class="mx-auto max-w-max")
            li.text-left Stay informed
            li.text-left Provide feedback
            li.text-left Chat with us midweek
        a(href="https://discord.gg/WVkMgSvRFR" target="_blank" class="btn") Join Our Discord
     
      div(
        id="newsletter" 
        class="flex flex-col justify-between justify-end p-3 text-center flex-1"
        style="background: url(/img/envelope.png);background-repeat: no-repeat;"
      )
        span(class="header mt-3") Newsletter
        span(class="sub") Lend us your email! 
        p We may not know what to do with it yet, but someday you'll be happy you did!          
        div
          // Begin Mailchimp Signup Form
          #mc_embed_signup
            form#mc-embedded-subscribe-form.validate(action='https://app.us9.list-manage.com/subscribe/post?u=809f5475c3f22aab5ed40b7b2&id=749d814914&f_id=007609e1f0' method='post' name='mc-embedded-subscribe-form' target='_blank')
              #mc_embed_signup_scroll
                div(class="md:flex my-2")
                  div(class="w-full md:w-2/3")
                    input#mce-EMAIL(type='email' value='' name='EMAIL' required placeholder="Email Address *" class="border w-full p-1 rounded")
                    span#mce-EMAIL-HELPERTEXT.helper_text
                  div(class="flex-shrink")
                      a(href='http://eepurl.com/h9d75D' title='Mailchimp - email marketing made easy and fun')
                        img(src='https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg')
                #mce-responses.clear.foot
                  #mce-error-response.response(style='display:none')
                  #mce-success-response.response(style='display:none')
                // real people should not fill this in and expect good things - do not remove this or risk form bot signups
                div(style='position: absolute; left: -5000px;' aria-hidden='true')
                  input(type='text' name='b_809f5475c3f22aab5ed40b7b2_749d814914' tabindex='-1' value='')
                input#mc-embedded-subscribe(type='submit' value='Join Our Newlsetter' name='subscribe' class="btn w-full")
          // End mc_embed_signup

    div(class="p-3 my-10 border-t-2 border-b-2 rounded")
      p(class="header") The Roudgara Campaign
      p Our main campaign has been running since 2019 and exists in an entirely homebrewed world.
      p(class="font-bold") Checkout the following pages to help catch up!
      ul
        li
          router-link(to="/general/the-roudgara-campaign") The plot so far
        li
          router-link(to="/timeline/2022-06-16t15-40-38-831z-campaign") Campaign Timeline
        li
          router-link(to="/characters") The cast of PCs and NPCs

    Players

    div(class="p-3 my-10 border-t-2 border-b-2 rounded")
      p(class="header") 4ShameNotHonor LLC
      p Kayla and Jordan formed the 4ShameNotHonor LLC after our Sunday D&amp;D game gained enough attention on twitch to go affiliate during the onset of the pandemic. Thankfully, we have managed to keep it going even as we all had to return to work and resume normal schedules. Give or take a few cast changes along the way.
      p We are excited to see our stream grow, but mostly we just enjoy the opportunity it has given us to enjoy Sunday evenings with our friends and to make new ones.
    
    
    div(class="flex flex-col my-10 space-y-5 lg:flex-row lg:space-x-10 lg:space-y-0")
      div(id="merch" class="flex flex-col justify-between justify-end p-3 text-center flex-1")
        p(class="header") Merchandise
        p To help fund our efforts, new equipment, upkeep subscriptions, etc we have also created a 4shameNotHonor store on teespring!
        a(href="https://4-shame-not-honor.creator-spring.com" target="_blank" class="m-auto")
          img(src="/img/merchandise-banner.jpg" alt="Buy Merch!" class="border")        
        p(class="text-sm") (If you don't see anything you like, feel free to request something on our 
          a(href="https://discord.gg/WVkMgSvRFR" target="_blank") Discord Server!
          | )
        a(href="https://4-shame-not-honor.creator-spring.com" target="_blank" class="btn") Buy Stuff
        
      div(id="partners" class="flex flex-col justify-between justify-end p-3 text-center flex-1")
        p(class="header") Partnership With Role Positive Gaming
        div
          p We have joined our community with the very talented people over at RolePositiveGaming! 
          p
            span(class="font-bold") The Weight of Tears
            br 
            | Every Monday at 4pm(pst)
          p
            span(class="font-bold") Strixhaven
            br
            | Every Friday at 4pm(pst)          
        div(class="flex-1")
        div(class="flex space-x-2")
          a(href="https://www.twitch.tv/rolepositivegaming" target="_blank" class="btn w-full") Watch on Twitch
          a(href="https://www.youtube.com/watch?v=G2ajz6GrlN0" target="_blank" class="btn w-full") Catch up on Youtube
        
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