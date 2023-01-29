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
              :src="require('./assets/coinblaster_3.png')"
              contain
              class="logoimg"
          />
        </div>
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
