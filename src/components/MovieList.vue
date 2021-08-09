<template>
    <div class="list">
<div v-for="movie in movies" :key="movie.id">
    <keep-alive>
   <SingleMovie :movie='movie'/>
    </keep-alive>
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
.list{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    background: rgb(47, 237, 132);
    padding: .5rem;
    grid-gap: 1rem;
}
@media only screen and (max-width: 768px){
    html{
        font-size: 76.5%;
    }
 .list{
     grid-template-columns: repeat(3,1fr);
 }
}
@media only screen and (max-width: 634px){
   .list{
       grid-template-columns: repeat(2,1fr);
   }
}
@media only screen and (max-width: 320px){
    .list{
        grid-template-columns: 1fr;
    }
    


}
</style>