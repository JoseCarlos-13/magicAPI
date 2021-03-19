<template>
  <el-row class="topbar">
    <router-link to="/mainscreen" class="logo">
      <img src="../assets/Mlogo.png" width="250">
    </router-link>

    <Searchbar />
  </el-row>
</template>

<script>
import Searchbar from '../components/Searchbar'

export default {
  components: {
    Searchbar
  }
}
</script>

<style>
  .topbar{
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid white;
    justify-content: flex-start;
    padding: 15px 0px 10px 10px;
    background-image: url('../assets/noma.png');
  }

  .logo{
    margin-top: -16px;
  }
</style>
