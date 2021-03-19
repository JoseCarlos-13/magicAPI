<template>
  <div>
    <el-row v-if="cardsList">
      <el-col class="list">
        <el-row v-for="card in cardsList" :key="card.id" class="card">
          <el-col>
            <img v-if="card.image_uris" :src="card.image_uris.normal"
              class="card-image" @click="chosedCard(card)">
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'cardsList'
    ])
  },

  methods: {
    ...mapActions([
      'loadCardsList'
    ]),

    chosedCard (card) {
      this.$router.push({
        path: 'chosedcard/:card',
        query: { chosedcard: card }
      })
    }
  },

  beforeMount () {
    this.loadCardsList(this.$route.query.cardsList)
  },

  updated () {
    this.loadCardsList(this.$route.query.cardsList)
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville');
  @import url('https://fonts.googleapis.com/css?family=Old+Standard+TT&display=swap');

  h1 {
    font-family: 'Libre Baskerville', serif;
  }

  h3{
    font-family: 'Libre Baskerville', serif;
  }

  #message{
    font-family: 'Libre Baskerville', serif;
    color: white;
    margin: 150px 0px 350px 0px;
  }

  .card {
    color: white;
    margin: 10px;
  }

  .list {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card-image {
    border-radius: 7px;
    border: solid 3.5px;
    border-color: white;
    width: 250px;
    height: auto;
    overflow: hidden;
  }

  .card-image:hover{
    box-shadow: 0px 0px 15px white;
    transition: ease 0.8s;
  }
</style>
