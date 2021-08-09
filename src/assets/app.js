const key = 'ed1aa33b88ae96e77b8399f90b321035'
const example = 'https://api.themoviedb.org/3/movie/550?api_key=ed1aa33b88ae96e77b8399f90b321035'

const get = async()=>{
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ed1aa33b88ae96e77b8399f90b321035',{
        method:'GET',
        headers: {
            'Content-Type': 'application/json'}
    })
    const data = await res.json()
    console.log(data)
}

get()