<template>
  <div>
    <h1 style="display: flex; justify-content: center; color: #ffd70099; font-size: 3rem;">
      STRATEGIES
    </h1>
    <v-card class='bigCard'>

      <div class='theRow'>

        <template v-for='(card, i) in cards'>
          <div :key='i' class='theCard mx-5'>
            <div class='top'>
              <div class='circle'>
                <v-img :src='card.pic'></v-img>
              </div>
            </div>
            <div class='mid'>
              <h2 style='font-size: 2rem; margin-top: 1rem' class='amatic'>
                {{ card.head }}
              </h2>
              <v-divider class='mx-5 my-3'></v-divider>
              <p>
                {{ card.text }}
              </p>
              <v-divider class='mx-5 my-3'></v-divider>

              <v-btn style='background: #636853; color: #ffffff!important; font-size: 1rem; font-family: "Grotesk Bold", Helvetica, sans-serif;' :to="card.link">Go</v-btn>
            </div>
          </div>
        </template>

      </div>

    </v-card>
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
        pic: require('../assets/soon.png'),
        head: 'Start-Up',
        text: " Learn about strategies to build up your Town quickly.",
        link: ''
      },
      {
        pic: require('../assets/soon.png'),
        head: 'End Game',
        text: "Check some examples of End Game strategies.",
        link: ''
      }
    ]
  })
}
</script>

<style scoped>
.bigCard {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 3rem;
  width: 55%;
  padding: 1rem;
  padding-bottom: 5rem;
  border-radius: 25px!important;
}

.theRow {
  display: flex;
  justify-content: space-between;
  margin-bottom: -2rem;
}

.theCard {
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 15rem;
}

.top {
  display: flex;
  justify-content: center;
}

.mid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 15rem;
}

.circle {
  box-shadow: 0 0 15px 1px saddlebrown;
  background: #636853;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin-top: -3rem;
}

.mediumItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.v-divider--inset.v-divider--vertical {
  margin: 25px 0;
}
</style>
