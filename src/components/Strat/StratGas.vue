<template>
  <!--FIRST card START-->
  <div style='display: flex; justify-content: space-between'>
    <v-card style="display: flex; flex-direction: row; margin: 0 auto; max-width: 40%;" class='mt-5' rounded>
    <v-card-text style="padding: 2rem;">
        <h1 class='mb-3' style="color: moccasin; opacity: 80%; font-weight: 800; font-size: 3.5rem">
          Gas Guide
        </h1>
        <br>
        <p>
          When you have a reliable income, it is time to build your Gasoline operation. Note that you will not be able to sustain the cost of wages beyond this point unless you are producing higher tier goods like for example Flour, Eggs or Wool.
        </p>
        <p>
          It is not enough to only sell Wood, Sugarcane or any of the base goods.
        </p>
        <p>
          To make Gasoline, you will need the following buildings:
        </p>
        <ul>
          <li>
            Refinery (and the Paved Road req. to build it)
          </li>
          <li>
            Wind Turbine
          </li>
          <li>
            Oil Pump
          </li>
          <li>
            Water Facility
          </li>
          <li>
            Industrial Worker
          </li>
          <li>
            Warehouse
          </li>
        </ul>
        <p>
          And of course, Fuel Storage, but this is already available since you get one when you create your town.
        </p>
        <h2>
          The Production Process
        </h2>
        <p>
          Your Industrial Worker will fetch Crude Oil from the Oil Pump, and store it in the Fuel Storage. He will also fetch Energy from the Wind Turbine, and store it in the Warehouse.
        </p>
        <p>
          The Water Facility fetches Water from Wells to make Water Drums, and stores them in the Warehouse.
        </p>
        <p>
          The refinery makes Petroleum(2 Crude Oil, 1 Energy, 2 Water Drums). You then refine it into Gasoline(1 Petroleum, 2 Water Drums, 6 Energy) using the same building. The refinery worker will fetch all of these ingredients himself.
        </p>
        <p>
          Remember that most of these buildings will cause Pollution around them, affecting crops and animal farms severely. Place the buildings somewhere out of the way to avoid this.
        </p>
      <div style="display: flex; justify-content: center;">
        <v-btn style="background: #636853; color: #ffffff!important;" to="/strats">
          Go to Strategies
        </v-btn>
      </div>

      </v-card-text>
    </v-card>
  </div>
  <!--FIRST card END-->
</template>

<script>
export default {
  name: "Gas",
  data: () => ({
    hello: true
  })
}
</script>

<style scoped>

</style>
