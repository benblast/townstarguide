<template>
  <!--Guide-->
    <v-card class="proxCard">
      <v-card-text style="margin: 0 auto">

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

        <h1 style="display: flex; justify-content: center; color: gold; margin: 0 auto;">Proximity Effects</h1>
        <p style="margin-top: 1rem;">
          TEST Probably the biggest “invisible” factor in Town Star, shade and wind block affect the game in a big way.
        </p>
        <p>
          Shade will affect crops negatively – giving them a longer production timer. The more houses that casts shade on an area, the longer the timer will become.
        </p>
      </v-card-text>

      <v-card-text class="shadez">
        <div style="width: 100%; grid-area: a; border: 1px solid grey; border-radius: 15px; padding: 15px;">
          <v-tabs
              v-model="tab"
              background-color="#63685399"
              slider-color="#ffd70099"
              style="border-radius: 16px; border-bottom-left-radius: 0; border-bottom-right-radius: 0;"
              grow
          >
            <v-tab
                v-for="(item, i) in proxies"
                :key="i"
                style="color: gold;"
            >
              {{ item.header }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="(item, i) in proxies"
                :key="i"
                transition="slide-x-transition"
                eager
                style="height:100%;"
            >
              <v-card
                  color="basil"
                  flat
                  style="display: flex; flex-direction: column; justify-content: flex-end;"
              >
                <div style="display: flex; justify-content: center; margin: 2rem auto; align-items: center; width: 15rem;">
                  <v-img :src="item.img" style="margin: 1rem" contain></v-img>
                </div>
                <v-card-text style="background-color: #55555599; border-radius: 15px;">
                  {{ item.descr }}
                </v-card-text>


              </v-card>

            </v-tab-item>
          </v-tabs-items>

        </div>

        <div style="grid-area: b; margin: 0 auto;">
          <div style="width: 100%; grid-area: a; border: 1px solid grey; border-radius: 15px; padding: 15px;">
            <v-tabs
                v-model="tab2"
                background-color="#63685399"
                slider-color="#ffd70099"
                style="border-radius: 16px; border-bottom-left-radius: 0; border-bottom-right-radius: 0;"
                grow
                hide-slider
            >
              <v-tab
                  v-for="(item, i) in sizeProx"
                  :key="i"
                  style="color: gold;"
              >
                {{ i }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab2">
              <v-tab-item
                  v-for="(item, i) in sizeProx"
                  :key="i"
                  transition="slide-x-transition"
                  eager
              >
                <v-card
                    flat
                >
                  <div style="width: 100%; height: 100%; padding: 1rem; display: flex; justify-content: center; align-items: center;">
                    <v-img :src="item" max-width="25rem" contain></v-img>
                  </div>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </div>

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
    tab: null,
    tab2: null,
    sizeProx: {
      small: require('../../assets/kbase/shade_1.png'),
      medium: require('../../assets/kbase/medium.png'),
      large: require('../../assets/kbase/shade_3.png'),
      huge: require('../../assets/kbase/shade_4.png')
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
        img: require('../../assets/ingame/buildings/icon_refinery.png')
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

.expansionImg {
  width: 13rem;
  height: 13rem;
}
.shadez {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "a a b b";
  gap: 1rem;
}

.ghoulButton {
  background: #636853!important;
  color: #ffffff!important;
  width: 15rem!important;
  margin: 1rem auto!important;
  display: flex!important;
}

.proxCard {
  width: 75vw;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 20px;
}

@media (max-width: 1400px) {
  .proxCard {
    width: 100%;
  }
}
@media (max-width: 1100px) {
  .shadez {
    overflow: hidden;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "a a" "b b";
  }
  .expansionImg {
    width: 9rem;
    height: 9rem;
  }
}
</style>
