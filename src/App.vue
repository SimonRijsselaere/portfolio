<template>
  <div id="app">
    <Header />
    <NavBar/>
  </div>
</template>

<script>
import Skills from './components/Skills.vue'
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    Skills,
    Header,
    NavBar,

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

body {
  background-color: grey;
  font-family: 'Roboto', sans-serif;
  display: grid;
  grid-template-rows: auto;
}

body, html {
  margin: 0;
  height: 100%;
}
#app {
    width: 100%;
}


</style>
