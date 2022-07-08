<template lang="pug">
main
  section(v-if='post')
    h1 {{ post.title }}
    article(class="timeline relative my-0 mx-auto")
      div(
        v-for="(event,index) in post.years.slice().reverse()" 
        :key="`year${event.year}`"
        class="year relative py-3 px-10 my-10 w-1/2"
        :class="position(event.type)"  
      )
         div(class="body relative py-5 px-6 border border-accent-dark rounded bg-white" :class="{'z-10': isActive != index}")
            div(
              @click="isActive = index" 
              class="text-right cursor-pointer"
            ) [ expand ]
              div(:class="{'fixed top-0 left-0 bottom-0 right-0 z-50 bg-white h-full overflow-y-scroll': isActive == index}") 
                div(:class="{'container p-3': isActive == index}")     
                  button(
                    v-if="isActive == index"
                    @click="isActive = null" 
                    type="button" 
                    class="z-20 float-right text-3xl mr-5 mt-3"
                  ) X            
                  div(v-if="event.title" class="text-xl font-bold" :class="{'text-pos': isActive != index}") {{event.title}}
                  h2(:class="{'text-pos': isActive != index}")
                    | {{event.year}}&nbsp;
                    span(class="uppercase") {{event.era}}                    
                  div(
                      v-for="(bullet,x) in event.events"
                      :key="`event${bullet.month}`"
                      :class="{'text-base': isActive == index, 'text-sm': isActive != index}"                             
                  )   
                    h3 The {{ monthName(bullet.month) }} {{yearName(event.year)}} 
                    div(class="text-black" v-html='$md.render(bullet.body)')
</template>

<script>
let eventCounter = 0;
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("timeline", params.timeline).fetch();
    } catch (e) {
      error({ message: "Timeline post not found" });
    }
    return { post };
  },
  data() {
    return {
      isActive: null
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    yearName(year) {
      const years = ["Thinker", "Shepherd", "Gatherer", "Hunter", "Warrior"];
      return years[year % years.length];
    },
    monthName(month) {
      // Make another one for yearName
      month = month - 1;
      const months = [
        "crimson",
        "blushing",
        "light blue",
        "white",
        "green",
        "silver",
        "red",
        "gold",
        "dark blue",
        "orange",
        "multi-colored",
        "purple"
      ]; // list 12 month names

      return months[month];
    },
    position(type) {
      if (type == "era") eventCounter++;
      const count = eventCounter;
      eventCounter++;

      return {
        left: type == "normal" && count % 2 == 0,
        right: type == "normal" && count % 2 != 0,
        center: type == "era"
      };
    }
  }
}
</script>

<style scoped>
/* Convert what you can to Tailwind and leave the complex stuff */
.timeline {
  max-width: 1200px;
}
.timeline:after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: theme("colors.black");
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
/* .year {
  background-color: inherit;
} */

.year.center {
  margin: auto;
}
.year.left::before,
.year.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  border: medium solid theme("colors.black");
}

.year.left {
  left: 0;
}
.year.left:before {
  right: 30px;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent theme("colors.black");
}
.year.right {
  left: 50%;
}
.year.right:before {
  left: 30px;
  border-width: 10px 10px 10px 0;
  border-color: transparent #000 transparent transparent;
}
.year.right:after {
  left: -12px;
}
.year.left:after,
.year.right:after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -14px;
  background-color: theme("colors.black");
  border: 4px solid theme("colors.accent.light");
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.left .text-pos {
  text-align: right;
}

.right .text-pos {
  text-align: left;
}

.center .text-pos {
  text-align: center;
}

@media screen and (max-width: 600px) {
  #app .timeline:after {
    left: 31px;
  }
  #app .year {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
  #app .year:before {
    left: 60px;
    right: auto;
    border: medium solid theme("colors.black");
    border-width: 10px 10px 10px 0;
    border-color: transparent #000 transparent transparent;
  }
  #app .year.left::after,
  #app .year.right::after {
    left: 15px;
  }
  #app .year.right {
    left: 0%;
  }
}
</style>
