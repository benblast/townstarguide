<template>
  <div>
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
    <v-btn style="background: #636853; color: #ffffff!important; width: 15rem; display: flex; margin: 0 auto; margin-top: 1rem;" to="/strats">
      Back to Strategies
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Endgame',
  components: {  },
  data: () => ({
    cards: [
      {
        pic: require('../../assets/ingame/products/icon_uniforms.png'),
        head: 'Uniforms',
        text: "A town dedicated to producing large amounts of Uniforms.",
        link: '/strats/uniforms'
      },
      {
        pic: require('../../assets/ingame/products/icon_wool.png'),
        head: 'Blue Steel',
        text: `How to make the elusive Blue Steel? Here's an example.`,
        link: '/strats/bluesteel'
      },
      {
        pic: require('../../assets/ingame/products/icon_wineBottle.png'),
        head: 'Wine',
        text: "A more recent classic; the Wine strategy.",
        link: '/strats/wine'
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
  margin-top: 5rem;
  width: 55%;
  padding: 1rem;
  border-radius: 25px;
}

.theRow {
  display: flex;
  justify-content: space-evenly;
}

.theCard {
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 15rem;
  margin-bottom: 3rem;
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

</style>
