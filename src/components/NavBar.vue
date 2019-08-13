<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <router-link  class="mx-3 nav-item"  to='/'><span>Home</span></router-link>
      <router-link class="mx-3" to='/skills'><span>Skills</span></router-link>
      <router-link class="mx-3" to='/404'><span>404</span></router-link>
      <router-link class="mx-3" to='/bender'><span>Bender Quotes</span></router-link>
      <router-link class="mx-3" to='/starwars'><span>Star Wars Crawl</span></router-link>
      <router-link class="mx-3" to='/pokedex'><span>Pokedex</span></router-link>
      <router-link class="mx-3" to='/about'><span>About</span></router-link>
      </div>
    </nav>
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
  
  span {
    display: block;
  }
</style>
