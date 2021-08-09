<template>
   <div class="list">
<div v-for="movie in movies" :key="movie.id">
   <SingleMovie :movie='movie'/>
   
</div>
    </div>
</template>

<script>

import SingleMovie from '../components/SingleMovie'
export default {
    components:{SingleMovie},
    props:['movies'],
    setup(props) {
        
    }

}
</script>

<style>

</style>