<template lang="pug">
main
  section(v-if='post')
    h1 {{ post.title }}
    article(class="players relative my-0 mx-auto")
      nuxt-content(:document="post")
</template>

<script>
let eventCounter = 0;
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("players", params.players).fetch();
    } catch (e) {
      error({ message: "Players post not found" });
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
