

<template>
  <!--FIRST card START-->
  <div class="firstCardWrapper">
    <v-card class="firstCard" rounded>
      <h1 style="margin: 0; text-align: left; font-weight: bold; margin-top: -3rem; margin-bottom: -1rem; color: gold!important;">
        BIG SHITCOINZ
      </h1>
      <v-card class="priceCard">
        <div class="priceImg">
          <v-img :src="prices.xrp.image.small ? prices.xrp.image.small : ''" contain></v-img>
        </div>
        <div class="priceWrapper">
          <div>
            <div style="font-size: 0.8rem">
              Price
            </div>
            <div class="theCoinInfo">
              ${{ prices.xrp.market_data.current_price.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Change
            </div>
            <div class="theCoinInfo">
              {{ prices.xrp.market_data.price_change_percentage_24h }}%
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Low
            </div>
            <div class="theCoinInfo">
              ${{ prices.xrp.market_data.low_24h.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h High
            </div>
            <div class="theCoinInfo">
              ${{ prices.xrp.market_data.high_24h.usd }}
            </div>
          </div>
          <div style="margin-right: 3rem;">
            <div style="font-size: 0.8rem">
              Mcap
            </div>
            <div class="theCoinInfo">
              ${{ prices.xrp.market_data.market_cap.usd.toLocaleString('en') }}
            </div>
          </div>
        </div>
      </v-card>
      <v-card class="priceCard">
        <div class="priceImg">
          <v-img :src="prices.ada.image.small" contain></v-img>
        </div>
        <div class="priceWrapper">
          <div>
            <div style="font-size: 0.8rem">
              Price
            </div>
            <div class="theCoinInfo">
              ${{ prices.ada.market_data.current_price.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Change
            </div>
            <div class="theCoinInfo">
              {{ prices.ada.market_data.price_change_percentage_24h }}%
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Low
            </div>
            <div class="theCoinInfo">
              ${{ prices.ada.market_data.low_24h.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h High
            </div>
            <div class="theCoinInfo">
              ${{ prices.ada.market_data.high_24h.usd }}
            </div>
          </div>
          <div style="margin-right: 3rem;">
            <div style="font-size: 0.8rem">
              Mcap
            </div>
            <div class="theCoinInfo">
              ${{ prices.ada.market_data.market_cap.usd.toLocaleString('en') }}
            </div>
          </div>
        </div>
      </v-card>
      <v-card class="priceCard" style="margin-bottom: 0!important;">
        <div class="priceImg">
          <v-img :src="prices.matic.image.small ? prices.matic.image.small : ''" contain></v-img>
        </div>
        <div class="priceWrapper">
          <div>
            <div style="font-size: 0.8rem">
              Price
            </div>
            <div class="theCoinInfo">
              ${{ prices.matic.market_data.current_price.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Change
            </div>
            <div class="theCoinInfo">
              {{ prices.matic.market_data.price_change_percentage_24h }}%
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Low
            </div>
            <div class="theCoinInfo">
              ${{ prices.matic.market_data.low_24h.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h High
            </div>
            <div class="theCoinInfo">
              ${{ prices.matic.market_data.high_24h.usd }}
            </div>
          </div>
          <div style="margin-right: 3rem;">
            <div style="font-size: 0.8rem">
              Mcap
            </div>
            <div class="theCoinInfo">
              ${{ prices.matic.market_data.market_cap.usd.toLocaleString('en') }}
            </div>
          </div>
        </div>
      </v-card>
      <v-card class="priceCard" style="margin-bottom: 0!important;">
        <div class="priceImg">
          <v-img :src="prices.sol.image.small ? prices.sol.image.small : ''" contain></v-img>
        </div>
        <div class="priceWrapper">
          <div>
            <div style="font-size: 0.8rem">
              Price
            </div>
            <div class="theCoinInfo">
              ${{ prices.sol.market_data.current_price.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Change
            </div>
            <div class="theCoinInfo">
              {{ prices.sol.market_data.price_change_percentage_24h }}%
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Low
            </div>
            <div class="theCoinInfo">
              ${{ prices.sol.market_data.low_24h.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h High
            </div>
            <div class="theCoinInfo">
              ${{ prices.sol.market_data.high_24h.usd }}
            </div>
          </div>
          <div style="margin-right: 3rem;">
            <div style="font-size: 0.8rem">
              Mcap
            </div>
            <div class="theCoinInfo">
              ${{ prices.sol.market_data.market_cap.usd.toLocaleString('en') }}
            </div>
          </div>
        </div>
      </v-card>
      <v-card class="priceCard" style="margin-bottom: 0!important;">
        <div class="priceImg">
          <v-img :src="prices.link.image.small ? prices.link.image.small : ''" contain></v-img>
        </div>
        <div class="priceWrapper">
          <div>
            <div style="font-size: 0.8rem">
              Price
            </div>
            <div class="theCoinInfo">
              ${{ prices.link.market_data.current_price.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Change
            </div>
            <div class="theCoinInfo">
              {{ prices.link.market_data.price_change_percentage_24h }}%
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Low
            </div>
            <div class="theCoinInfo">
              ${{ prices.link.market_data.low_24h.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h High
            </div>
            <div class="theCoinInfo">
              ${{ prices.link.market_data.high_24h.usd }}
            </div>
          </div>
          <div style="margin-right: 3rem;">
            <div style="font-size: 0.8rem">
              Mcap
            </div>
            <div class="theCoinInfo">
              ${{ prices.link.market_data.market_cap.usd.toLocaleString('en') }}
            </div>
          </div>
        </div>
      </v-card>
    </v-card>
  </div>
  <!--FIRST card END-->
</template>

<script>
import axios from "axios";

export default {
  name: 'TopRightCard',
  data: () => ({
    hello: true,
    prices: {
      xrp: { image: { small: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' }, market_data: { current_price: { usd: 0 }, price_change_percentage_24h: 0, low_24h: { usd: 0 }, high_24h: { usd: 0 }, market_cap: { usd: 0 } } },
      ada: { image: { small: '' }, market_data: { current_price: { usd: 0 }, price_change_percentage_24h: 0, low_24h: { usd: 0 }, high_24h: { usd: 0 }, market_cap: { usd: 0 } } },
      matic: { image: { small: '' }, market_data: { current_price: { usd: 0 }, price_change_percentage_24h: 0, low_24h: { usd: 0 }, high_24h: { usd: 0 }, market_cap: { usd: 0 } } },
      sol: { image: { small: '' }, market_data: { current_price: { usd: 0 }, price_change_percentage_24h: 0, low_24h: { usd: 0 }, high_24h: { usd: 0 }, market_cap: { usd: 0 } } },
      link: { image: { small: '' }, market_data: { current_price: { usd: 0 }, price_change_percentage_24h: 0, low_24h: { usd: 0 }, high_24h: { usd: 0 }, market_cap: { usd: 0 } } }
    }
  }),
  methods: {
    async postApi() {

    }
  },
  mounted() {
    axios.get('https://api.coingecko.com/api/v3/coins/ripple').then(res => {
      this.prices.xrp = res.data
    })
    axios.get('https://api.coingecko.com/api/v3/coins/cardano').then(res => {
      this.prices.ada = res.data
    })
    axios.get('https://api.coingecko.com/api/v3/coins/matic-network').then(res => {
      this.prices.matic = res.data
    })
    axios.get('https://api.coingecko.com/api/v3/coins/solana').then(res => {
      this.prices.sol = res.data
    })
    axios.get('https://api.coingecko.com/api/v3/coins/chainlink').then(res => {
      this.prices.link = res.data
    })
  }
}
</script>

<style scoped>
.priceImg{
  margin: 0 3rem;
  width: 3rem;
  box-shadow: 3px 3px black;
  background-color: moccasin;
  filter: brightness(90%);
}
.priceWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.priceCard {
  background-color: #333333!important;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  text-align: center;
}
.theCoinInfo {
  color: gold;
  font-size: 1rem;
}
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

}

.firstCard {
  text-shadow: 1px 1px black;
  -webkit-font-smoothing: antialiased;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 25rem;
  padding: 2rem 1rem 1rem 1rem;
}

@media (max-width: 1400px) {
  p, ul, li {
    font-size: 1rem;
  }
}

</style>

