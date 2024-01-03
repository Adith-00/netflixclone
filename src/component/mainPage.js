import React, { useState, createContext } from "react";
import HomePage from "./home";
import HeaderPage from "./header";
import Footer from "./footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import InfoHolder from "./infoHolder";
import Favourite from "./favorite";
import NetflixLogin from "./loginPage";

export const PreDataContext = createContext(); 

const MainPage = () => {
  const [privew, setPrivew] = useState([]);
  const [moviedata,setMoviedata]=useState([]);
  const[fav,setFav]=useState([])
  console.log("fav........",fav)
  console.log("privew>>>>>>>>",privew)
  return (
    <>
     
      <PreDataContext.Provider value={{ privew, setPrivew,moviedata,setMoviedata,fav,setFav}}> 
        <HeaderPage/>
       
            <Route path="/netflix/home" element={<HomePage moviedata={moviedata} setMoviedata={setMoviedata}/>}/>
            <Route path="/netflix/info" element={ <InfoHolder/>}/>
            <Route path="/netflix/fav" element={ <Favourite/>}/>
       
        <Footer />
      </PreDataContext.Provider>
    
    </>
  );
};

export default MainPage;
