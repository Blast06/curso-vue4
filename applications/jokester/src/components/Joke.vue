<template>

<div class="col-md-6">

    <div class="joke-card">
        <div class="card-block">
            <p><b>{{joke.setup}}</b></p>
            <p><em>{{joke.punchline}}</em></p>
            

        </div>
    </div>

</div>
  
</template>



<script>
export default {
  props: ['joke']
}
</script>

