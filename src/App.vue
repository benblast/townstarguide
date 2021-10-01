<template>
  <v-app dark>
    <v-app-bar
        app
        height="100%"
        class="appBar"
        dark
    >
      <div class="logoWrapper">
        <div class="logo">
          <v-img
              :src="require('./assets/warning-tape.png')"
              contain
              class="logoimg"
          />
        </div>

        <h2 class="logoText">
          TownBlaster
        </h2>
      </div>

      <v-tabs
          centered
          color="grey darken-1"
          class=""
      >
        <v-tab
            v-for="(item, i) in tabs"
            :key="i"
            :to="item.to"
            :icon="item.icon"
            class="menu-tabs"
        >
          <div class="">
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

      <div class="spacer" />

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
        icon: 'mdi-tower-fire',
        title: 'Home',
        to: '/',
      },
      {
        icon: 'mdi-skull-crossbones-outline',
        title: 'Strategies',
        to: '/strats',
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
.menu-tabs {
  width: 15rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
}

.logoText {
  font-size: 3rem;
  color: #636853;
  filter: brightness(150%);
  margin-left: -5rem;
  margin-top: 1rem;
}

.logo {
  display: flex;
  margin-top: 3rem;
  width: 20rem;
}
.title {
  font-size: 1.2rem;
  color: #FFFFFF88;
  font-family: 'Grotesk Bold', Helvetica, sans-serif;
}
.logoimg {

}

.spacer {
  width: 37rem;
}
</style>
