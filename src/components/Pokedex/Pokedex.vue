<template lang="html">
  <div class="container">
      <div class="row align-items-end">
        <div class="Rectangle col-6">
          <div class="Rectangle5 pt-2">
            <div class="Rectangle6 mt-4">
              <div class=" bg-light text-center pt-4" id="picture"></div>
            </div>
          </div>
          <div class="col-12 text-center input-field mt-5">
            <form @submit.prevent="addpokemon" action="index.html" method="post">
              <input v-model="searchedpokemon" type="text" id="searchThisPokemon" placeholder="no capital letters please">
              <button class="ml-5" type="button" name="button" v-on:click="mounted" id="search">Search the Pokemon!</button>
            </form>
          </div>
          <h2 class="mt-3">Moves</h2>
          <div class="mt-2" id="moves">
          </div>
        </div>
        <div class="Rectangle2 col-6 ">
          <div class="Rectangle3 col-8 mt-5">
            <h2 class="mt-3">Name: <span id="name">
            </span></h2>
          </div>
          <div class="Rectangle4 col-8 mt-5">
            <h2 class="mt-3">ID: <span id="idNumber">
            </span></h2>
          </div>
        </div>
      </div>
        <!-- END OF CONTAINER -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        pokemon: [],
        searchedpokemon: "",
    };
  },
  methods: {
    addpokemon() {
      searchedpokemon: this.searchedpokemon
    },
    mounted() {
       this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${this.searchedpokemon}`)
       .then(response => {this.pokemon = response.data})
       .then(response => {this.loadAjax(response);})

     },

    loadAjax() {
      var input = document.getElementById("searchThisPokemon");
      var search = document.getElementById("search");
      var displayName = document.getElementById("name");
      var displayPicture = document.getElementById("picture");
      var displayEvolutionName = document.getElementById("evolutionName");
      var displayEvolutionPicture = document.getElementById("evolutionPicture");
      var displayID = document.getElementById("idNumber");
      var displayMoves = document.getElementById("moves");
      var data = this.pokemon;
      displayName.innerHTML = data.name;
      displayPicture.innerHTML = "<img" + " " + "src=" + data.sprites.front_default + ">";
      displayID.innerHTML = data.id;
      displayMoves.innerHTML = data.moves[Math.floor(Math.random() * data.moves.length)].move.name + "<br>" + " " + data.moves[Math.floor(Math.random() * data.moves.length)].move.name + " " + "<br>"  + data.moves[Math.floor(Math.random() * data.moves.length)].move.name + " " + "<br>"  + data.moves[Math.floor(Math.random() * data.moves.length)].move.name;

  }
    }
}
</script>

<style lang="css" scoped>

.Rectangle{
  width: 385px;
  height: 596px;
  border: 2px solid black;

  background: #FA1515;
}




.Rectangle2{

border-right: 2px solid black;
border-bottom: 2px solid black;
border-top: 2px solid black;


width: 344px;
height: 340px;

background: #FA1515;}


.Rectangle3{
height: 77px;
margin-left: auto;
margin-right: auto;
border: 2px solid black;



background: #5B4545;}


.Rectangle4{
  border: 2px solid black;

  margin-left: auto;
  margin-right: auto;


height: 71px;

background: #9B93FC;
}

.Rectangle5{

  border: 2px solid black;

width: 333px;
height: 254px;
margin-left: auto;
margin-right: auto;


background: #C4C4C4;

}
.Rectangle6{


width: 261px;
height: 177px;
margin-left: auto;
margin-right: auto;

background: #FFFFFF;
}



</style>
