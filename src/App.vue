<template>
  <v-app dark style="width: 100%!important;">
    <v-app-bar
        app
        height="100%"
        class="appBar"
        dark
        padding="0"
    >
      <div class="logoWrapper">
        <div class="logo">
          <v-img
              :src="require('./assets/tblogo_text.png')"
              contain
              class="logoimg"
          />
        </div>
      </div>

      <v-tabs
          fixed-tabs
          hide-slider
          slider-size="0px"
          color="grey darken-1"
          class="theMenu"
      >
        <v-tab
            v-for="(item, i) in tabs"
            :key="i"
            :to="item.to"
            :icon="item.icon"
            class="menu-tabs"
        >
          <div class="tab">
            <v-icon
                size="50"
                color="#FFFFFF99"
                style="margin-bottom: 0.3rem"
                class="tab-icon"
            >
              {{ item.icon }}
            </v-icon>
            <div class="menu-title">{{ item.title }}</div>
          </div>
        </v-tab>
      </v-tabs>

      <div class="spacer">
        <v-btn href="https://discord.gg/C7VAZrYAd3" style="height: 3rem; margin-bottom: 0.5rem; background: #636853; color: #ffffff!important;">
          Join Our Discord!
          <v-img src="./assets/ingame/buildings/icon_nuclearEngineer.png" width="80" style="margin-left: 1rem;"></v-img>
        </v-btn>
      </div>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'TownBlaster',

  data: () => ({
    tabs: [
      {
        icon: 'mdi-skull-crossbones-outline',
        title: 'Strategies',
        to: '/strats',
      },
      {
        icon: 'mdi-tower-fire',
        title: 'Home',
        to: '/',
      },
      {
        icon: 'mdi-campfire',
        title: 'Knowledge Base',
        to: '/kbase',
      }
    ]
  }),
};
</script>
<style>
.v-slide-group__prev {
  display: none!important;
}
</style>
<style scoped>

.menu-tabs {
  width: 15rem;
  padding-top: 0.75rem!important;
}

@font-face {
  font-family: "Grotesk";
  src: local("Grotesk"),
  url(./assets/fonts/hk-grotesk.medium.ttf) format("truetype");
}

@font-face {
  font-family: "Grotesk Bold";
  src: local("Grotesk"),
  url(./assets/fonts/hk-grotesk.bold.ttf) format("truetype");
}

body, html, p, li, ul, a {
  font-family: "Grotesk", Helvetica, sans-serif;
  font-size: 1.2rem;
}

h1, h2, h3 {
  font-family: "Grotesk", Helvetica, sans-serif;
  color: moccasin!important;
  margin-bottom: 15px;
  margin-top: 10px;
}

.appBar {
  height: 10vh;
}

ul {
  margin-bottom: 1rem;
}

.logoWrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: flex;
}

.menu-title {
  font-size: 1.2rem;
  color: #FFFFFF88;
  font-family: 'Grotesk Bold', Helvetica, sans-serif!important;
}

.logoimg {
  margin-top: 2.5rem;
  width: 28rem;
}

.spacer {
  height: 100%;
  width: 50rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 3rem;
}

@media (max-width: 1400px) {
  .appBar {
    width: 100%;
  }
  .logoWrapper {
    display: none;
  }
  .logo {
    width: 10rem;
  }
  .menu-tabs {
    width: auto;
  }
  .tab {
    width: auto;
  }
  .menu-title {
    font-size: 1rem;
  }
  .spacer {
    display: none;
  }
}

@media (max-width: 700px) {
  .menu-tabs {
    margin: 0 auto;
  }
  .tab {
    margin: 0;
  }
  .theMenu {
    margin: 0;
  }
  .menu-title {
    font-size: 12px!important;
  }
  .v-slide-group__prev {
    display: none !important;
  }
  .tab-icon {
    font-size: 2rem!important;
  }
  .tab {
  }
}
</style>
