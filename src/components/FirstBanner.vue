<template>
  <!--FIRST card START-->
  <div class="firstCardWrapper">
    <v-card class="firstCard" rounded>
      <v-card-text class="cardContent">
        <h3>
          COMMERCIALS
        </h3>
        <v-divider class='my-3'></v-divider>
        <v-img class="bannerImg" src="../assets/ingame/buildings/icon_sandMine.png" />
        <v-divider class='my-3'></v-divider>
        <p style="color: #FFd70099">
          Want to be seen here?
        </p>
        <v-divider class='my-3'></v-divider>
      </v-card-text>
    </v-card>
  </div>
  <!--FIRST card END-->
</template>

<script>
export default {
  name: 'FirstBanner',
  data: () => ({
    prices: {
      eth: 0,
      gala: 0,
      town: 0
    }
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
  font-size: 1.2rem;
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
  height: 25rem;
}

.firstCard {
  display: flex;
  flex-direction: column;
  width: 100% !important;
  height: 100%;
}

.cardContent {
  padding: 2rem 2rem 0 2rem;

}

.firstCardTitle {
  color: moccasin;
  font-weight: 800;
  line-height: 3rem;
  font-size: 3.5rem;
}

.firstCardSide {
  display: flex;
  justify-content: center;
  padding: 0;
}
@media (max-width: 1400px) {
  .firstCardWrapper {
    margin: 0;
    height: auto;
  }
  .bannerImg {
    margin: 0 auto;
    max-height: 20rem;
    max-width: 20rem;
  }
}

</style>
