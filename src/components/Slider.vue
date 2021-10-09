<template>
  <v-hover v-slot="{ hover }" style="padding-bottom: 3rem;">
    <v-carousel
        hide-delimiters
        :cycle="!hover"
        interval=5000
        height="40vh"
        class="nftCarousel"
    >
      <v-carousel-item
          v-for="(item, i) in slides"
          :key="i"
          max-height="100%"
      >
        <v-sheet
            :color="colors[i]"
            height="40vh"
        >
          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <router-link :to="item.link">
              <div class="nftInfo">
                <div class="nftText" style="margin-right: 1.5rem">
                  <h1 class="fonten specialSauceText">
                    {{ item.name }}
                  </h1>
                  <p>{{ item.descr }}</p>
                </div>
                <v-img
                    :src="item.url"
                    min-width="15rem"
                    max-width="15rem"
                    eager
                    class="nftImg"
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
        url: require("../assets/ingame/buildings/icon_nuclearPower.png"),
        descr: 'Latest changelogs displaying the current meta.',
        link: '/changelog'
      },
      {
        name: 'Got Gas?',
        url: require("../assets/ingame/products/icon_crudeOil.png"),
        descr: "This oil is not for cookin'!",
        link: ''
      },
      {
        name: 'Quick Starts',
        url: require("../assets/ingame/buildings/icon_windPump.png"),
        descr: "Blast past everyone else with these trips and tricks.",
        link: ''
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
div {
  font-family: "Grotesk", Helvetica, sans-serif;
}
a {
  text-decoration: none;
}
.fonten {
  font-family: "Grotesk", monospace, sans-serif;
  font-size: 4rem;
  line-height: 4rem;
  color: #FFE4B5;
  text-decoration: underline #636853;
  margin-bottom: 1rem;
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
  font-size: 1.1rem;
}

.nftImg {
}

.nftText {
  max-width: 25vh;
}
a:hover {
  filter: brightness(80%);
}

@media (max-width: 600px) {

  .nftCarousel {
    width: 100% !important;
  }

  .nftInfo {

  }
  .nftImg {
    margin-top: 3rem;
    min-width: 5rem!important;
    max-width: 5rem!important;
  }
}
</style>
