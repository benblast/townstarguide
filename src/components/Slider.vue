<template>
  <v-hover v-slot="{ hover }">
    <v-carousel
        hide-delimiters
        :cycle="!hover"
        interval=5000
        height="50vh"
        class="nftCarousel"
    >
      <v-carousel-item
          v-for="(item, i) in slides"
          :key="i"
      >
        <v-sheet
            :color="colors[i]"
            height="50vh"
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <router-link :to="item.link">
              <div class="nftInfo">
                <div class="nftText" style="margin-right: 1rem">
                  <h1 class="fonten specialSauceText">
                    {{ item.name }}
                  </h1>
                  <p>{{ item.descr }}</p>
                </div>
                <v-img
                    :src="item.url"
                    width="10rem"
                    height="10rem"
                    eager
                    style="margin-left: 1rem"
                />
              </div>
            </router-link>

          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-hover>

</template>

<script>
export default {
  name: 'Slider',

  data: () => ({
    colors: [
      'rgba(18, 51, 43, 0.4)',
      'rgba(123, 71, 128, 0.4)',
      'rgba(59, 128, 112, 0.4)',
      'rgba(51, 44, 21, 0.4)',
      'rgba(51, 23, 13, 0.4)',
    ],
    slides: [
      {
        name: 'Changelog',
        url: require("../assets/ingame/buildings/icon_nuclearEngineer.png"),
        descr: 'Latest changelogs displaying the current meta.',
        link: '/changelog'
      },
      {
        name: 'Gas Troubles?',
        url: require("../assets/ingame/products/icon_crudeOil.png"),
        descr: "This oil is not for cookin'!",
        link: '/strats/gas'
      },
      {
        name: 'Quick Starts',
        url: require("../assets/ingame/buildings/icon_windPump.png"),
        descr: "Blast past everyone else with these trips and tricks.",
        link: '/strats/startup'
      },
      {
        name: 'Knowledge',
        url: require("../assets/ingame/buildings/icon_cakery.png"),
        descr: "Need info on particular crafts and buildings?",
        link: '/kbase'
      }
    ]
  }),
}
</script>

<style scoped>

.fonten {
  font-family: "Grotesk", monospace, sans-serif;
  font-size: 4rem;
  line-height: 4rem;
  z-index: 2!important;
}
.nftCarousel {
  width: 100%;
}

.displayer {
  width: 100%;
}

.nftInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff99;
}

.nftInfo img {
  z-index: 0;
}

.nftText {
  max-width: 25vh;
}
</style>
