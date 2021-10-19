<template>
  <!--Guide-->
    <v-card class="proxCard">
      <v-card-text style="margin: 0 auto">

        <h1 style="display: flex; justify-content: center; color: gold; margin: 0 auto;">Proximity Effects</h1>
        <p style="margin-top: 1rem;">
          TEST Probably the biggest “invisible” factor in Town Star, shade and wind block affect the game in a big way.
        </p>
        <p>
          Shade will affect crops negatively – giving them a longer production timer. The more houses that casts shade on an area, the longer the timer will become.
        </p>

        <v-expansion-panels
            style="margin: 2rem 0;"
          focusable
        >
          <v-expansion-panel
              v-for="(item,i) in proxies"
              style="background: #63685399;"
              :key="i"
          >
            <v-expansion-panel-header>
              <h2 style="color: #ffd700; text-stroke: 0.5px black;">{{ item.header }}</h2>
            </v-expansion-panel-header>
            <v-expansion-panel-content style="padding-top: 1rem">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <p style="margin: 0">
                  {{ item.descr }}
                </p>
                <v-img :src="item.img" width="13rem" height="13rem" contain />
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-dialog
            v-model="dialog"
            width="500px"
        >
          <v-card>
            <v-card-title style="display: flex; justify-content: center">
              <span class="text-h5">{{ activeItem.Name }}</span>
            </v-card-title>
            <v-card-text style="display: flex; flex-direction: column; justify-content: center; align-items: center">
              <v-img :src="getFullUrl(activeItem.FileUrl)" class="mb-3" width="9rem">
              </v-img>
              <template v-for="(item, i) in activeItem">
                <div style="display: flex; width: 100%; justify-content: center" :key="i" v-if="i === 'Class' || i === 'BuildCost' || i === 'DestroyCost' || i === 'Crafts' || i === 'EdgeRequirements' || i === 'LaborCost' || i === 'ProximityEmit' || i === 'ProximityDist'">
                  <div style="display: flex; flex-direction: column; justify-content: center; width: 50%; text-align: right; margin-right: 0.5rem;" class="buildingOpenCard">
                    {{ i }}
                  </div>
                  <div style="color: gold; display: flex; flex-direction: column; justify-content: center; width: 50%; text-align: left; margin-left: 0.5rem;">
                    {{ item }}
                  </div>
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
      </v-card-text>
      <v-card-text style="display: flex; align-items: center; flex-direction: column;">
        <v-img :src="img" width="20rem"></v-img>
        <div>
          <v-btn @click="img = sizeProx.small">Small</v-btn>
          <v-btn @click="img = sizeProx.medium">Medium</v-btn>
          <v-btn @click="img = sizeProx.large">Large</v-btn>
          <v-btn @click="img = sizeProx.huge">Huge</v-btn>
        </div>
      </v-card-text>
    </v-card>
  <!--FIRST card END-->
</template>

<script>
import { recipes } from '../../assets/reqs/recipes'
import { buildings } from '../../assets/reqs/buildings'

export default {
  name: 'ProximityEffects',
  data: () => ({
    dialog: false,
    activeItem: {},
    recipes: recipes,
    buildings: buildings,
    sizeProx: {
      small: require('../../assets/logo.png'),
      medium: require('../../assets/kbase/medium.png'),
      large: require('../../assets/warning-tape.png'),
      huge: require('../../assets/tblogo_text.png')
    },
    img: require('../../assets/kbase/medium.png'),
    proxies: [
      {
        header: 'Shade',
        descr: `Shade will affect crops negatively – giving them a longer production timer. More buildings casting shade on an area means longer production timers for that area.`,
        img: require('../../assets/kbase/shade.png')
      },
      {
        header: 'Wind Block',
        descr: 'Wind block affects buildings such as the Wind Mill and Wind Turbine negatively – slowing down their production time. The more buildings that block wind around them, the longer time it will take to produce goods.',
        img: require('../../assets/ingame/buildings/icon_windTurbine.png')
      },
      {
        header: 'Pollution',
        descr: 'Buildings such as Refinery and Power Plant emit pollution which negatively affects crops, animals and water wells.',
        img: require('../../assets/ingame/buildings/icon_windTurbine.png')
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
  font-size: 1rem;
}

ul, li {
  margin-bottom: 1rem!important;
}

.ghoulButton {
  background: #636853!important;
  color: #ffffff!important;
  width: 15rem!important;
  margin: 1rem auto!important;
  display: flex!important;
}

.proxCard {
  width: 66vw;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 20px;
}

@media (max-width: 1400px) {
  .proxCard {
    width: 100%;
  }
}
</style>
