<template>
  <div>
    <h1 style="display: flex; justify-content: center; color: #ffffff99; font-size: 3rem;">
      Products
    </h1>
    <div style="display: flex; justify-content: center">
      <v-dialog
          v-model="dialog"
          width="500px"
      >
        <v-card>
          <v-card-title style="display: flex; justify-content: center">
            <span class="text-h5">{{ activeItem.Name }}</span>
          </v-card-title>
          <v-card-text style="display: flex; flex-direction: column; justify-content: center; align-items: center">

            <v-img :src="getFullUrl(activeItem.FileUrl)" class="mb-3">
            </v-img>

            <div style="display: flex; width: 100%; justify-content: center">
              <div style="display: flex; flex-direction: column; justify-content: center; width: 9rem;">

                <div class="key">City Points</div>
                <div class="key">City Price</div>

                <div class="key">Req1</div>

                <div class="key">Req2</div>
                <div class="key">Req3</div>
                <div class="key">Time1</div>
                <div class="key">Time2</div>
                <div class="key">Time3</div>
                <div class="key">Time4</div>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; width: 9rem;">
                <div class="gold">{{ activeItem.CityPoints }}</div>
                <div class="gold">{{ activeItem.CityPrice }}</div>

                <div class="gold">{{ activeItem.Value1 }} {{ activeItem.Req1 }}</div>
                <div class="gold">{{ activeItem.Value2 }} {{ activeItem.Req2 }}</div>
                <div class="gold">{{ activeItem.Value3 }} {{ activeItem.Req3 }}</div>
                <div class="gold">{{ activeItem.Time0 }}</div>
                <div class="gold">{{ activeItem.Time1 }}</div>
                <div class="gold">{{ activeItem.Time2 }}</div>
                <div class="gold">{{ activeItem.Time3 }}</div>

              </div>
            </div>

          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

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
              <v-divider class='mx-5 mb-3 mt-5'></v-divider>
              <div class="building-types">
                <template v-for="(item, i) in recipes">

                  <v-tooltip right nudge-left="150" :key="i">
                    <template v-slot:activator="{ on, attrs }">
                      <div v-bind="attrs" v-on="on" @click="dialog = true; activeItem = item" :key="i" class="buildingButton">
                        {{ i }}
                      </div>
                    </template>
                    <div style="display: flex; justify-content: center; flex-direction: column; margin: 0;">
                      <div>City Points</div><div style="color: gold;">{{ item.CityPoints }}</div>
                      <div>City Price</div><div style="color: gold;">{{ item.CityPrice }}</div>
                      <div>Reqs</div>
                      <div style="color: gold;">{{ item.Value1 }} {{ item.Req1 }}</div>
                      <div style="color: gold;">{{ item.Value2 }} {{ item.Req2 }}</div>
                      <div style="color: gold;">{{ item.Value3 }} {{ item.Req3 }}</div>
                    </div>
                  </v-tooltip>
                </template>
              </div>
            </div>
          </div>
        </template>

      </div>
    </v-card>
    <v-btn style="background: #636853; color: #ffffff!important; width: 15rem; display: flex; margin: 0 auto; margin-top: 3rem;" to="/kbase">
      Back to Knowledge Base
    </v-btn>
  </div>
</template>

<script>
import { recipes } from "../assets/reqs/recipes"
export default {
  name: 'KbaseProducts',
  components: {  },
  data: () => ({
    recipes: recipes,
    dialog: false,
    activeItem: {},
    cards: [
      {
        pic: require('../assets/ingame/products/icon_wheat.png'),
        head: 'Farm',
      }
    ]
  }),
  methods: {
    getFullUrl(path) {
      return `https://townstar.sandbox-games.com/launch/${path}`;
    }
  }
}
</script>

<style scoped>
.key {

  text-align: right;
  margin-right: 0.5rem;
}
.gold {
  color: gold;
  margin-left: 0.5rem;
}
div {
  font-family: "Grotesk", Helvetica, sans-serif;
  font-size: 1.2rem;
}
.bigCard {
  display: flex;
  flex-direction: column;
  margin: 5rem 2rem 0 2rem;
  padding: 1rem;
  border-radius: 25px;
}

.theRow {
  display: flex;
  justify-content: space-between;
}

.theCard {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.top {

  margin: 0 auto;
}

.mid {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 15rem;
}

.circle {
  box-shadow: 0 0 15px 1px saddlebrown;
  background: #636853;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
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

.buildingButton {
  cursor: pointer;
  width: 33%;
}
.buildingButton:hover {
  color: gold;
}
.building-types {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  height: 30rem;
  width: 100%;
}
</style>
