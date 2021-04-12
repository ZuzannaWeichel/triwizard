<template>
  <div>
    <h1>Great Hall</h1>
    <h2>Congratulations!</h2>
    <p>Now you can post the final quote in #triwizard_tournament slack and see if you were the first one to solve it.</p>

    <img src="../assets/greate-hall.jpeg" alt="greate hall">

    <h3>{{this.quote}}</h3>
    <p>- Albus Dumbledore</p>

  </div>
</template>

<script>
export default {
    name: 'Hall',
    data() {
return {
    quote: process.env.VUE_APP_QUOTE
}
    }
}
</script>

<style scoped>
    img {
        width: 50%;
        height: 50%;
        padding: 20px;
    }
</style>