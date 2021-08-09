<template>
<div class="nav">
    <router-link :to="{name:'Home'}">
        <h4>Back To List</h4>
    </router-link>
  
        <router-link :to="{name:'Search'}">
       <h4>back to search</h4>
        </router-link>

  <h1 class="header">Movie Details</h1>
</div>
  <div class="film-grid">
      <div class="film-left">
          <img :src="'https://image.tmdb.org/t/p/w500' + film.poster_path" alt="">
      </div>
      <div class="film-right">
          <h1>{{film.title}}</h1>
          <div>
          <span>{{film.release_date}}</span>
          <span v-for="genre in film.genres" :key="genre">
              - {{genre.name}}
          </span>
          </div>
          <h3 class="vote">{{film.vote_average}}</h3>
          <h2>{{film.tagline}}</h2>
          <h2>Overview</h2>
          <p>{{film.overview}}</p>

      </div>

  </div>
</template>

<script>

import {  ref } from 'vue'

export default {
    name:'Details',
    props:['id'],
    setup(props) {
       
        const film = ref({})
        const details = async(id)=>{
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ed1aa33b88ae96e77b8399f90b321035`,{
                method:'GET',
                 headers: {'Content-Type': 'application/json'}
            })

            const data = await res.json()

            film.value = data
            

            console.log(data)
            
           
            
            

        }

                details(props.id)


        return{details,film}
        
    }

}
</script>

<style scoped>
.film-grid{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1rem;
    background: rgb(5, 5, 5);
    padding: 1rem;
    color: white;

}
p{
    line-height: 1.5;
    font-weight: bold;
}
.vote{
    background: rgb(15, 232, 131);
    display: inline-block;
    border-radius: 50%;
}

H4{
    background: rgb(19, 221, 167);
    display: inline;
    padding: 1rem;
    margin-right: 1rem;
    border-radius: 2rem;
    cursor: pointer;
}
.nav{
    display: flex;
    align-items: center;
    
}
@media only screen and (max-width: 562px){
    .film-grid{
        grid-template-columns: repeat(1,1fr);
    }
    .nav{
        font-size: smaller;
    }
    .nav h4{
        font-size: 1rem;
    }
}
@media only screen and (max-width: 356px){
    .nav{
        margin: .5rem 0;
    }
    .nav h4 {
        font-size: .7rem;
    }
    .header{
        font-size: 1.4rem;
    }
}
</style>