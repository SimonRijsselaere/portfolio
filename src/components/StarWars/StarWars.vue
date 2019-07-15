<template lang="html">


 <section class="starwars">
   <div class="fade"></div>


   <div class="crawl">



     <h1 class="title text-center"> hire me </h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa enim neque distinctio voluptatem iure aperiam, laboriosam quidem nemo eaque, provident magnam recusandae modi quasi voluptas, repellat maiores repellendus inventore! Tenetur!Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

   </div>

 </section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
section {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: url(./starwars.jpeg);
}

.starwars {
  display: flex;
  justify-content: center;
  height: 800px;
  perspective: 400px;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 500%;
  color: yellow;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  text-align: justify;
}

.crawl {
  position: relative;
  top: 9999px;
  transform-origin: 50% 100%;
  animation: crawl 60s linear;
  animation-delay: 1s;
}

@keyframes crawl {
  0% {
    top: 0;
    transform: rotateX(10deg) translateZ(0);
  }
  100% {
    top: -6000px;
    transform: rotateX(5deg) translateZ(-2500px);
  }
}

.fade {
  position: relative;
  width: 100%;
  min-height: 60vh;
  top: -25px;
  background-image: linear-gradient(0deg, transparent, black 75% );
  z-index: 1;
}

.title {
  position: relative;
  top: 9999px;
  transform-origin: 50% 100%;
  animation: title 10s linear;
  animation-direction: reverse;
  animation-delay: -1s;
  z-index: -1;
}

@keyframes title {
  0% {
    top: 4000px;
    transform: translateZ(2500px);

  }
  100% {
    top: -2000px;
    transform: translateZ(0);
  }


}
</style>
