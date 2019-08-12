<template lang="html">
  <div class="container-fluid bg-dark ">
    <div class="row">
      <div class="col-12 mt-3"><button v-on:click="mounted" type="button" class="btn btn-secondary btn-lg btn-block" id="nextquote" name="button"><p>New quote!</p></button></div>
    </div>
      <div class="row">
        <div class="col-4">
          <img class="img-fluid" src="./image/bender.png" alt="">
        </div>
        <div class="col-8 bg-dark mt-5">
          <div id="quote" class="text-light">

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          results: []
      };
    },
    methods: {
      mounted() {
         this.$axios.get("https://api.myjson.com/bins/u1359")
         .then(response => {this.results = response.data})
         .then(response => {this.displayQuote(response);})

       },
       displayQuote(){
         const quotediv = document.getElementById("quote");
         const nextquote = document.getElementById("nextquote");
         let randomNumber = Math.floor(Math.random() * 40);
         quotediv.innerHTML = `<p>${this.results[randomNumber].quote}</p>`

      setTimeout(function () {

        let string = quotediv.innerHTML;

        if (string.indexOf("Fry") > -1) {
          string = string.replace(/Fry/g, '<span style="color:orange;">Fry</span>');
        }

        if (string.indexOf("Leela") > -1) {
          string = string.replace(/Leela/g, '<span style="color:purple;">Leela</span>');
        }

        if (string.indexOf("Zoidberg") > -1) {
          string = string.replace(/Zoidberg/g, '<span style="color:red;">Zoidberg</span>');
        }

        if (string.indexOf("Bender") > -1) {
          string = string.replace(/Bender/g, '<span style="color:grey;">Bender</span>');
        }

        quotediv.innerHTML = string;

      }, 10);

    }


    }
  }
</script>

<style lang="css" scoped>

img {
width: 300px;
}

#quote{
font-size: 2em;
}
@media (max-width: 767px){
  #quote{
    font-size: 1em;
  }
}




</style>
