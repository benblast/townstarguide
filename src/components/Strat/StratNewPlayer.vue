<template>
  <!--Guide-->
  <div style='display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr; grid-template-areas: "b a a ." "b a a ." "b a a ."; width: 85vw; margin: 1rem auto; font-family: "Grotesk", Helvetica, sans-serif;'>
    <v-card style="height: fit-content; margin: 1rem auto; min-width: 10rem; grid-area: b;">
      <v-card-text style="width: 100%; margin: 0 auto">
        <div class="step-hover" @click="switchStep(card)">
          {{ card.title }}
        </div>
        <div v-for="(step, i) in steps" :key="i" class="step-hover" @click="switchStep(step, i)">
          {{ step.title }}
        </div>
      </v-card-text>
    </v-card>
    <v-card style="margin: 1rem auto; width: 100%; grid-area: a;">
      <v-card-title>
        <h1 style="color: moccasin; margin: 1rem auto 1rem auto">
          {{ temp.title }}
        </h1>
      </v-card-title>
      <v-card-subtitle v-html="temp.intro" style="font-size: 1.5rem; color: gold; display: flex; justify-content: center; margin: 0 auto;">
        <h2>{{ temp.intro }}</h2>
      </v-card-subtitle>
      <v-card-text>
        <v-dialog
            v-model="dialog"
        >
          <v-img :src="temp.img" @click="switchDialog(false)" :width="temp.imgSize ? temp.imgSize : '100%'" max-height="80vh" style="margin: 0 auto;" contain></v-img>
        </v-dialog>
        <v-img :src="temp.img" :width="temp.imgSize ? temp.imgSize : '100%'" max-height="25rem" @click="switchDialog(true)" style="margin: 0 auto;" contain></v-img>
      </v-card-text>
      <v-card-text v-html="temp.text" class="guideContent">
        {{ temp.text }}
      </v-card-text>
      <v-card-text>
        <v-btn class="ghoulButton" @click="nextStep">
          {{ buttonStep }}
        </v-btn>
      </v-card-text>
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
    dialog: false,
    active: "color: gold;",
    next: 0,
    buttonStep: 'START GUIDE',
    card: {
      title: 'Beginner Guide',
      intro: 'You joined Gala, you setup your account, and you are ready to play TownStar!',
      img: require('../../assets/ingame/buildings/icon_farmBot.png'),
      imgSize: '100%',
      text: "        <p style=\"font-weight: bold;\">" +
          "          - So how do you get started?<br>" +
          "          - How do you not run out of wages or gas?<br>" +
          "          - How do you keep from nuking your town and starting over from scratch?" +
          "        </p>" +
          "        <h1 style='color: moccasin; margin-bottom: 1rem;'>" +
          "          This is how!" +
          "        </h1>" +
          "        <p>" +
          "          Just follow this step by step tutorial and you'll be in the money and earning stars in no time!" +
          "          Each step has a corresponding screenshot to help you along the way." +
          "        </p>"
    },
    temp: {
      title: 'Beginner Guide',
      intro: 'You joined Gala, you setup your account, and you are ready to play TownStar!',
      img: require('../../assets/ingame/buildings/icon_farmBot.png'),
      imgSize: '100%',
      text: "        <p style=\"font-weight: bold\">" +
          "          - So how do you get started?<br>" +
          "          - How do you not run out of wages or gas?<br>" +
          "          - How do you keep from nuking your town and starting over from scratch?" +
          "        </p>" +
          "        <h1 style='color: moccasin; margin-bottom: 1rem;'>" +
          "          This is how!" +
          "        </h1>" +
          "        <p>" +
          "          Just follow this step by step tutorial and you'll be in the money and earning stars in no time!" +
          "          Each step has a corresponding screenshot to help you along the way." +
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
    switchStep(step, i) {
      this.temp = step
      this.next = i + 1
      if(this.temp !== this.card) {
        this.buttonStep = 'NEXT STEP'
      }
      if(this.temp === this.card) {
        this.buttonStep = 'START GUIDE'
      }
      if(this.temp === steps[steps.length - 1]) {
        this.buttonStep = 'BACK TO START'
      }
    },
    nextStep() {
      if(this.temp !== this.card) {
        this.buttonStep = 'NEXT STEP'
        this.temp = steps[this.next]
        this.next++
      }
      if(this.temp === this.card) {
        this.buttonStep = 'START GUIDE'
        this.next = 0
      }
      if(this.temp === steps[steps.length - 1]) {
        this.buttonStep = 'BACK TO START'
        this.next = 0
      }
    },
    switchDialog(bool) {
      this.dialog = bool
    }
  }
}
</script>

<style scoped>
div {
  font-family: "Grotesk", Helvetica, sans-serif;
  font-size: 1rem;
}
.guideContent {
  color: moccasin;
  margin-bottom: 0;
}

ul, li {
  margin-bottom: 1rem!important;
}

.step-hover {
  font-family: 'Grotesk', Helvetica, sans-serif;
  font-size: 1rem;
  text-align: center;
  width: 100%;
}

.active {
  color: gold;
}
.v-card__subtitle {
  color: moccasin;
}
.step-hover:hover {
  color: gold;
  cursor: pointer;
}

.ghoulButton {
  background: #636853!important;
  color: #ffffff!important;
  width: 15rem!important;
  margin: 1rem auto!important;
  display: flex!important;
}
</style>
