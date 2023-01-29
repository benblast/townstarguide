<template>
  <div style="width: 100%!important;">
    <div class="landingWrapper">
      <TopLeftCard class="topLeftCard" style="grid-area: a;"/>
      <TopRightCard class="topRightCard" style="grid-area: b;"/>
      <BotLeftCard class="botLeftCard" style="grid-area: c;"/>
      <BotRightCard class="botRightCard" style="grid-area: d;"/>
    </div>
  </div>
</template>

<script>
import TopLeftCard from '../components/TopLeftCard.vue'
import TopRightCard from '../components/TopRightCard.vue'
import BotLeftCard from "../components/BotLeftCard.vue"
import BotRightCard from "../components/BotRightCard.vue"
export default {
  components: {
    TopLeftCard,
    TopRightCard,
    BotLeftCard,
    BotRightCard
  },
  data: () => ({
    hello: true
  }),
  methods: {

  }
}
</script>

<style scoped>

.landingWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
      "a b"
      "c d";
  font-family: "Grotesk", Helvetica, sans-serif;
}

@media (max-width: 1400px) {
  .landingWrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: "a a a" "b b b" "c c c" "d d d";
  }
}
</style>
