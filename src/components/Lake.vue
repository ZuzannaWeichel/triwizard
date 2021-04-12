<template>
  <div>
    <h1>
        Second Challenge
    </h1>
    <div id="pictures">
        <img src="../assets/song.png" alt="song text" id="song">
        <img src="../assets/myrtle.png" alt="moaning myrtle" id="myrtle">
    </div>
    <div>
        <input v-model="phraze" placeholder="Enter secret">
        <button id="check-btn" type="submit" v-on:click="solved">Check</button>
        <div v-if="ok">
            <h2>Congrats!</h2>
            <button id="next-btn" v-on:click="rescueFriend">
                <img src="../assets/jump.gif" alt="lake jump" id="jump">
            </button>
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
        solved: function(){
            if (this.phraze === process.env.VUE_APP_KEY_TWO) {
                this.ok = true;
                this.fail = false;
                setTimeout(() => window.scrollTo(0, 800), 10);
                
            } else {
                this.ok = false;
                this.fail = true;
            }
        },
        rescueFriend: function(){
            this.$router.push({ name: 'maze'})
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
#pictures {
    position: relative;
}
#song {
    padding: 20px;
} 
#myrtle {
    height: 400px;
    top: -15%;
    right: 10%;
    position:absolute; 
    opacity: 0.3;
}
#jump {
    width: 85%;
    height: 85%;
    padding: 20px;
}
</style>