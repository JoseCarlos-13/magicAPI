<template>
  <div>
    <el-row class="chosedCard" v-if="card">
      <div>
        <img :src="card.image_uris.png">
      </div>

      <el-col :xs="24" :sm="24" :md="24" :lg="14"
         class="card-description">
        <h2><b>Name: </b>{{ card.name }}</h2>
        <h3><b>Type: </b>{{ card.type_line }}</h3>

        <p v-show="card.power && card.toughness">
          <b>Power/Toughness: </b>
          {{ card.power }}/{{ card.toughness }}
        </p>

        <p v-show="card.oracle_text">
          <b>Description: </b>{{ card.oracle_text }}
        </p>

        <p v-show="card.flavor_text">
          <i>{{ card.flavor_text }}</i>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'card'
    ])
  },

  methods: {
    ...mapActions([
      'loadCard'
    ])
  },

  beforeMount () {
    this.loadCard(this.$route.query.chosedcard.name)
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap');

  h1 {
    font-family: 'Libre Baskerville', serif;
  }

  h3 {
    font-family: 'Libre Baskerville', serif;
  }

  .chosedCard {
    margin: 50px 0px 50px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .chosedCard img {
    border: 3px solid white;
    overflow: hidden;
    border-radius: 10px;
    width: 300px;
    margin: 0px 0px 20px 0px;
  }

   .card-description {
    color: white;
    background-color: rgb(40, 49, 49);
    font-family: 'Old Standard TT', serif;
    border-radius: 20px;
    text-align: center;
    word-wrap: break-word;
    padding: 20px 20px 20px 20px;
    border: 5px outset white;
    font-size: 20px;
  }
</style>
