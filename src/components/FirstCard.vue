<template>
  <!--FIRST card START-->
  <div class="firstCardWrapper">
    <v-card class="firstCard" rounded>
      <v-card-text class="cardContent" style="text-align: center;">
        <h1 class='firstCardTitle'>
          Hi
        </h1>
        <p>
          Struggling to reach the top of the leaderboards? Look no further, TownBlaster will help your gameplay reach new heights.
        </p>
        <p>
          TownBlaster has everything. The strats, the tricks, the stats.
        </p>
        <ul style="list-style: none;">
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
        <v-btn to="/strats" style="background: #636853;">
          Go to Strategies
        </v-btn>
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
  margin-top: 1rem;
}

.firstCard {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25rem;
}

.cardContent {
  padding: 2rem;
}

.firstCardTitle {
  color: moccasin;
  font-weight: 800;
  line-height: 3rem;
  font-size: 3.5rem;
  display: flex;
  justify-content: center;
}

.firstCardSide {
  display: flex;
  justify-content: center;
  padding: 0;
  width: 12rem;
}

@media (max-width: 1400px) {
  p, ul, li {
    font-size: 1rem;
  }
}

@media (max-width: 700px) {


  .firstCardWrapper {
    width: 90vw;
    margin: 1rem;
  }
  .firstCard {
    width: 90vw;
    display: flex;
    flex-direction: column;
    height: auto;
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
