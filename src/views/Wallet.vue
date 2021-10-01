<template>
  <div class="nomargin" style="margin-top: 3rem;">
    <v-snackbar
        v-model="snackbar"
    >
      Disconnected... you punk.

      <v-btn
          color="pink"
          text
          @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-btn
        v-if="!this.isMetaConnected"
        color="rgba(59, 128, 112, 0.4)"
        width="15rem"
        @click="connectMeta()"
    >
      Connect to Metamask
    </v-btn>
    <v-sheet
        height="100%"
        v-else
    >
      <div style="height: 100%; display: flex; justify-content: space-evenly;">
        <div class="walletItems">
          <div class="nomargin">{{ this.userWallet.tokenBalance }} Gala</div>
          <div class="nomargin">{{ Math.round(this.userWallet.ethBalance*1000)/1000 }} Eth</div>
        </div>
        <div class="walletItems">
          <div class="nomargin">{{ showAcc }}</div>
          <div style="padding: 1rem;">
            <v-btn @click="disconnectMeta" style="background: #3b8070;">Disconnect</v-btn>
          </div>
          <div>
            {{itamz}}
          </div>
        </div>
      </div>
    </v-sheet>
    <v-btn @click="getItemBalances">Itemz?</v-btn>
    <v-btn @click="test">test</v-btn>
  </div>
</template>

<script>
import Web3 from 'web3'
import axios from 'axios'
export default {
  name: 'MetaMask',
  data: () => ({
    snackbar: false,
    userAddress: '',
    userWallet: {},
    isMetaConnected: Boolean,
    itamz: {}
  }),
  computed: {
    showAcc() {
      return this.userAddress.slice(0, 6) + '...' + this.userAddress.slice(38, 42)
    }
  },
  methods: {
    async test() {
      const ass = await axios.get("https://tokens.gala.games/sandbox-games/town-star/beta/town-star-beta-key.json")
      await console.log(ass.data)
    },
    async getAccount () {
      let accounts = await window.ethereum
          .request({ method: 'eth_accounts' })
      return accounts[0]
    },
    async getBalances (addr) {
      let web3
      web3 = await new Web3(window.web3.currentProvider)
      let returner = await web3.utils.fromWei(await web3.eth.getBalance(addr), "ether")
      await console.log(returner)
      const galaTokenAddress = "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA"
      const galaTokenABI = [
        {
          name: "balanceOf",
          outputs: [{ name: "balance", type: "uint256" }],
          constant: !0,
          inputs: [{ name: "_owner", type: "address" }],
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          type: "function",
        },
      ]
      async function connectChain(tokenAddress, typeABI) {
        let web3
        web3 = await new Web3(window.web3.currentProvider)
        return new web3.eth.Contract(typeABI, tokenAddress);
      }
      let contract = await connectChain(galaTokenAddress, galaTokenABI);
      let balanzish = await contract.methods.balanceOf(addr).call();
      await console.log(balanzish)
      const userWallet = { ethBalance: returner, tokenBalance: Math.round(balanzish/100000000) }
      return userWallet
    },
    async connectMeta() {
      console.log('OI HÄR KOMMER ETH SKIT', this.isMetaConnected)
      if (!this.isMetaConnected) {
        await window.ethereum
            .request({
              method: 'wallet_requestPermissions',
              params: [{ eth_accounts: {} }],
            })
            .then(async(result) => {
              console.log('GOT PERMISSIONS', result)
              const accounts = await window.ethereum.request({ method: 'eth_accounts' });
              await console.log('HERE IT IS FOR YOU SIRE', accounts)
              if (accounts[0]) {
                await console.log('UUAUYYAYAYAYAYAY', accounts)
                this.userAddress = await accounts[0]
                this.userWallet = await this.getBalances(this.userAddress)
                this.isMetaConnected = true
              }
            })
            .catch(error => {console.log(error)})
      }
    },
    async disconnectMeta() {
      this.snackbar = true
      this.userAddress = ''
      this.isMetaConnected = false
      window.ethereum.emit('disconnect', async () => {
        console.log('DISCONNECTED')
      })
    },
    async getItemBalances() {
      const addr = this.userAddress
      const galaABI = require('./gala_abi')
      const galaTokenABI = [
        {
          name: "balanceOf",
          outputs: [{ name: "balance", type: "uint256" }],
          constant: !0,
          inputs: [{ name: "_owner", type: "address" }],
          type: "function",
        },
        {
          constant: !0,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          type: "function",
        },
      ]
      const galaItemAddress = "0xc36cF0cFcb5d905B8B513860dB0CFE63F6Cf9F5c"

      this.itamz = await everyFuckingOne(addr)
      async function everyFuckingOne(customerAddress) {
        let contract = await connectChain(galaItemAddress, "item");
        const START_BLOCK = "11290919"; //'11985955' blocknummer typ två veckor bakåt för test, '11290915' från nya $galatoken, '11290919' från första "nya" item
        let filter = {
          returnValues: {
            _value: true,
          },
        };
        let events = await contract.getPastEvents("URI", {
          filter,
          fromBlock: START_BLOCK,
          toBlock: "latest", // 'latest' myket byra den hära
        });
        let sortedEvents = await sorteraSkiten(events, customerAddress);
        await console.log(
            "NU ÄR SKITEN OSRTERAD OCH REDO ATT AVSLUTA EVERYONE FUNCIOTN"
        );
        return sortedEvents;
      }

      async function sorteraSkiten(events, customerAddress) {
        let adresser = [];
        let walletAddress = [];
        let itemIds = [];
        async function pusha() {
          for (let j = 0; j < events.length; j++) {
            walletAddress.push(customerAddress); //pushar in wallet adressen alla gånger också för att blockchain är cp
            itemIds.push(events[j].returnValues._id); //pushar in alla itemIds som finns för att kolla balanserna
            adresser.push(events[j].returnValues._value); //pusha in alla adresser till json filerna för att senare kunna fetcha infon
          }
        }
        await pusha();
        let contract = await connectChain(galaItemAddress, "item");
        let callet = await contract.methods.balanceOfBatch(walletAddress, itemIds);
        let balancesArr = await callet.call();
        let sorted = await sortera();
        async function sortera() {
          let balansObjekt = [];
          for (let x = 0; x < balancesArr.length; x++) {
            if (balancesArr[x] !== "0") {
              let fuzz = await get_json(adresser[x]);
              await console.log(fuzz.name);
              await balansObjekt.push({
                balance: balancesArr[x],
                item: fuzz.name,
                image: fuzz.image,
              });
            }
          }
          return balansObjekt;
        }
        return sorted;
      }

      async function get_json(url) {
        try {
          const response = await axios.get(url, {
            headers: {
              "Access-Control-Allow-Origin": "*",
            }
          });
          return response.data;
        } catch (error) {
          console.log(error.response);
        }
      }
      async function connectChain(tokenAddress, typeABI) {
        const web3js = await new Web3(window.web3.currentProvider);
        let iHateABI = await makeABI(typeABI);
        return new web3js.eth.Contract(iHateABI, tokenAddress);
      }

      function makeABI(decider) {
        if (decider === "token") {
          return galaTokenABI;
        } else {
          return galaABI;
        }
      }
    }
  },
  async mounted () {

    if (!window.ethereum) {
      alert('You need metamask to enjoy this site, doofus.')
    } else {
      await window.ethereum.on('accountsChanged', async (accounts) => {
        if (accounts.length === 0) {
          console.log('Please connect to MetaMask.');
        } else if (accounts[0] !== this.userAddress && window.ethereum.selectedAddress !== this.userAddress) {
          this.userAddress = await this.getAccount();
          this.userWallet = await this.getBalances(this.userAddress)
          console.log('ADDRESS CHANGED', accounts)
        }
      });

      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts[0]) {
        await console.log('UUAUYYAYAYAYAYAY', accounts, accounts[0])
        this.userAddress = accounts[0]
        this.userWallet = await this.getBalances(this.userAddress)
        this.isMetaConnected = true
      } else {
        await console.log('NONONONONO', accounts[0])
        this.isMetaConnected = false
      }
    }
  }
}
</script>

<style>
div {
  font-family: "Grotesk", Helvetica, sans-serif;
  font-size: 1.5rem;
}
.metamask {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.walletItems {
  height: 100%;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nomargin {
  margin: 0;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
