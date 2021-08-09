<template>
<div class="box">
    <div class="top-box">
    <img :src=" 'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="">
    <div class="overview">
        <h1 class="details">Overview</h1>
        <p>{{movie.overview}}</p>
    </div>
    </div>
    <div class="box-bottom">
        <router-link :to="{name:'Details', params: {id:movie.id}}">
    <h1 class="title">{{movie.title}}</h1>
        </router-link>
    <span class="vote">Rate: {{movie.vote_average}}</span>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
    props:['movie'],
    setup(props) {

        const changeColor = async ()=>{
            const vote = document.querySelectorAll('.vote')
            vote.forEach(v=>{
                if(v.textContent < 6){
                    v.style.color = 'red'
                }
            })

        }
        changeColor()
        
      return{changeColor}
        

        
    }

}
</script>

<style>
body{
    background-color: rgb(214, 208, 195);
}
img{
    width: 100%;
    height: 100%;
    object-fit: fill;
}
.top-box{
    width: 100%;
    height: 80%;
    position: relative;
    overflow: hidden;
}
.overview {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.837);
    transition: .5s all ease-in-out;
    overflow: auto;
}
.overview p{
    padding: .8rem;
    line-height: 1.3;
}

.top-box:hover .overview{
    height: 70%;
}

.box{
    background: rgba(255, 255, 255, 0.522);
    padding: 1rem;
    height: 400px;
    
}
.box h1{
    font-size: 1rem;
    margin-bottom: 1.1rem;
}
.vote{
    background: rgb(47, 237, 132);
    padding: .4rem;
    border-radius: 5px;
    color:rgb(255, 255, 255);
    font-size: 600;
   
}
.details{
    text-align: center;
    color: crimson;
}
a{
    text-decoration: none;
    color: #2c3e50;
}

</style>