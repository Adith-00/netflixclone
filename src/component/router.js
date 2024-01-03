import React, { useState, createContext,lazy,Suspense  } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./home";
import HeaderPage from "./header";
// import Footer from "./footer";
import NetflixLogin from "./loginPage";
import Loader from "./loader";
const InfoHolder =lazy(()=> delay(import ('./infoHolder')) )
const Favourite =lazy(()=> delay(import ('./favorite')) )
const HomePage =lazy(()=> delay(import ('./home')) )
const Footer =lazy(()=> delay(import ('./footer')) )
// import InfoHolder from "./infoHolder";
// import Favourite from "./favorite";



export const PreDataContext = createContext(); 

const RouterPage = () => {
  const [privew, setPrivew] = useState([]);
  const [moviedata,setMoviedata]=useState([]);
  const [top,setTop]=useState([])
   const[fav,setFav]=useState([])
  console.log("fav........",fav)
  console.log("privew>>>>>>>>",privew)
  return (
    <div className='netflix'>
      <BrowserRouter>
      <PreDataContext.Provider value={{ privew, setPrivew,moviedata,setMoviedata,fav,setFav,top,setTop}}> 
      <Suspense fallback={ <Loader/>} >
        <HeaderPage/>
        <Routes>
                <Route path ="/" element={<NetflixLogin/>}/>
                <Route path="/home" element={<HomePage moviedata={moviedata} setMoviedata={setMoviedata} top={top} setTop={setTop}/>}/>
                <Route path="/info" element={ <InfoHolder/>}/>
                <Route path="/fav" element={ <Favourite/>}/>     
        </Routes>
        <Footer/>
        </Suspense>    
      </PreDataContext.Provider>
      </BrowserRouter>
    </div>
  );
};
const delay=(promise)=> {
  return new Promise(resolve => {
    setTimeout(resolve, 1500);
  }).then(() => promise);
}
export default RouterPage;
