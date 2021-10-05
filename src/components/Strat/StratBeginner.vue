<template>
  <!--FIRST card START-->
  <div style='display: flex; justify-content: space-between'>
    <v-card style="display: flex; flex-direction: row; margin: 0 auto; max-width: 40%;" class='mt-5' rounded>
      <v-card-text style="padding: 2rem; display: flex; flex-direction: column;">
        <h1 class='mb-3 img' style="color: moccasin; opacity: 80%; font-weight: 800; font-size: 3.5rem">
          Beginner Strategy
        </h1>
        <br>
        <p>
          You joined Gala, you setup your account, and you are ready to play TownStar!
        </p>
        <p style="font-weight: bold">
          - So how do you get started?<br>
          - How do you not run out of wages or gas?<br>
          - How do you keep from nuking your town and keep starting over from scratch?
        </p>
        <h1>
          This is how!
        </h1>
        <p>
          Just follow this step by step tutorial and you'll be in the money and earning stars in no time!
          Each step has a corresponding screen shot to help you along the way.
        </p>
        <h2>
          Step 1
        </h2>
        <p>
          Pick a spot with forest terrain close to a city.
        </p>
        <v-img
            src="../../assets/strats/start/start_1.jpg"
            width="40rem"
            class="img"
            contain
        ></v-img>
        <em class="img mb-3">Forest start</em>
        <p>
          The starting buildings are always the same:
        </p>
        <ul>
          <li>
            Trade Depot
          </li>
          <li>
            Fuel Storage
          </li>
          <li>
            Silo
          </li>
          <li>
            Farm House
          </li>
          <li>
            Well
          </li>
          <li>
            Two Wheat Fields
          </li>
        </ul>
        <p>
          The starting items in your inventory are also always the same:
        </p>
        <ul>
          <li>
            40 Gasoline
          </li>
          <li>
            10 Wheat
          </li>
          <li>
            $25,000
          </li>
        </ul>
        <p>
          You can see your current points in the top right corner, along with the time remaining for the round. Every round runs for 6 days, and your objective is to score points by selling the items you produce using the trade depot.
        </p>
        <p>
          In your top left, you see how much money you currently have. Beneath that is the wages your workers charge every minute in order to keep working, and then all the items you have in your inventory.
        </p>
        <p>
          Right now, one of the easiest strategies to get a decent amount of money is to get windmills. Start by getting a Lumberjack, a Wood Shed and a Wind Mill.
        </p>
        <h2>
          Step 2
        </h2>
        <p>
          Sell 10 wheat and build a Storehouse.
        </p>
        <v-img
            src="../../assets/strats/start/start_2.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Sell wheat, build Storehouse</em>
        <p class="mt-3">
          The Storehouse is needed to store the Flour we will be producing.
        </p>
        <p>
          Be very conservative with your Gasoline in the beginning. You will run out much faster than you think. Therefore, it is important to make the most out of every tank of gas – try only to sell higher value items like Flour, Sugar or Salt.
          For now, we will just sell the 10 Wheat to afford a Storehouse.
        </p>
       <h2>
         Step 3
       </h2>
        <p>
          Sell 10 Wheat and 3 Ponds on the bottom center of your map. <br>Then build a Lumberjack.
        </p>
        <v-img
            src="../../assets/strats/start/start_3.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Step 3</em>
        <p class="mt-3">
          Ponds are the biggest strength of the Forest biome.
        </p>
        <p>
          Selling a Pond gives you ${{ buildings.Pond.DestroyCost }}.
          We will use this to fund some of our early start, but be do not fall into the temptation to sell everything.
          They will be very useful to have later in your strategy.
        </p>
        <h2>
          Step 4
        </h2>
        <p>
          Extend the Dirt Road in the top left and build 1 Windmill.
        </p>
        <v-img
            src="../../assets/strats/start/start_4.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Time for Windmill</em>
        <p class="mt-3">
          It's important to build the Windmill where it has {{ buildings.Windmill.ProximityDist }} tiles of free space around it.<br>
          If another building is closer than {{ buildings.Windmill.ProximityDist }} tiles from the Windmill, it will get <router-link to="/kbase/proximity">Wind Blocked</router-link>.
        </p>
        <p>
          The production timer for Flour is as follows, with Green being no Wind Block at all:<br>
          Green {{ recipes.Flour.Time0 }}s<br>
          Yellow {{ recipes.Flour.Time1 }}s<br>
          Red {{ recipes.Flour.Time2 }}s
        </p>
        <h2>
          Step 5
        </h2>
        <p>
          Sell 10 Wheat and start crafting Flour.
        </p>
        <v-img
            src="../../assets/strats/start/start_5.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Milling that Flour!</em>
        <p class="mt-3">
          We are well on our way, we just need a little more funds so we sell some Wheat and start up the Windmill to craft Flour.<br>
          To craft Flour, click the Windmill and select Craft in the menu at the bottom. You will find Flour in the craft selection menu.
        </p>
        <h2>
          Step 6
        </h2>
        <p>
          Sell 3 Ponds on bottom right, build 3 Dirt Roads and another Windmill.
        </p>
        <v-img
            src="../../assets/strats/start/start_6.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Second Windmill</em>
        <p class="mt-3">
          Now we're getting somewhere. Flour production is started and we are constructing our second Windmill.
        </p>
        <h2>
          Step 7
        </h2>
        <p>
          Sell 3 Ponds top right<br>
          Start crafting Flour on Windmill #2<br>
          Build Dirt Road and Lumberjack #2<br>
          Build Farmhouse #2<br>
          Build Wheat Field #3
        </p>
        <v-img
            src="../../assets/strats/start/start_7.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Expansion</em>
        <p class="mt-3">
          We need more funds, so 3 more Ponds are sold. <br>We build more workers and crops since we will now need more raw materials to supply the increased production of our Town.
        </p>
        <h2>
          Step 8
        </h2>
        <p>
          Build Wood Shed #2
        </p>
        <v-img
            src="../../assets/strats/start/start_8.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">That's it. Another Shed.</em>
        <p class="mt-3">
          To prepare for increased production and to get a better positioning of storage, we build a second Wood Shed.
        </p>
        <h2>
          Step 9
        </h2>
        <p>
          Wait and sell 10 Flour when ready
        </p>
        <v-img
            src="../../assets/strats/start/start_9.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">The Waiting Game</em>
        <p class="mt-3">
          Please remember that we are conserving Gasoline.<br>
          Do not sell any other smaller items - we will get ${{ recipes.Flour.CityPrice*10 }} for selling the Flour which will be enough for now.
        </p>
        <h2>
          Step 10
        </h2>
        <p>
          Build 3 Dirt Roads, 1 Wind Turbine, 1 Warehouse, and 1 Worker House.<br>
          Then sell 10 Flour.
        </p>
        <v-img
            src="../../assets/strats/start/start_10.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Preparing for Gasoline</em>
        <p class="mt-3">
          We are building these to prepare for Gasoline production.<br>
        </p>
        <h2>
          Step 11
        </h2>
        <p>
          Build 3 Dirt Roads, 1 Oil Pump, and 1 Fuel Storage.
        </p>
        <v-img
            src="../../assets/strats/start/start_11.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Preparing for Gasoline: Part 2</em>
        <p class="mt-3">
          This is the plot where we will set up our Refinery operations<br>
        </p>
        <h2>
          Step 12
        </h2>
        <p>
          Wait and sell 10 Flour.
        </p>
        <v-img
            src="../../assets/strats/start/start_12.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Preparing for Gasoline: Part 3</em>
        <p class="mt-3">
          Reminder that we are still conserving Gasoline!<br>
          Don't sell any small items while waiting for Flour unless absolutely necessary.
        </p>
        <h2>
          Step 13
        </h2>
        <p>
          Build 4 Dirt Roads, 1 Well, and 1 Water Facility. Then sell 10 flour when ready.
        </p>
        <v-img
            src="../../assets/strats/start/start_13.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Preparing for Gasoline: Part 4</em>
        <p class="mt-3">
          At this point you will need to sell 10 Extra energy to free up space in your Warehouse for the Water Drums.<br>
          We should now be making Energy and Water Drums at almost the same speed, so try to have about 10 of each in the warehouse so you don't need to keep selling them.
        </p>
        <h2>
          Step 14
        </h2>
        <p>
          Build 2 Dirt Roads.
        </p>
        <v-img
            src="../../assets/strats/start/start_14.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Preparing for Gasoline: Part 5</em>
        <p class="mt-3">
          One of these Dirt Roads will be upgraded to a Paved Road, which is a requirement for building a Refinery.
        </p>
        <h2>
          Step 15
        </h2>
        <p>
          Upgrade 1 Dirt Road to Paved Road<br>
          Wait and sell 10 Flour, repeat until you have at least $20000
        </p>
        <v-img
            src="../../assets/strats/start/start_15.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Preparing for Gasoline: Part 6</em>
        <h2>
          Step 16
        </h2>
        <p>
          Sell 3 Ponds and build 2 Refineries<br>
          IMPORTANT - be sure to leave the 4th Pond for later use!!!
        </p>
        <v-img
            src="../../assets/strats/start/start_16.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Preparing for Gasoline: Part 7</em>
        <p class="mt-3">
          DO NOT SELL THE SELECTED POND.
        </p>
        <h2>
          Step 17
        </h2>
        <p>
          Build a second Builder House.
        </p>
        <v-img
            src="../../assets/strats/start/start_17.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Preparing for Gasoline: Part 8</em>

        <h2>
          Step 18
        </h2>
        <p>
          Start crafting Petroleum with the lower Refinery
        </p>
        <v-img
            src="../../assets/strats/start/start_18.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Preparing for Gasoline: Part 9</em>
        <h2>
          Step 19
        </h2>
        <p>
          Start crafting Gasoline with the left Refinery
        </p>
        <v-img
            src="../../assets/strats/start/start_19.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Preparing for Gasoline: Part 10</em>
        <p class="mt-3">
          One of these Dirt Roads will be upgraded to a Paved Road, which is a requirement for building a Refinery.
        </p>
        <h2>
          Step 20
        </h2>
        <p>
          CONGRATULATIONS!<br>
          You are making Gasoline!!!
        </p>
        <v-img
            src="../../assets/strats/start/start_20.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Preparing for Gasoline: Part 11</em>
        <h2>
          Step 21
        </h2>
        <p>
          Add some Dirt Roads and another Windmill.
        </p>
        <v-img
            src="../../assets/strats/start/start_21.jpg"
            width="40rem"
            class="mt-3 img"
            contain
        ></v-img>
        <em class="img">Done!</em>
        <p class="mt-3">
          A good way to speed up Flour production and not run out of money to pay wages is to add on another Windmill.
        </p>

        <h1>
          Closing remarks
        </h1>
        <p>
          At this point you are free to play around and try different things by continuing to sell Flour for cash to build and grow.
          You might want to try adding another Farm House and more Wheat crops to increase Flour production.
        </p>
        <h2>
          Important notes
        </h2>
        <p style="list-style: none">
            - If you get low on cash and you have enough gas you could sell 10 to help out, but I avoid that if possible.<br><br>

            - Now you just need to monitor your Energy, Water Drums, Crude Oil, Petroleum, and Gasoline to be sure you do not run out of storage space by over producing any of them.<br><br>

            - You can sell any extra products since you still have extra Gasoline, or you can turn off and back on any of the crafting to control how much of any item is made.<br><br>

            - Be sure to sell extra Water Drums or you will fill your Warehouse and have no place to store Energy and your Gasoline production will stop.<br><br>

            - Try to only sell Flour (or other high tier items) to save gas and maximize your money.
        </p>
        <v-btn style="background: #636853; color: #ffffff!important; width: 15rem; display: flex; margin: 0 auto; margin-top: 3rem;" to="/strats">
          Back to Strategies
        </v-btn>
      </v-card-text>

    </v-card>
  </div>
  <!--FIRST card END-->
</template>

<script>
import { recipes } from '../../assets/reqs/recipes'
import { buildings } from '../../assets/reqs/buildings'
export default {
  name: 'StartupStrats',
  data: () => ({
    hello: true,
    recipes: recipes,
    buildings: buildings
  }),
  methods: {
    tradeDepot(itemPrice) {
      return (itemPrice * 10)
    }
  }
}
</script>

<style>
.img {
  margin: 0 auto;
}
</style>
