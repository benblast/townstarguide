<template>

  <div class="gamegrid">

  </div>

</template>

<script>

export default {
  name: 'Strategies',
  components: {  },
  data: () => ({
    cards: [
      {
        pic: require('../assets/ingame/buildings/icon_farmer.png'),
        head: 'Beginner',
        text: "Are you new to Town Star? Start here!",
        link: '/strats/beginner'
      },
      {
        pic: require('../assets/ingame/products/icon_wool.png'),
        head: 'Start-Up',
        text: " Learn about strategies to build up your Town quickly.",
        link: '/strats/startup'
      },
      {
        pic: require('../assets/ingame/products/icon_blueSteel.png'),
        head: 'End Game',
        text: "Check some examples of End Game strategies.",
        link: '/strats/endgame'
      },
      {
        pic: require('../assets/ingame/products/icon_crudeOil.png'),
        head: 'Gas Strats',
        text: `Learn how to make Gasoline and how to fit it into your Town.`,
        link: '/strats/gas'
      }
    ]
  })
}

</script>

<style scoped>

.gamegrid {
  margin: 0 auto;
  height: 50rem;
  width: 50rem;
  background-color: green;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(16, 1fr);
}

</style>
