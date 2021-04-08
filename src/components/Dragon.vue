<template>
    <div>
        <h1>
            First Challenge
        </h1>
        <img src="../assets/dragon.png">
        <div>
            <input v-model="phraze" placeholder="Enter secret">
            <button id="check-btn" type="submit" v-on:click="solved">Check</button>
            <div v-if="ok" class="padding">
                <h2>Congrats!</h2>
                <button id="egg-btn" v-on:click="openEgg">
                    <img src="../assets/egg.png" alt="egg">
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
    name: 'Dragon',
    data() {
        return {
            ok: false,
            fail: false,
            phraze:'',
        }
       
    },
    methods: {
        solved: function(){
            if (this.phraze === "root-g0Ld3N-eGg") {
                this.ok = true;
                this.fail = false;
                setTimeout(() => window.scrollTo(0, 600), 10);
                
            } else {
                this.ok = false;
                this.fail = true;
            }
        },
        openEgg: function(){
            this.$router.push({ name: 'lake'})
        },
    },
}
</script>

<style scoped>
    img {
        width: 85%;
        height: 85%;
        padding: 20px;
    }
    .padding {
        padding: 2rem;
    }
    #check-btn {
        margin: 0 10px;
    }
    #egg-btn {
        background-color: Transparent;
        border: none;
        cursor:pointer;
    }
    #egg-btn:focus {
        outline:none;
    }
</style>