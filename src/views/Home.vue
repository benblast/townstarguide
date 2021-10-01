<template>
  <div>
    <Slider/>
    <v-btn @click="getLastWinner">Click</v-btn>
    {{ hello }}
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
  }),
  methods: {
    async getLastWinner() {
      const result = await fetch("https://townstar.sandbox-games.com/api/game/weekly", {
        "headers": {
          "accept": "application/msgpack",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/msgpack",
          "if-none-match": "W/\"181-iA07zr+C94U2RqFlMnOfU4bYsPY\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-gpc": "1",
          "access-control-allow-origin": "localhost",
          "x-sessionid": "6e6f96f0cc88ef6adf11e469e15d1947a1b1cf2b404e8ae6"
        },
        "referrer": "https://townstar.sandbox-games.com/launch/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
      });
      this.hello = result.data
    }
  }
}
</script>

<style>

</style>
