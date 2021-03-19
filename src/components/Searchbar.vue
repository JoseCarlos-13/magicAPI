<template>
  <el-row>
    <el-input placeholder="Write the card name here"
      :value="search" @input="inputSearch">
        <el-button slot="append" icon="el-icon-search"
        @click="searchingCard(search)"/>
    </el-input>
  </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'search'
    ])
  },

  methods: {
    ...mapActions([
      'inputSearch'
    ]),

    searchingCard (search) {
      this.inputSearch(search)
      this.$router.push({
        name: `cardlist`,
        query: { cardsList: search }
      })
    }
  }
}
</script>

<style>
  .el-input__inner{
    background-color: rgb(104, 104, 104);
    color: white;
  }
</style>
