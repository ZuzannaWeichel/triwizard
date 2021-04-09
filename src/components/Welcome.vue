<template>
    <div>
        <h1>TRIWIZARD TOURNAMENT</h1>
        <h2>champions - danger - eternal glory</h2>
        <button v-on:click="redirect">
            <img class="imgLogo" alt="goblet of fire" src="../assets/goblet.png">
        </button>
    </div>
</template>

<script>
export default {
    name: 'Welcome',
    methods: {
        redirect: function(){
            this.$router.push({ name: 'dragon' });
        }
    }
}
</script>

<style scoped>
    button {
        background-color: Transparent;
        border: none;
        cursor:pointer;
    }
    button:focus {
        outline:none;
    }
    .imgLogo {
        padding: 30px;
    }
</style>
