<template>
  <!--FIRST card START-->
  <div class="firstCardWrapper">
    <v-card class="firstCard" rounded>
      <v-card-text class="cardContent">
        <v-divider class='my-3'></v-divider>
        <h3>
          Gala Price
        </h3>
        <p style="color: #FFd70099; margin: 0!important;">
          ${{ prices.gala }}
        </p>
        <v-divider class='my-3'></v-divider>
        <h3>
          Ether Price
        </h3>
        <p style="color: #FFd70099">
          ${{ prices.eth }}
        </p>
        <v-divider class='my-3'></v-divider>
      </v-card-text>
    </v-card>
  </div>
  <!--FIRST card END-->
</template>

<script>
import axios from 'axios'
export default {
  name: 'SecondCard',
  data: () => ({
    prices: {
      eth: 0,
      gala: 0,
      town: 0
    }
  }),
  async mounted() {
    const result = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=gala&vs_currencies=usd')
    console.log(result.data)
    this.prices.gala = result.data.gala.usd
    const result2 = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    console.log(result2.data)
    this.prices.eth = result2.data.ethereum.usd
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
  margin: 1rem 1rem 0 1rem;
  height: 25rem;
}

.firstCard {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.cardContent {
  padding: 2rem;

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
