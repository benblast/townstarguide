<template>
  <div style="width: 100%!important;">
    <div class="landingWrapper">
      <SecondCard class="secondCard" style="grid-area: a;"/>
      <Slider class="sliderCard" style="grid-area: b"/>
      <HomeKbase class="homeKbaseCard" style="grid-area: c;"/>
      <FirstBanner class="firstBannerCard" style="grid-area: e"/>
      <Updates style="grid-area: g"/>
      <FirstCard class="firstCard" style="grid-area: d;"/>
      <SecondBanner class="secondBannerCard" style="grid-area: f"/>
    </div>
  </div>
</template>

<script>
import FirstCard from '../components/FirstCard'
import Slider from '../components/Slider'
import SecondCard from '../components/SecondCard'
import HomeKbase from "../components/HomeKbase"
import FirstBanner from "../components/FirstBanner"
import SecondBanner from "../components/SecondBanner"
import Updates from "../components/Updates"

export default {
  components: {
    FirstCard,
    Slider,
    SecondCard,
    HomeKbase,
    FirstBanner,
    SecondBanner,
    Updates
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
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "a a b b c c" "e d d g g f";
  gap: 1rem;
  font-family: "Grotesk", Helvetica, sans-serif;
}

@media (max-width: 1400px) {
  .landingWrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto auto auto;
    grid-template-areas: "b b b" "a a a" "c c c" "e e e" "f f f" "d d d" "g g g";
  }

  .secondCard {
  }
}
</style>
