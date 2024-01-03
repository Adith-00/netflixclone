import React from "react";
import Hero from "./hero";
import CardHolder from "./cardHolder";
import FetchData from "./Api/api";
import { useEffect } from "react";
import FetchData2 from "./Api/api2";


const HomePage=({moviedata,setMoviedata,top,setTop})=>{
   
    useEffect(() => {
        FetchData(moviedata,setMoviedata)
        FetchData2(top,setTop)
      }, []);
      console.log("movieData123>>>>>>1222",moviedata)
    return(
        <>
            <Hero/>
            <CardHolder/>
        </>
    )
}
export default HomePage