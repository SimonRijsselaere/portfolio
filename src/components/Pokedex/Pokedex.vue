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
              <input v-model="searchedpokemon" type="text" id="searchThisPokemon" placeholder="Search your Pokemon!">
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
       this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${this.searchedpokemon.toLowerCase()}`)
       .then(response => {this.pokemon = response.data})
       .then(response => {this.loadAjax(response);})

     },

    loadAjax() {
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

@media (max-width: 767px){
  .Rectangle3 > h2{
    font-size: 1em;
  }
  .Rectangle4 > h2{
    font-size: 1em;
  }
  button {
    margin-top: 10px !important;
  }
  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    padding-left: 0 !important;
  }
}
@media (max-width: 1023px){
  .Rectangle3 > h2{
    font-size: 1.5em;
  }
  .Rectangle4 > h2{
    font-size: 1.5em;
  }

}


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
