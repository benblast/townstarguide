<template>
  <!--FIRST card START-->
  <div style='display: flex; justify-content: space-between'>
    <v-card style="display: flex; flex-direction: row; margin: 0 auto;" max-height='30rem' class='mt-5' rounded>
      <v-card-text style="padding: 2rem;">
        <h1 class='mb-3' style="color: moccasin; opacity: 80%; font-weight: 800; font-size: 3.5rem">
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
        <v-btn style="background: #636853; float: right">
          Go to Strategies
        </v-btn>
      </v-card-text>
      <v-divider
          dark
          inset
          vertical
          style="margin: 1rem 0 1rem 0"
      ></v-divider>
      <v-card-text style="display: flex; justify-content: center; width: 40vh; padding: 0;">
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
  })
}
</script>

<style>

</style>
