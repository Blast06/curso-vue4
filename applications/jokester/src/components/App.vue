<template>
<div class="app">

    <div class="component">
        
    <h3>JOKES AND PUNCHLINES</h3>
    <button class="boton btn btn-primary" @click="initJokes"> Add ten random jokes</button>
    <button class="boton btn btn-primary" @click="AddJoke">Add one joke</button>
    </div>
    <br>
    <br>
    
    <div class="col-md-12">

        <Joke
        v-for="(joke,index) in $store.state.jokes"
        :joke="joke"
        v-bind:key="index"
        
        />

    </div>
</div>




</template>

<script>
import {mapActions} from 'vuex'
import Joke from './Joke.vue'
    export default {
        methods: mapActions([
        'initJokes',
        'AddJoke']),
        components:{
            Joke
        }

    }
</script>
