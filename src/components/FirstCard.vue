<template>
  <!--FIRST card START-->
  <div class="firstCardWrapper">
    <v-card class="firstCard" rounded>
      <v-card-text class="cardContent" style="text-align: center; display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
        <h1 class='firstCardTitle'>
          Hi
        </h1>
        <p style="font-style: italic">
          Thanks for putting up with all the bugs and stuff while we build!
        </p>
        <p>
          Soon we will have all the Strategies and Tools that you need to play Town Star at a high level. Tools are being built. Guides are being written. Noobs are being Pwned. TC is being Earned. Wool is being Rushed.
        </p>
        <p>
          Stay tuned.
        </p>
        <div style="display: flex; flex-direction: row; justify-content: space-between; padding: 1rem;">

          <p style="width: 5rem; object-fit: contain;">
            <v-img src="../assets/warning-tape.png"
                   contain
            />
          </p>
          <p style="width: 5rem; object-fit: contain;">
            <v-img src="../assets/warning-tape.png"
                   contain
            />
          </p>
          <p style="width: 5rem; object-fit: contain;">
            <v-img src="../assets/warning-tape.png"
                   contain
            />
          </p>
          <p style="width: 5rem; object-fit: contain;">
            <v-img src="../assets/warning-tape.png"
                   contain
            />
          </p>

        </div>
      </v-card-text>
    </v-card>
  </div>
  <!--FIRST card END-->
</template>

<script>
export default {
  name: 'FirstCard',
  data: () => ({
    hello: true
  }),
  methods: {
    async postApi() {

    }
  }
}
</script>

<style scoped>
h1, h2, h3 {
  font-family: "Grotesk", Helvetica, sans-serif;
  color: moccasin!important;
  margin-bottom: 15px;
  margin-top: 10px;
}
p, ul, li {
  font-size: 1.3rem;
  line-height: 2rem;
  font-family: "Grotesk", Helvetica, sans-serif;
}
a {
  text-decoration: none;
  color: #636853;
  filter: brightness(150%);
}
a:hover {
  filter: brightness(250%);
  text-decoration: underline;
}
.firstCardWrapper {
  display: flex;
  margin-top: 1rem;

}

.firstCard {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25rem;
}

.cardContent {
  padding: 2rem 2rem 0 2rem;
}

.firstCardTitle {
  color: moccasin;
  font-weight: 800;
  line-height: 3rem;
  font-size: 3.5rem;
  display: flex;
  justify-content: center;
}

.firstCardSide {
  display: flex;
  justify-content: center;
  padding: 0;
  width: 12rem;
}

@media (max-width: 1400px) {
  p, ul, li {
    font-size: 1rem;
  }
}

@media (max-width: 700px) {


  .firstCardWrapper {
    width: 90vw;
    margin: 1rem;
  }
  .firstCard {
    width: 90vw;
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .firstCardTitle {
    font-size: 2rem;
    line-height: 2rem;
  }
  .firstCardSide {
    display: none;
  }
  .cardContent {
    padding: 1rem;
  }
}
</style>
