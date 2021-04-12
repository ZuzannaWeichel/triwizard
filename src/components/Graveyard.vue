<template>
  <div>
    <h1>
        Graveyard
    </h1>
    <img src="../assets/graveyard-fight.gif" alt="graveyard duel">
      <div>
            <input v-model="phraze" placeholder="Enter secret">
            <button id="check-btn" type="submit" v-on:click="solved">Check</button>
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
    name: 'Graveyard',
    methods: {
        solved: function(){
            if (this.phraze === process.env.VUE_APP_KEY_FOUR) {
                this.ok = true;
                this.fail = false;
                 this.$router.push({ name: 'hall'})
                
            } else {
                this.ok = false;
                this.fail = true;
            }
        },
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
    img {
        width: 85%;
        height: 85%;
        padding: 20px;
    }
</style>