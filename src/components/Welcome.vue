<template>
    <div>
        <h1>TRIWIZARD TOURNAMENT</h1>
        <h2>champions - danger - eternal glory</h2>
        <button v-on:click="redirect">
            <img class="imgLogo" alt="goblet of fire" src="../assets/goblet.png">
        </button>
        <div class="footer">
            <p><b>root-</b>some<b>-</b>word<b>-</b>or<b>-</b>words</p>
        </div>
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
    .footer {
        display: flex;
    }
    p {
        color: black;
        font-size: 0.8rem;
        justify-self: start;
        padding-left: 15%;
    }
</style>
