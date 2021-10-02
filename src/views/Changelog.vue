<template>
  <div>
    <h1 style="display: flex; justify-content: center; font-size: 3rem; color: #ffffff99; margin-top: 1rem">
      Changelog
    </h1>
    <div class="stuff">
      <v-card v-for="(item, i) in changelog" :key="i" class="itemCard">
        <v-card-title class="title">
          {{ item.name }}
        </v-card-title>
        <v-card-text style="display: flex; justify-content: center">
          <div style="">
            <div>Price</div>
            <div>Points</div>
            <div>Time</div>
          </div>
          <div style="color: gold;">
            <div>{{ item.price }}</div>
            <div>{{ item.points }}</div>
            <div>{{ item.time }}</div>
          </div>

        </v-card-text>
        <div>

        </div>
      </v-card>
    </div>
  </div>

</template>

<script>
import { changelog } from '../assets/reqs/changelog'

export default {
  name: 'Changelog',
  components: {
  },
  data: () => ({
    hello: true,
    changelog: changelog
  }),
  methods: {

  }
}
</script>

<style>
.title {
  display: flex;
  justify-content: center;
  word-break: break-word;
  color: #ffffff;
}
.stuff {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3rem;
  flex-wrap: wrap;
  word-break: break-word;
}
.itemCard {
  width: 10rem;
  height: 12rem;
  margin: 1rem;
}
</style>
