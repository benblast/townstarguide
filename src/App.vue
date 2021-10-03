<template>
  <v-app dark>
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
              :src="require('./assets/warning-tape.png')"
              contain
              class="logoimg"
          />
        </div>

        <div class="logoTextWrap">
          <h2 class="logoText">
            TownBlaster
          </h2>
        </div>

      </div>

      <v-tabs
          centered
          color="grey darken-1"
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
            >
              {{ item.icon }}
            </v-icon>
            <div class="title">{{ item.title }}</div>
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
.v-toolbar__content {
  padding: 0!important;
}
.logoTextWrap {
  height: 100%;

  display: flex;
  align-items: flex-end;
}
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
  font-size: 1rem;
}

h1, h2, h3 {
  font-family: "Grotesk", Helvetica, sans-serif;
  color: moccasin;
  margin-bottom: 15px;
  margin-top: 10px;
}

a, a:active, a:visited {
  text-decoration: none;
  color: #636853!important;
}

a:hover {
  filter: brightness(80%);
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

.logoText {

  margin: 0;
  font-size: 2.5rem;
  color: #ffd70099;
  filter: brightness(150%);
}

.logo {
  display: flex;
}
.title {
  font-size: 1.2rem;
  color: #FFFFFF88;
  font-family: 'Grotesk Bold', Helvetica, sans-serif;
}
.logoimg {
  margin-top: 3rem;
  margin-left: 1rem;
  width: 7rem;
}

.spacer {
  height: 100%;
  width: 33rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 2rem;
}

@media (max-width: 1200px) {
  .logoText {
    display: none;
  }

  .logoWrapper {
    width: 1rem;
  }

  .logo {
    width: 10rem;
  }
  .menu-tabs {
    width: auto;
  }
  .tab {

    width: 100%;
  }
  .title {
    font-size: 1rem;
  }
  .spacer {
    width: 1rem;
  }
}
</style>
