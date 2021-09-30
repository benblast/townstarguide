<template>
  <div>
    <Slider/>
    <FirstCard/>
  </div>
</template>

<script>
import FirstCard from '../components/FirstCard'
import Slider from '../components/Slider'

export default {
  components: {
    FirstCard,
    Slider
  },
  data: () => ({
    hello: true
  })
}
</script>

<style>

</style>
