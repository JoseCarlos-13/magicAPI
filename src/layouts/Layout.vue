<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <Header />

        <el-main>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </el-main>

        <Footer/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  body {
    background-image: url('../assets/background/background2.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  p {
    color: white;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }
</style>
