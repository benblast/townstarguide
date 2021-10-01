<template>
  <div>
    <h1 style="display: flex; justify-content: center; color: #ffffff99; font-size: 3rem;">
      Knowledge Base
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
              <h2 style='color: grey; font-size: 2rem; margin-top: 0.3rem' class='amatic'>
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
  name: 'Starting Strats',
  components: {  },
  data: () => ({
    cards: [
      {
        pic: require('../assets/ingame/buildings/icon_constructionSite.png'),
        head: 'Buildings',
        text: `Learn all about the different buildings in Town Star.`,
        link: '/kbase/buildings'
      },
      {
        pic: require('../assets/ingame/products/icon_bread.png'),
        head: 'Products',
        text: "All products and their stats are listed here.",
        link: '/kbase/products'
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
