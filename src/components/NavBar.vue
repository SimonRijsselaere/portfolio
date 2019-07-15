<template>
  <div>
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="info">
      <router-link  class="mx-3"  to='/'><span>Home</span></router-link>
      <router-link class="mx-3" to='/skills'><span>Skills</span></router-link>
      <router-link class="mx-3" to='/404'><span>404</span></router-link>
      <router-link class="mx-3" to='/bender'><span>Bender Quotes</span></router-link>
      <router-link class="mx-3" to='/starwars'><span>Star Wars Crawl</span></router-link>
      <router-link class="mx-3" to='/pokedex'><span>Pokedex</span></router-link>
      <router-link class="mx-3" to='/about'><span>About</span></router-link>
    </b-navbar>
    <router-view />
  </div>
</template>




<script>
  export default {
    data() {
      return {

      };
    },
    methods: {

    }
  }
</script>

<style lang="css" scoped>
.mx-3 {
  color: white;
}

span:hover {
  border-top: #03DAC6 2px solid;
  padding-top: 2px;
}

.navbar {
  background-color: #6200EE !important;
}
</style>
