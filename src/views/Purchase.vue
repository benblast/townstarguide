<template>
  <div style="display: flex; flex-direction: column; align-items: center">
    <h1 style="font-size: 3rem; color: #ffd70099; margin-top: 1rem">
      Purchase
    </h1>
    <v-card v-for="(item, i) in items" :key="i" class="buildCard">
      <v-card-title style="display: flex; justify-content: center">
        {{ item.head }}
      </v-card-title>
      <v-card-text style="display: flex; justify-content: center; flex-direction: column; text-align: center">
        <v-img src="../assets/ingame/products/icon_uniforms.png" width="9rem" style="margin: 0 auto"></v-img>
        <p>
          {{ item.descr }}
        </p>
      </v-card-text>
      <div style="display: flex; justify-content: center; margin-bottom: 1rem;">

        <v-btn @click="buy" style="background: #636853;">
          BUY for {{ item.price }} ETH
        </v-btn>
        <v-btn @click="checkThings" style="background: #636853;">
          check
        </v-btn>
      </div>
    </v-card>
  </div>

</template>

<script>
//import axios from "axios";
import Web3 from 'web3'
import axios from "axios";
export default {
  name: 'Purchase',
  components: {
  },
  data: () => ({
    hello: true,
    items: [
      {
        head: 'Uniforms',
        descr: 'A premium build for Uniforms to help you reach the top.',
        price: 0.1
      }
    ]
  }),
  methods: {
    async buy() {
      const perms = await window.ethereum.request({ method: 'eth_requestAccounts' })
      console.log('perms ok', perms)
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })
      if(accounts[0]) {
        console.log('got acc', accounts[0])
        let web3;
        web3 = new Web3(window.ethereum)
        const tx = await web3.eth.sendTransaction({
          from: accounts[0],
          to: '',
          value: '100000000000000'
        }, async function(error, hash) {
          if(error) {
            console.log('error')
          } else {
            console.log(hash, 'txhash')
            try {
              await axios.post('http://localhost:5000/api/eth/thepost/', {
                tx: hash,
                email: ''
              })
            } catch(e) {
              console.log(e.message)
            }

          }

        }).then(async function(receipt){
          console.log(receipt)
        })

        console.log(tx, 'last')

      }
    },
    async checkThings() {
      let web3;
      web3 = await new Web3(window.ethereum)
      const valueOfTx = await web3.eth.getTransaction('')
      console.log(valueOfTx.value)

      await axios.post('http://localhost:5000/api/eth/thepost/', {
        tx: "",
        email: ''
      })
    }
  }
}

</script>

<style scoped>
.buildCard {
  width: 15rem;
}
</style>
