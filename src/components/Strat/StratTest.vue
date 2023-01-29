<template>
  <!--FIRST card START-->
  <div style='display: grid; grid-template-columns: 15% 85%; width: 75%; margin: 1rem auto; font-family: "Grotesk", Helvetica, sans-serif;'>
    <v-card style="margin: 1rem auto; min-width: 10rem;">
      <v-card-text style="width: 100%; margin: 0 auto">
        <div class="step-hover" @click="switchStep(card)">
          {{ card.title }}
        </div>
        <div v-for="(step, i) in steps" :key="i" class="step-hover" @click="switchStep(step)">
          {{ step.title }}
        </div>
      </v-card-text>
    </v-card>
    <v-card width="100%" style="margin: 1rem auto">
      <v-card-title>
        <h1 style="margin: 1rem auto 3rem auto">
          {{ temp.title }}
        </h1>
      </v-card-title>
      <v-card-text v-html="temp.intro" style="font-size: 1rem!important;">
        {{ temp.intro }}
      </v-card-text>
      <v-card-text>
        <v-img :src="temp.img" :width="temp.imgSize ? temp.imgSize : '100%'" max-height="25rem" style="margin: 0 auto;" contain></v-img>
      </v-card-text>
      <v-card-text v-html="temp.text">
        {{ temp.text }}
      </v-card-text>
      <v-btn style="background: #636853; color: #ffffff!important; width: 15rem; margin: 1rem auto; display: flex;" to="/strats">
        Back to Strategies
      </v-btn>
    </v-card>
  </div>

  <!--FIRST card END-->
</template>

<script>
import { recipes } from '../../assets/reqs/recipes'
import { buildings } from '../../assets/reqs/buildings'
import { steps } from './Beginner/Beginner1'
export default {
  name: 'StartupStrats',
  data: () => ({
    test: false,
    card: {
      title: 'Beginner Guide',
      intro: 'You joined Gala, you setup your account, and you are ready to play TownStar!',
      img: require('../../assets/ingame/buildings/icon_farmBot.png'),
      imgSize: '10rem',
      text: "        <p style=\"font-weight: bold\">\n" +
          "          - {{ recipes.Flour.Time0 }}So how do you get started?<br>\n" +
          "          - How do you not run out of wages or gas?<br>\n" +
          "          - How do you keep from nuking your town and keep starting over from scratch?\n" +
          "        </p>\n" +
          "        <h1>\n" +
          "          This is how!\n" +
          "        </h1>\n" +
          "        <p>\n" +
          "          Just follow this step by step tutorial and you'll be in the money and earning stars in no time!\n" +
          "          Each step has a corresponding screen shot to help you along the way.\n" +
          "        </p>"
    },
    temp: {
      title: 'Beginner Guide',
      intro: 'You joined Gala, you setup your account, and you are ready to play TownStar!',
      img: require('../../assets/ingame/buildings/icon_farmBot.png'),
      imgSize: '10rem',
      text: "        <p style=\"font-weight: bold\">\n" +
          "          - So how do you get started?<br>\n" +
          "          - How do you not run out of wages or gas?<br>\n" +
          "          - How do you keep from nuking your town and keep starting over from scratch?\n" +
          "        </p>\n" +
          "        <h1>\n" +
          "          This is how!\n" +
          "        </h1>\n" +
          "        <p>\n" +
          "          Just follow this step by step tutorial and you'll be in the money and earning stars in no time!\n" +
          "          Each step has a corresponding screen shot to help you along the way.\n" +
          "        </p>"
    },
    steps: steps,
    recipes: recipes,
    buildings: buildings
  }),
  methods: {
    tradeDepot(itemPrice) {
      return (itemPrice * 10)
    },
    switchStep(step) {
      this.temp = step
    }
  }
}
</script>

<style>
.img {
  margin: 0 auto;
}

.step-hover {
  font-family: 'Grotesk', Helvetica, sans-serif;
  font-size: 1rem;
  text-align: center;
  width: 100%;
}

.step-hover:hover {
  color: gold;
  cursor: pointer;
}
</style>
