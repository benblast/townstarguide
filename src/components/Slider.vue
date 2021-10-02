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
          class="displayer"
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
            <div class="nftInfo">
              <div class="nftText">
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
              />
            </div>
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
        name: 'Gas Troubles?',
        url: require("../assets/ingame/products/icon_crudeOil.png"),
        descr: 'Who is talking about oil, bitch? You cookin?'
      },
      {
        name: 'Quick Starts',
        url: require("../assets/ingame/buildings/icon_windPump.png"),
        descr: "Blast past everyone else with these trips and tricks."
      },
      {
        name: 'Knowledge',
        url: require("../assets/ingame/buildings/icon_cakery.png"),
        descr: "Need info on particular crafts and buildings?"
      }
    ]
  }),
}
</script>

<style>
.fonten {
  font-family: "Grotesk", monospace, sans-serif;
  font-size: 4rem;
  line-height: 4rem;
  z-index: 2!important;
}
.nftCarousel {
  width: 100%;
}

.nftInfo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nftInfo img {
  z-index: 0;
}

.nftText {
  max-width: 25vh;
}
</style>
