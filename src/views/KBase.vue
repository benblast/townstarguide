<template>
  <div>
    <h1 style="display: flex; margin-top: 1rem; justify-content: center; color: #ffd700; font-size: 3rem;">
      Knowledge Base
    </h1>
    <v-card class='bigCard'>

      <div class='theRow'>

        <template v-for='(card, i) in cards'>
          <div :key='i' class='theCard mx-5'>
            <div class='top'>
              <div class='circle'>
                <v-img :src='card.pic' contain></v-img>
              </div>
            </div>
            <div class='mid'>
              <h2 style='color: moccasin; font-size: 2rem; margin-top: 1rem' class='amatic'>
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
  name: 'KBase',
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
      },
      {
        pic: require('../assets/kbase/shade.png'),
        head: 'Prox Fx',
        text: "Shade, Wind Block, Pollution.",
        link: '/kbase/proximity'
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
