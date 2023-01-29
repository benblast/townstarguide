

<template>
  <!--FIRST card START-->
  <div class="firstCardWrapper">
    <v-card class="firstCard" rounded>
      <h1 style="margin: 0; text-align: right; font-weight: bold; margin-top: -3rem; margin-bottom: -1rem; color: gold!important;">
        BIG COINZ
      </h1>
      <v-card class="priceCard">

        <div class="priceImg">
          <v-img :src="prices.btc.image.small ? prices.btc.image.small : ''" contain></v-img>
        </div>
        <div class="priceWrapper">
          <div>
            <div style="font-size: 0.8rem">
              Price
            </div>
            <div class="theCoinInfo">
              ${{ prices.btc.market_data.current_price.usd }}
            </div>
          </div>

          <div>
            <div style="font-size: 0.8rem">
              24h Change
            </div>
            <div class="theCoinInfo">
              {{ prices.btc.market_data.price_change_percentage_24h }}%
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Low
            </div>
            <div class="theCoinInfo">
              ${{ prices.btc.market_data.low_24h.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h High
            </div>
            <div class="theCoinInfo">
              ${{ prices.btc.market_data.high_24h.usd }}
            </div>
          </div>
          <div style="margin-right: 3rem;">
            <div style="font-size: 0.8rem">
              Mcap
            </div>
            <div class="theCoinInfo">
              ${{ prices.btc.market_data.market_cap.usd.toLocaleString('en') }}
            </div>
          </div>
        </div>
      </v-card>
      <v-card class="priceCard">
        <div class="priceImg">
          <v-img :src="prices.eth.image.small" contain></v-img>
        </div>
        <div class="priceWrapper">
          <div>
            <div style="font-size: 0.8rem">
              Price
            </div>
            <div class="theCoinInfo">
              ${{ prices.eth.market_data.current_price.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Change
            </div>
            <div class="theCoinInfo">
              {{ prices.eth.market_data.price_change_percentage_24h }}%
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Low
            </div>
            <div class="theCoinInfo">
              ${{ prices.eth.market_data.low_24h.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h High
            </div>
            <div class="theCoinInfo">
              ${{ prices.eth.market_data.high_24h.usd }}
            </div>
          </div>
          <div style="margin-right: 3rem;">
            <div style="font-size: 0.8rem">
              Mcap
            </div>
            <div class="theCoinInfo">
              ${{ prices.eth.market_data.market_cap.usd.toLocaleString('en') }}
            </div>
          </div>
        </div>
      </v-card>
      <v-card class="priceCard" style="margin-bottom: 0!important;">
        <div class="priceImg">
          <v-img :src="prices.bnb.image.small ? prices.bnb.image.small : ''" contain></v-img>
        </div>
        <div class="priceWrapper">
          <div>
            <div style="font-size: 0.8rem">
              Price
            </div>
            <div class="theCoinInfo">
              ${{ prices.bnb.market_data.current_price.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Change
            </div>
            <div class="theCoinInfo">
              {{ prices.bnb.market_data.price_change_percentage_24h }}%
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Low
            </div>
            <div class="theCoinInfo">
              ${{ prices.bnb.market_data.low_24h.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h High
            </div>
            <div class="theCoinInfo">
              ${{ prices.bnb.market_data.high_24h.usd }}
            </div>
          </div>
          <div style="margin-right: 3rem;">
            <div style="font-size: 0.8rem">
              Mcap
            </div>
            <div class="theCoinInfo">
              ${{ prices.bnb.market_data.market_cap.usd.toLocaleString('en') }}
            </div>
          </div>
        </div>
      </v-card>
      <v-card class="priceCard" style="margin-bottom: 0!important;">
        <div class="priceImg">
          <v-img :src="prices.ltc.image.small ? prices.ltc.image.small : ''" contain></v-img>
        </div>
        <div class="priceWrapper">
          <div>
            <div style="font-size: 0.8rem">
              Price
            </div>
            <div class="theCoinInfo">
              ${{ prices.ltc.market_data.current_price.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Change
            </div>
            <div class="theCoinInfo">
              {{ prices.ltc.market_data.price_change_percentage_24h }}%
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Low
            </div>
            <div class="theCoinInfo">
              ${{ prices.ltc.market_data.low_24h.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h High
            </div>
            <div class="theCoinInfo">
              ${{ prices.ltc.market_data.high_24h.usd }}
            </div>
          </div>
          <div style="margin-right: 3rem;">
            <div style="font-size: 0.8rem">
              Mcap
            </div>
            <div class="theCoinInfo">
              ${{ prices.ltc.market_data.market_cap.usd.toLocaleString('en') }}
            </div>
          </div>
        </div>
      </v-card>
      <v-card class="priceCard" style="margin-bottom: 0!important;">
        <div class="priceImg">
          <v-img :src="prices.xmr.image.small ? prices.xmr.image.small : ''" contain></v-img>
        </div>
        <div class="priceWrapper">
          <div>
            <div style="font-size: 0.8rem">
              Price
            </div>
            <div class="theCoinInfo">
              ${{ prices.xmr.market_data.current_price.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Change
            </div>
            <div class="theCoinInfo">
              {{ prices.xmr.market_data.price_change_percentage_24h }}%
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h Low
            </div>
            <div class="theCoinInfo">
              ${{ prices.xmr.market_data.low_24h.usd }}
            </div>
          </div>
          <div>
            <div style="font-size: 0.8rem">
              24h High
            </div>
            <div class="theCoinInfo">
              ${{ prices.xmr.market_data.high_24h.usd }}
            </div>
          </div>
          <div style="margin-right: 3rem;">
            <div style="font-size: 0.8rem">
              Mcap
            </div>
            <div class="theCoinInfo">
              ${{ prices.xmr.market_data.market_cap.usd.toLocaleString('en') }}
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
  name: 'TopLeftCard',
  data: () => ({
    hello: true,
    prices: {
      eth: { image: { small: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png' }, market_data: { current_price: { usd: 0 }, price_change_percentage_24h: 0, low_24h: { usd: 0 }, high_24h: { usd: 0 } } },
      btc: { image: { small: '' }, market_data: { current_price: { usd: 0 }, price_change_percentage_24h: 0, low_24h: { usd: 0 }, high_24h: { usd: 0 } } },
      bnb: { image: { small: '' }, market_data: { current_price: { usd: 0 }, price_change_percentage_24h: 0, low_24h: { usd: 0 }, high_24h: { usd: 0 } } },
      ltc: { image: { small: '' }, market_data: { current_price: { usd: 0 }, price_change_percentage_24h: 0, low_24h: { usd: 0 }, high_24h: { usd: 0 } } },
      xmr: { image: { small: '' }, market_data: { current_price: { usd: 0 }, price_change_percentage_24h: 0, low_24h: { usd: 0 }, high_24h: { usd: 0 } } }
    }
  }),
  methods: {
    async postApi() {

    }
  },
  mounted() {
    axios.get('https://api.coingecko.com/api/v3/coins/bitcoin').then(res => {
      this.prices.btc = res.data
    })
    axios.get('https://api.coingecko.com/api/v3/coins/ethereum').then(res => {
      this.prices.eth = res.data
    })
    axios.get('https://api.coingecko.com/api/v3/coins/binancecoin').then(res => {
      this.prices.bnb = res.data
    })
    axios.get('https://api.coingecko.com/api/v3/coins/litecoin').then(res => {
      this.prices.ltc = res.data
    })
    axios.get('https://api.coingecko.com/api/v3/coins/monero').then(res => {
      this.prices.xmr = res.data
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

