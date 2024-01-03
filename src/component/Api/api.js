import axios from "axios"

const FetchData = (moviedata,setMoviedata)=> {
   axios.get("http://www.omdbapi.com/?apikey=ae6a5e90&s=action&type=movie")
   .then(response=>setMoviedata(response?.data?.Search)).catch(error=>console.log("error",error))
}

  export default FetchData

  
