<template lang="html">
  <div class="container-fluid">
   <div class="row bg-dark p-2 justify-content-center ">
       <div class="sections col-md-4 col-sm-12">
           <h3>Introduction</h3>
           <br/>
             <p>Hi! I'm Simon Rijsselaere, a front-end developer from Ghent.
             </p>
             <p>My interests are Javascript, React, Bootstrap, Node.js and Python.</p>
             <p>I'm looking for an internship in the Ghent region starting September 2019. Preferably in the front-end sector but I'm open to learning Python and more Node.js for the back-end.
             </p>
             <p></p>
       </div>
       <div class="image col-md-4 pr-0 col-sm-12">
           <img src="./linkedin.jpg" class="img-fluid " alt="a person">
       </div>
     </div>
     <div class="row bg-dark justify-content-center">
       <div class="info col-md-8 text-center pt-5 col-sm-12">
         <div class="line">
           <h3 id="bigger">Personal Info</h3>
             <ul>
               <li>E-mail: Rijsselaere.simon@gmail.com</li>
               <li>adress: Zomerstraat 31, 9000 Gent</li>
               <li>Githubpage:<a href="https://github.com/SimonRijsselaere/" target="_blank"> https://github.com/SimonRijsselaere/</a></li>
               <li>linkedin: <a href="https://www.linkedin.com/in/simon-rijsselaere-02b43a17b/" target="_blank">https://www.linkedin.com/in/simon-rijsselaere-02b43a17b/</a></li>
             </ul>
         </div>
       </div>
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

.container-fluid {
  background-size: cover;
  font-family: 'Roboto', sans-serif;
  color: white;
  flex-grow: 1;
}

.sections {
  border-left: #03DAC6 2px solid;
}

.line {
  border-right: #03DAC6 2px solid;
}
li {
  list-style: none;
}
</style>
