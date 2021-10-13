<template>
  <v-hover v-slot="{ hover }" style="margin: 1rem 1rem 0 0;">
    <v-carousel
        hide-delimiter-background
        :show-arrows="false"
        :cycle="!hover"
        interval=5000
        height="25rem"
        class="nftCarousel"
    >
      <v-carousel-item
          v-for="(item, i) in slides"
          :key="i"
      >
        <v-sheet
            :color="colors[i]"
            class="fill-height"
            style="padding: 2rem; display: flex; justify-content: center;"
        >

            <router-link :to="item.link">
              <div class="nftInfo">
                <div class="nftText">
                  <h1 class="fonten specialSauceText">
                    {{ item.name }}
                  </h1>
                  <p>{{ item.descr }}</p>
                </div>
                <v-img
                    :src="item.url"
                    eager
                    class="nftImg"
                />
              </div>
            </router-link>

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
        descr: "Blast past everyone else with these tips and tricks.",
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
}
.nftCarousel {
}

.nftInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff99;
  font-size: 1.2rem;
  width: 100% !important;
  height: 100% !important;
}

.nftImg {

}

.nftText {
}
a:hover {
  filter: brightness(80%);
}

@media (max-width: 1300px) {

  .nftCarousel {
    width: 100% !important;
  }

  .fonten {
    font-size: 2rem;
  }

  .nftInfo {

  }
  .nftImg {
    display: none;
  }
}
@media (max-width: 700px) {
  .nftCarousel {
    max-width: 100vw!important;
  }
}
</style>
