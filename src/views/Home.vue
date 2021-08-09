<template>
<nav>
  <h1>Top Rated Movies</h1>
  <router-link :to="{name:'Search'}">
  <h1 class="search">Search</h1>
  </router-link>
</nav>
  <MovieList :movies='movies'/>
</template>

<script>
import { ref } from 'vue'
import MovieList from '../components/MovieList.vue'
export default {
    components:{MovieList},
    setup(props) {
        const movies = ref(null)
        const getMovies = async()=>{
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ed1aa33b88ae96e77b8399f90b321035',{
            method:'GET',
            headers: {'Content-Type': 'application/json'}})
            const data = await res.json()
            movies.value = data.results
            
            
        }


        getMovies()
       
   
        
        return{movies,getMovies}


        
    }

}
</script>

<style>
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.search{
    background: rgb(19, 221, 167);
    display: inline;
    padding: 1rem;
    margin-right: 1rem;
    border-radius: 2rem;
    cursor: pointer;
}
</style>