<template>
  <v-hover v-slot="{ hover }" style="margin-top: 1rem;">
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
        name: 'Proximity Effects',
        url: require("../assets/kbase/shade.png"),
        descr: "Shade/Windblock/Pollution, whatever you want to call it.",
        link: '/kbase/proximity'
      },
      {
        name: 'Newbie Guide',
        url: require("../assets/ingame/buildings/icon_windPump.png"),
        descr: "Are you new to Town Star? Start here!",
        link: '/strats/newplayer'
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

  max-width: 12rem;
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
</style>
