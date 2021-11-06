<template>
  <!--FIRST card START-->
  <div class="firstCardWrapper">
    <v-card class="firstCard" rounded>
      <v-card-text class="cardContent">
        <h3>
          Welcome
        </h3>
        <v-divider class='my-3'></v-divider>
        <p style="font-style: italic">
          Thanks for putting up with all the bugs and stuff while we build!
        </p>
        <p style="font-size: 1rem!important;">
          We aim to have all the Strategies and Tools that you need to play Town Star at a high level. Tools are being built. Guides are being written. TOWN is being Earned. Wool is being Rushed.
        </p>
        <h3 style="color: gold!important; font-size:2rem;">
          Stay tuned.
        </h3>
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
  font-size: 2rem;
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

</style>
