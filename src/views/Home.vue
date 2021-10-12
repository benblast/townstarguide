<template>
  <div style='display: grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; grid-template-areas: "a a b b c c" "e d d d d f"; width: 100%; margin: 0 auto; font-family: "Grotesk", Helvetica, sans-serif;'>
    <SecondCard style="grid-area: a; margin-right: 1rem!important;"/>
    <Slider style="grid-area: b"/>
    <div style="grid-area: c; box-sizing: border-box">
      <HomeKbase/>
    </div>
    <FirstBanner style="grid-area: e"/>
    <FirstCard style="grid-area: d"/>
    <SecondBanner style="grid-area: f"/>
  </div>
</template>

<script>
import FirstCard from '../components/FirstCard'
import Slider from '../components/Slider'
import SecondCard from '../components/SecondCard'
import HomeKbase from "../components/HomeKbase"
import FirstBanner from "../components/FirstBanner"
import SecondBanner from "../components/SecondBanner"
export default {
  components: {
    FirstCard,
    Slider,
    SecondCard,
    HomeKbase,
    FirstBanner,
    SecondBanner
  },
  data: () => ({
    hello: true
  }),
  methods: {

  }
}
</script>

<style scoped>

</style>
