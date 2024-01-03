import React from "react";
import { PreDataContext } from "./router";
import { useContext } from "react";
import Button from "./styledComponents/styledButton";

const InfoPage=()=>{
    const{privew,setFav,fav}=useContext(PreDataContext)
    const favourite=(privew)=>{
        {privew&&setFav([...fav,privew])}
    }
    return(
       <div className="Infopage">
            <h1 className="infoimg"><img src={privew?.Poster} alt="" /></h1>
             <div className="info">
                <p className="Title">Title : {privew?.Title} </p>
                 <p className="year">Year :{privew?.Year}</p>
                 <div className="btns">
                  <Button btnclr="White"  BtnTxt="Play movie"  txtclr="Black"/>
                  <Button btnclr="#3e3e3f"  BtnTxt="Add to Favorite" txtclr="Red" btnfun={()=>favourite(privew)} />
                </div>
             </div>
       </div> 
    )
}
export default InfoPage