<template>
  <div>
    <h1 style="display: flex; justify-content: center; color: #ffd70099">
      Buildings
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

            <template v-for="(item, i) in activeItem">
              <div style="width: 100%;" :key="i" v-if="i === 'Class' || i === 'BuildCost' || i === 'DestroyCost' || i === 'Crafts' || i === 'EdgeRequirements' || i === 'LaborCost' || i === 'ProximityEmit' || i === 'ProximityDist'">
                <ul style="list-style: none; display: flex; flex-direction: row; width: 100%;">
                  <li style="width: 50%; text-align: right; margin: 0 1rem;">{{ i }}</li>
                  <li style="color: gold; width: 50%; text-align: left; margin: 0 1rem; word-break: break-all">{{ item }}</li>
                </ul>
              </div>

            </template>
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
              <h2 style='font-size: 2rem; margin: 0; margin-top: 1rem' class='amatic'>
                {{ card.head }}
              </h2>
              <v-divider class='mx-5 mb-3'></v-divider>
              <div class="building-types">
                <template v-for="(item, i) in building">
                  <template v-if="item.Class === card.head && item.InStore">
                    <div @click="dialog = true; activeItem = item" :key="i" class="buildingButton">
                      <p style="font-size: 1rem;">
                        {{ i }}
                      </p>
                    </div>
                  </template>
                  <template v-else-if="item.Class === card.head && item.Class === 'BlockChain' && item.BlockChainID.slice(-1) === '0'">
                    <div @click="dialog = true; activeItem = item" :key="i" class="buildingButton">
                      <p style="word-break: keep-all; font-size: 1rem;">
                        {{ i }}
                      </p>
                    </div>
                  </template>

                </template>
              </div>
              <v-divider class='mx-5 my-3'></v-divider>

            </div>
          </div>
        </template>

      </div>
    </v-card>
    <v-btn style="background: #636853; color: #ffffff!important; width: 15rem; display: flex; margin: 0 auto; margin-top: 1rem; margin-bottom: 3rem;" to="/kbase">
      Back to Knowledge Base
    </v-btn>
  </div>
</template>

<script>
import { buildings } from "../assets/reqs/buildings"
export default {
  name: 'KbaseBuildings',
  components: {  },
  data: () => ({
    building: buildings,
    dialog: false,
    activeItem: {},
    cards: [
      {
        pic: require('../assets/ingame/buildings/icon_farmHouse.png'),
        head: 'Farm',
      },
      {
        pic: require('../assets/ingame/buildings/icon_ranchHouse.png'),
        head: 'Ranch',
      },
      {
        pic: require('../assets/ingame/buildings/icon_pasture.png'),
        head: 'Terrain',
      },
      {
        pic: require('../assets/ingame/buildings/icon_workerHouse.png'),
        head: 'Industrial',
      },
      {
        pic: require('../assets/ingame/buildings/icon_tradeDepot.png'),
        head: 'Trade',
      },
      {
        pic: require('../assets/ingame/buildings/icon_farmBot.png'),
        head: 'BlockChain',
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
div {
  font-family: "Grotesk", Helvetica, sans-serif;
  font-size: 1.2rem;
}
.bigCard {
  display: flex;
  flex-direction: column;
  margin: 3rem 2rem 0 2rem;
  padding: 1rem;
  border-radius: 25px;
  word-break: keep-all;
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
  margin-bottom: 1rem;
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

.buildingButton {


  cursor: pointer;
}
.buildingButton:hover {
  color: gold;
}

.building-types {
  width: 100%;

}

@media (max-width: 1200px) {


  .theRow {
    flex-direction: column;
    align-items: center;
  }
  .bigCard {
    align-items: center;
    margin: 5rem 0 0 0;
    padding: 0;

  }

  .building-types {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .buildingButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 3rem;
    margin: 1rem;
    word-break: break-word!important;
  }
  .buildingButton p {
    margin: 0;
    font-size: 1.3rem!important;

  }
  .theCard {
    margin: 0 0 7rem 0!important;
    max-width: 100%;
  }
}
</style>
