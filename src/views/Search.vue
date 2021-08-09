<template>
<router-link :to="{name:'Home'}">
<h3>back to home</h3>
</router-link>
<form @submit.prevent="handleSubmit">
  <label>Search for movie</label>
  <input v-model="searchFor" type="text">
</form>

<SearchList :movies='movies'/>

</template>

<script>
import { ref } from 'vue'
import SearchList from '../components/SearchList'

export default {
    name:'Search',
    components:{SearchList},
    setup(props) {

        const movies = ref(null)
        const searchFor = ref('')

        
        const search = async(search)=>{
            const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=ed1aa33b88ae96e77b8399f90b321035&query=${search}`,{
                method:'GET',
                 headers: {'Content-Type': 'application/json'}
            })
            const data = await res.json()
            movies.value = data.results
            
            return data
        }


     const handleSubmit = async()=>{
         search(searchFor.value)
       }
        search('top')
    


     return{search,searchFor,handleSubmit,movies}
    }

}
</script>

<style>
*{
    box-sizing: border-box;
    
}
form{
    text-align: center;
    margin: 1rem 0;
}
label{
    margin-right: 1rem;
    font-weight: bold;
}
input{
    border: none;
    border-bottom: 3px solid rgb(12, 211, 151);
    border-radius: 2px;
}
h3{
     background: rgb(19, 221, 167);
    display: inline-block;
    padding: 1rem;
    margin-top: 0;
    border-radius: 2rem;
    cursor: pointer;
   
}
</style>