<template lang="html">
  <div class="container">
    <div class="row">
      <figure class="col-md-6 col-sm-1">
        <img src="./chuck.jpg" class="image-fluid" alt="Chuck Norris">
      </figure>
      <div class="col-md-6 col-sm-12">
        <h1 class="text-center display-2">404</h1>
        <p class="text-center ml-4">Looks like Chuck Norris destroyed this page.</p>
        <div class="button">
          <form action="https://github.com/SimonRijsselaere">
            <input type="submit" value="Go back" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>


input {
  width: 200px;
  height: 100px;
  font-size: 2em;
  background-color: white;
  color: black;
  border: 10px solid black;
  animation-name: example;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  float: right;
  margin-top: 3vh;
}

@keyframes example {
  from {background-color: white;}
  to {background-color: #03DAC6;}
}
</style>
