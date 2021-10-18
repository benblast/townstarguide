<template>
  <div style="width: 90%; margin: 0 auto;">
    <h1 style="display: flex; justify-content: center; color: #ffd70099; font-size: 3rem;">
      Products
    </h1>

    <v-card class="searchBar" style="">
      <v-card-title style="padding-top: 0;">
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search product..."
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
    </v-card>

    <v-data-table
      :headers="headz"
      :search="search"
      :items="compRecipes"
      :items-per-page="50"
      style="border-radius: 25px; padding: 1rem;"
    >
      <template v-slot:header="{ header }">
        {{ header }}
      </template>
      <template v-slot:body="{ items }">
        <tbody>
        <tr
            v-for="item in items"
            :key="item.Name"
        >
          <td style="width: 5rem"><v-img :src="getFullUrl(item.FileUrl)" width="5rem"/></td>
          <td style="color: #ffd700; font-size: 1.5rem;">{{ item.Name }}</td>
          <td><div style="display: flex; align-items: center;">{{ item.CityPoints }}<v-icon size="20px" color="#ffed87">mdi-star</v-icon></div></td>
          <td><div style="display: flex; align-items: center;"><em style="color: green; font-style: normal;">$</em> {{ item.CityPrice }}</div></td>
          <td>{{ item.Value1 }} {{ item.Req1 }}<br>{{ item.Value2 }} {{ item.Req2 }}<br>{{ item.Value3 }} {{ item.Req3 }}</td>
          <td>
            <v-chip color="#4ca45099">
              {{ item.Time0 }}
            </v-chip>
          </td>
          <td>
            <v-chip color="#ffeb3b99">
              {{ item.Time1 }}
            </v-chip>
          </td>
          <td>
            <v-chip color="#f4433999">
              {{ item.Time2 }}
            </v-chip>
          </td>
        </tr>
        </tbody>
      </template>
    </v-data-table>

  </div>
</template>

<script>
import { recipes } from "../assets/reqs/recipes"
export default {
  name: 'KbaseProducts',
  components: {  },
  data: () => ({
    search: '',
    recipes: recipes,
    compRecipes: [],
    headz: [
      { text: 'Icon', value: 'Icon' },
      { text: 'Product', value: 'Name' },
      { text: 'City Points', value: 'CityPoints' },
      { text: 'City Price', value: 'CityPrice' },
      { text: 'Reqs', value: 'Req1' },
      { text: 'Time1', value: 'Time0' },
      { text: 'Time2', value: 'Time1' },
      { text: 'Time3', value: 'Time2' },
    ],
    dialog: false,
    headers: Object.keys(recipes)
  }),
  created() {
    let arrayObj = []
    for(let item of Object.values(recipes)) {
      arrayObj.push(item)
    }
    this.compRecipes = arrayObj
  },
  methods: {
    convert() {
      let arrayObj = []
      for(let item of Object.values(recipes)) {
        arrayObj.push(item)
      }
      this.compRecipes = arrayObj

      console.log(arrayObj)
    },
    getFullUrl(path) {
      return `https://townstar.sandbox-games.com/launch/${path}`;
    }
  }
}
</script>

<style scoped>
.searchBar {
  width: 33%;
  margin-bottom: 1rem;
  border-radius: 15px;
}
.key {
  text-align: right;
  margin-right: 0.5rem;
}
.gold {
  color: gold;
  margin-left: 0.5rem;
  word-wrap: normal;

}
div {
  font-family: "Grotesk", Helvetica, sans-serif;
  font-size: 1.2rem;
}
.bigCard2 {
  display: flex;
  justify-content: center;
  margin: 5rem 2rem 0 2rem;
  border-radius: 25px;
  width: 75vw;
  flex-wrap: wrap;
}

.theRow {
  display: flex;
  justify-content: center;
}

.theCard2 {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.top {

  margin: 0 auto;
}

.mid {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

}

.circle {
  box-shadow: 0 0 15px 1px saddlebrown;
  background: #636853;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  margin-top: -3rem;
}

.buildingButton {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;

  margin: 1rem;
}
.buildingButton:hover {
  color: gold;
}
.building-types {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

@media (max-width: 1400px) {

  .theCard2 {
    margin: 0 0 7rem 0!important;
    max-width: 100%!important;
  }
  .theRow {
    width: 100%;
    margin: 0!important;
  }
  .bigCard2 {
    margin: 5rem 0 0 0;
    width: 100%;
  }
}

@media (max-width: 700px) {
  .searchBar {
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 15px;
  }
  .building-types {
    flex-direction: row;
  }

  .buildingButton {

    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-word;
  }
}
</style>
