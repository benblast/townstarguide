<template>
  <!--FIRST card START-->
  <div style='display: flex; justify-content: space-between'>
    <v-card style="display: flex; flex-direction: row; margin: 0 auto; max-width: 40%;" class='mt-5' rounded>
      <v-card-text style="padding: 2rem; display: flex; flex-direction: column;">
        <h1 class='mb-3 img' style="color: moccasin; opacity: 80%; font-weight: 800; font-size: 3.5rem">
          Wool Rush
        </h1>
        <br>
        <p>
          This is a typical forest map, with a mountain next to it.
        </p>
        <v-img
            src="../../assets/strats/start/starting_1.png"
            width="40rem"
            class="img"
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
            Storehouse
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
          Right now, one of the best strategies to get a decent amount of money is to get windmills. Start by getting a Lumberjack, a Wood Shed and a Wind Mill.
        </p>
        <v-img
            src="../../assets/strats/start/starting_2.png"
            width="40rem"
            class="mt-3 img"
        ></v-img>
        <em class="img">Rushing with Wind Mills</em>
        <p class="mt-3">
          Remember that wind mills are affected by buildings that are nearby, which is an important part of the game called “Wind Block“. Read through the article, it is crucial information for the placement and planning of the buildings in your town. So place your wind mill with that in mind.
        </p>
        <p>
          Be very conservative with your Gasoline in the beginning. You will run out much faster than you think. Therefore, it is important to make the most out of every tank of gas – try only to sell higher value items like Flour, Sugar or Salt.
        </p>
        <p>
          Now wait until you’ve accumulated 10 flour, and sell it. Build another wind mill. Repeat until you have 3 wind mills.
        </p>
        <p>
          Depending on what kind of map tile you are on (Forest, Desert, Plains), you will need a “crop operation” after the third wind mill. You will be fine for a while longer in a forest, since it has a lot of ponds/marshlands and natural trees that can sustain you.
        </p>
        <h1>Crop Operation</h1>
        <p>
          Connecting ponds in a smart way in order to make an effective crop/tree farming operation is key to feed your production facilities with raw goods.
        </p>
        <p>
          Everyone has a different setup and placement of their ponds to make this happen. It all depends on how you have placed the rest of your production facilities, so I will give you two examples that can give you inspiration.
        </p>
        <v-img
            src="../../assets/strats/start/starting_3.png"
            width="40rem"
            class="mt-3 img"
        ></v-img>
        <em class="img">Example of a crop operation.</em>
        <v-img
            src="../../assets/strats/start/starting_4.png"
            width="40rem"
            class="mt-3 img"
        ></v-img>
        <em class="img">Example of a crop operation.</em>
        <p class="mt-3">
          You don’t have to finish the crop/tree farm operation entirely at this, you can build the beginning of it and finish it as you expand your production facilities.
        </p>
        <p>
          Now it’s time to get Gasoline Production up and running.
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
export default {
  name: 'WoolRush',
  data: () => ({
    hello: true
  })
}
</script>

<style scoped>
.img {
  margin: 0 auto;
}
</style>
