<template>
  <div>
    <h1>
        Second Challenge
    </h1>
    <img src="../assets/song.png" alt="song text">
      <div>
            <input v-model="phraze" placeholder="Enter secret">
            <button id="check-btn" type="submit" v-on:click="solved">Check</button>
            <div v-if="ok">
                <h2>Congrats!</h2>
                <!-- <button id="egg-btn" v-on:click="rescueFriend">
                    <img src="../assets/egg.png" alt="egg">
                </button> -->
              
            </div>
            <div v-if="fail">
                <h2>
                    Sorry, try again.
                </h2>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Lake',
    methods: {
        rescueFriend: function(){

        }
    },
    data() {
        return {
            ok: false,
            fail: false,
        }
    }
}
</script>

<style scoped>
    #check-btn {
        margin: 0 10px;
    }
</style>