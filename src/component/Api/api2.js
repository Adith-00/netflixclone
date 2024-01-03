import axios from "axios"

const FetchData2 = (top,setTop)=> {
   axios.get("http://www.omdbapi.com/?apikey=ae6a5e90&s=movie&type=movie&page=8")
   .then(response=>setTop(response?.data?.Search)).catch(error=>console.log("error",error))
}

  export default FetchData2

  
