<template>
  <div>
    <h1 style="margin-top: 1rem; display: flex; justify-content: center; color: #ffd70099; font-size: 3rem;">
      BEGINNER STRATEGIES
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
              <h2 style='color: moccasin; font-size: 2rem; margin-top: 1rem'>
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
    <v-btn style="display: flex; justify-content: center; width: 15rem; margin: 1rem auto; background: #636853" to="/strats">BACK TO STRATS</v-btn>
  </div>

</template>

<script>
export default {
  name: 'NewPlayerStrategies',
  components: {  },
  data: () => ({
    cards: [
      {
        pic: require('../../assets/ingame/buildings/icon_truck.png'),
        head: 'New Player',
        text: "From zero to hero - begin here!",
        link: '/strats/newplayer'
      },
      {
        pic: require('../../assets/ingame/buildings/icon_refinery.png'),
        head: 'Improving Fast',
        text: "Focusing on production efficiency and expansion.",
        link: '/strats/improving'
      },
      {
        pic: require('../../assets/ingame/products/icon_sugar.png'),
        head: 'Sugar Bump!',
        text: "Check some examples of End Game strategies.",
        link: ''
      },
      {
        pic: require('../../assets/ingame/buildings/icon_pond.png'),
        head: 'Power of the Ponds',
        text: "Water is awesome. Ponds are made of water. They are also awesome.",
        link: ''
      }
    ]
  })
}
</script>

<style scoped>
div {
  font-family: "Grotesk", Helvetica, sans-serif;
  font-size: 1.3rem;
}
.bigCard {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 3rem;
  width: 75vw;
  padding: 1rem;
  padding-bottom: 5rem;
  border-radius: 25px;
}

.theRow {
  display: flex;
  justify-content: center;
  margin-bottom: -2rem;
}

.theCard {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 25%;
}

.top {
  display: flex;
  justify-content: center;
}

.mid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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

@media (max-width: 800px) {
  .theRow {
    flex-direction: column;
    align-items: center;
  }
  .bigCard {
    margin: 7rem 0 3rem 0;
    width: 100%;
    align-items: center;
  }
  .theCard {
    margin-bottom: 7rem;
    width: 100%;
  }
}

</style>
