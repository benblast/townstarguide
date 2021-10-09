<template>
  <!--FIRST card START-->
  <div class="firstCardWrapper">
    <v-card class="firstCard" rounded>
      <v-card-text class="cardContent">
        <h1 class='firstCardTitle mb-3'>
          Level up your gameplay
        </h1>
        <br>
        <p>
          Struggling to reach the top of the leaderboards? Look no further, TownBlaster will help your gameplay reach new heights.
        </p>
        <p>
          TownBlaster has everything. The strats, the tricks, the stats.
        </p>
        <ul>
        <li>
          Check out <router-link to="/strats">Strategies</router-link> to get info on good starts, end game builds and other goodies.
        </li>
          <li>
            Need to know the stats of a product or a building? Head on over to our <router-link to="/kbase">Knowledge Base</router-link>!
          </li>
          <li>
            The latest <router-link to="/changelog">Changelogs</router-link> are available for you to check on the current meta!
          </li>
          </ul>
        <v-btn to="/strats" style="background: #636853; float: right">
          Go to Strategies
        </v-btn>
      </v-card-text>
      <v-divider
          dark
          inset
          vertical
          style="margin: 1rem 0 1rem 0"
      ></v-divider>
      <v-card-text class="firstCardSide">
        <v-img
            contain
            src="../assets/ingame/buildings/icon_windmill.png"
            alt="a windmill"
        />
      </v-card-text>
    </v-card>
  </div>
  <!--FIRST card END-->
</template>

<script>
export default {
  name: 'FirstCard',
  data: () => ({
    hello: true
  }),
  methods: {
    async postApi() {

    }
  }
}
</script>

<style scoped>
h1, h2, h3 {
  font-family: "Grotesk", Helvetica, sans-serif;
  color: moccasin!important;
  margin-bottom: 15px;
  margin-top: 10px;
}
p, ul, li {
  font-size: 1.3rem;
  line-height: 2rem;
  font-family: "Grotesk", Helvetica, sans-serif;
}
a {
  text-decoration: none;
  color: #636853;
  filter: brightness(150%);
}
a:hover {
  filter: brightness(250%);
  text-decoration: underline;
}
.firstCardWrapper {
  display: flex;
  justify-content: space-between;
}

.firstCard {
  display: flex;
  flex-direction: row;
  margin: 1rem auto;
}

.cardContent {
  padding: 2rem;
}

.firstCardTitle {
  color: moccasin;
  font-weight: 800;
  line-height: 2rem;
  font-size: 3.5rem;
}

.firstCardSide {
  display: flex;
  justify-content: center;
  padding: 0;
  width: 22rem;
}

@media (max-width: 600px) {
  .firstCard {
    display: flex;
    flex-direction: column;
    max-height: fit-content;
  }
  .firstCardTitle {
    font-size: 2rem;
    line-height: 2rem;
  }
  .firstCardSide {
    display: none;
  }
  .cardContent {
    padding: 1rem;
  }
}
</style>
