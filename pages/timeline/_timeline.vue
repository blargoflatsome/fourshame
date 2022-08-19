<template lang="pug">
main
  section(v-if='post' id="timeline-wrapper")
    h1 {{ post.title }} Timeline
    article(class="timeline relative my-0 mx-auto")
      div(v-for="(event,index) in sortedData" :key="`year-${event.year}-${index}`")
        div(
          v-if="event.overview"                 
          class="year relative py-3 px-10 my-10 w-1/2"
          :class="position(event.majorEvent)"  
        )
          div(class="body z-10 relative py-5 px-6 border border-accent-dark rounded bg-white")
            div                                                                
              h2
                | {{event.year}}&nbsp;
                span(class="uppercase") {{event.era}}       

              div(class="text-black" v-html='$md.render(event.overview)')

        template(v-if="event.events")
          div(          
            v-for="(bullet,x) in sortByMonth(event.events)"
            :key="`event${bullet.month}`"
            class="year relative py-3 px-10 my-10 w-1/2"
            :class="position()"                          
          )
            div(
              v-if="bullet.body"
              class="body z-10 relative py-5 px-6 border border-accent-dark rounded bg-white" 
            )
              div(class="flex")
                h2(class="leading-none self-end m-0")
                  | {{event.year}}&nbsp;
                  span(class="uppercase") {{event.era}}    
                h3(class="ml-3 self-end leading-none") The {{ monthName(bullet.month) }} {{yearName(event.year)}} 
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
  computed: {  
    sortedData() {
      const aeYears = this.post.years.filter(({era})=>era=='ae').sort((a,b) => this.sortByYearAsc(a,b))
      const beYears = this.post.years.filter(({era})=>era=='be').sort((a,b) => this.sortByYearDesc(a,b))
      
      return aeYears.concat(beYears)
    }
  },
  methods: {
    sortByMonth(events) {
      return events.slice().sort((a,b)=>{return parseInt(a.month) < parseInt(b.month) ? 1 : -1})
    },
    sortByYearAsc(a,b) {
      const year1 = parseInt(a.year) 
      const year2 = parseInt(b.year)
      if(a.isMajorEvent) return 0
      if(b.isMajorEvent) return  -1
 
      if(year1 < year2) return 1

      return -1
    },
    sortByYearDesc(a,b) {
      const year1 = parseInt(a.year) 
      const year2 = parseInt(b.year)
      if(year1 == year2) {
        if(a.isMajorEvent) return 1
        if(b.isMajorEvent) return  0
        return 1
      }
 
      if(year1 > year2) return 1

      return -1
    },
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
    position(isMajorEvent) {
      if (isMajorEvent){
         eventCounter++;
         return { posCenter: true }
      }

      const count = eventCounter;
      eventCounter++;
      return {        
        posLeft: count % 2 == 0,
        posRight: count % 2 != 0,        
      };
    }
  }
}
</script>

<style scoped>
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

.year.posCenter {
  margin: auto;
}
.year.posLeft::before,
.year.posRight::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  border: medium solid theme("colors.black");
}

.year.posLeft {
  left: 0;
}
.year.posLeft:before {
  right: 30px;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent theme("colors.black");
}
.year.posRight {
  left: 50%;
}
.year.posRight:before {
  left: 30px;
  border-width: 10px 10px 10px 0;
  border-color: transparent #000 transparent transparent;
}
.year.posRight:after {
  left: -12px;
}
.year.posLeft:after,
.year.posRight:after {
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

.posLeft .text-pos {
  text-align: right;
}

.posRight .text-pos {
  text-align: left;
}

.posCenter .text-pos {
  text-align: center;
}

@media screen and (max-width: 600px) {
  #timeline-wrapper .timeline:after {
    left: 31px;
  }
  #timeline-wrapper .year {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
  #timeline-wrapper .year:before {
    left: 60px;
    right: auto;
    border: medium solid theme("colors.black");
    border-width: 10px 10px 10px 0;
    border-color: transparent #000 transparent transparent;
  }
  #timeline-wrapper .year.posLeft::after,
  #timeline-wrapper .year.posRight::after {
    left: 15px;
  }
  #timeline-wrapper .year.posRight {
    left: 0%;
  }
  
  #timeline-wrapper .posLeft .text-pos {
    text-align: left;
  }

  #timeline-wrapper .posRight .text-pos {
    text-align: left;
  }

  #timeline-wrapper .posCenter .text-pos {
    text-align: left;
  }
}
</style>
