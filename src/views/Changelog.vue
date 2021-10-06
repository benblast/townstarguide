<template>
  <div>
    <h1 style="display: flex; justify-content: center; font-size: 3rem; color: moccasin; margin-top: 1rem">
      Changelog
    </h1>
    <div class="stuff">
      <v-card v-for="(item, i) in changelog" :key="i" class="itemCard">
        <v-card-title class="titlePage">
          {{ i }}
        </v-card-title>
        <v-card-text style="display: flex; justify-content: center; flex-direction: column">
          <div>
            <v-img
                :src="'https://townstar.sandbox-games.com/launch/' + item.FileUrl"
                class="logImg"
                contain
            >
            </v-img>
          </div>

          <div style="display: flex; justify-content: space-evenly">
            <div>
              <div>Price</div>
              <div>Points</div>
              <div>Time</div>
            </div>
            <div style="color: gold;">
              <div>{{ item.CityPrice }}</div>
              <div>{{ item.CityPoints }}</div>
              <div>{{ item.Time0 }}</div>
            </div>
          </div>


        </v-card-text>
        <div>

        </div>
      </v-card>
    </div>
  </div>

</template>

<script>
import { changelog } from '../assets/reqs/changelog.js'

export default {
  name: 'Changelog',
  components: {
  },
  data: () => ({
    hello: true,
    changelog: changelog
  }),
  methods: {
    getUrl(url) {
      console.log(url)
      url = "https://townstar.sandbox-games.com/launch/files" + url
      return url
    }
  }
}
</script>

<style>
.titlePage {
  display: flex;
  justify-content: center;
  word-break: keep-all;
  color: moccasin;
}
.stuff {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3rem;
  flex-wrap: wrap;
}
.itemCard {
  width: 12rem;
  margin: 1rem;

}

.logImg {
  margin: 0 auto;
  width: 7rem;
}
</style>
