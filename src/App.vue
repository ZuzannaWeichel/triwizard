<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@font-face {
  font-family: "Playfair";
  src: local("Playfair"),
   url(./assets/fonts/playfair-display/PlayfairDisplay-Regular.ttf) format("truetype");
}
html,
body{
  display: flex;
  justify-content: stretch;
  min-height: 100vh;
  min-width: 100vw;
  margin: 0%;
  scroll-behavior: smooth;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Playfair", Arial, Helvetica, sans-serif;
  text-align: center;
  color:rgba(248, 240, 218, 0.795);
  background-image: linear-gradient(black, #014d59);
  background-size: strech;
}
h1 {
  font-size: 3.5rem;
  margin: 5%;
}
h2 {
  font-size: 1.5rem;
  margin: 2%;
}
</style>
