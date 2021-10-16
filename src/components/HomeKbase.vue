<template>
  <!--FIRST card START-->
  <div>
    <div class="firstCardWrapper">
      <v-card class="firstCard" rounded>
        <v-card-text class="cardContent">
          <h1 class='firstCardTitle'>
            Products
          </h1>
          <p>
            See stats on everything from Sugarcane to Blue Steel!
          </p>
          <v-btn class="goButton" to="/kbase/products">GO TO PRODUCTS</v-btn>
        </v-card-text>
        <v-divider
            dark
            inset
            vertical
            style="margin: 1rem 0"
        ></v-divider>
        <v-card-text class="firstCardSide">
          <v-img
              src="../assets/ingame/products/icon_uniforms.png"
              alt="uniforms"
              contain
          />
        </v-card-text>
      </v-card>
    </div>
    <div class="firstCardWrapper">
      <v-card class="firstCard" rounded>
        <v-card-text class="cardContent">
          <h1 class='firstCardTitle'>
            Buildings
          </h1>
          <p>
            Need stats on a specific building? Go here!
          </p>
          <v-btn class="goButton" to="/kbase/buildings">GO TO BUILDINGS</v-btn>
        </v-card-text>
        <v-divider
            dark
            inset
            vertical
            style="margin: 1rem 0"
        ></v-divider>
        <v-card-text class="firstCardSide">
          <v-img
              src="../assets/ingame/buildings/icon_windmill.png"
              alt="a windmill"
              contain
          />
        </v-card-text>
      </v-card>
    </div>
  </div>
  <!--FIRST card END-->
</template>

<script>
export default {
  name: 'HomeKbase',
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

.goButton {
  background: #636853!important;
}
h1, h2, h3 {
  font-family: "Grotesk", Helvetica, sans-serif;
  color: moccasin!important;
}
p, ul, li {
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-family: "Grotesk", Helvetica, sans-serif;
}

.firstCardWrapper {
  display: flex;
  margin: 1rem 1rem 0 1rem;
  height: 12rem;
}

.firstCard {
  display: flex;
  width: 100%;
}

.cardContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.firstCardTitle {
  color: moccasin;
  font-weight: 800;
  line-height: 3rem;
  font-size: 2.5rem;
}

.firstCardSide {
  display: flex;
  justify-content: center;
  padding: 0;
  width: 30%;
}

@media (max-width: 1400px) {

  .firstCardSide {
    display: none;
  }
}

@media (max-width: 700px) {
  .firstCardWrapper {
    width: 90vw;
  }
  .firstCard {
    display: flex;
    flex-direction: column;
  }
  .firstCardTitle {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  .firstCardSide {
    display: none;
  }
  .cardContent {
    padding: 1rem;
  }
}
</style>
