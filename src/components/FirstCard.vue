<template>
  <!--FIRST card START-->
  <div class="firstCardWrapper">
    <v-card class="firstCard" rounded>
      <v-card-text class="cardContent">
        <div>
          <h3>
            WELCOME
          </h3>
          <v-divider class='my-3'></v-divider>
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
          </ul>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h1 class='firstCardTitle' style="text-transform: uppercase; text-align: center;">
            Level up<br>your gameplay
          </h1>
          <v-btn class="theButton" to="/strats" style="background: #636853;">
            Go to Strategies
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
  <!--FIRST card END-->
</template>

<script>
export default {
  name: 'FirstCard',
  data: () => ({

  })
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
  font-size: 1rem;
  font-family: "Grotesk", Helvetica, sans-serif;
  line-height: 1.2rem;
}

a {
  text-decoration: none;
  color: #636853;
}

a:hover {
}

.firstCardWrapper {
  display: flex;
  align-items: center;
  height: 25rem;
}

.firstCard {

  display: flex;
  flex-direction: column;
  height: 25rem;
  width: 100%;
}

.cardContent {
  padding: 2rem;
  display: flex;
  height: 25rem;
  flex-direction: column;
  justify-content: space-between;
}

.firstCardTitle {
  color: moccasin;
  font-weight: 800;
  font-size: 2rem;
  line-height: 2rem;
}

.firstCardSide {
  display: flex;
  justify-content: center;
  padding: 0;
}
@media (max-width: 1600px) {
  p, ul {
    line-height: 1rem;
  }
}

@media (max-width: 1400px) {
  .firstCardWrapper {
    height: 20rem;
  }
  .firstCard {
    height: 20rem;
  }
  .firstCardTitle {
    font-size: 1.4rem;
  }
  .theButton {
    font-size: 0.6rem;
    width: 8rem;
  }
}
@media (max-width: 700px) {
  .firstCard {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .firstCardWrapper {
    height: auto;
  }
  .firstCardTitle {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .firstCardSide {
    display: none;
  }
  .cardContent {
    padding: 1rem;
    height: auto;
  }
}
</style>
