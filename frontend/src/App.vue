<template>
  <div id="app">
     <the-header></the-header>
     <the-body></the-body>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import TheBody from './components/TheBody';



import axios from 'axios';
export default {
  el: "#app",
  components: {
    'the-header': TheHeader,
    'the-body': TheBody
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  height: 3000px;
}
</style>
