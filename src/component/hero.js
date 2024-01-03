import React from "react";
import { useContext } from "react";
import Button from "./styledComponents/styledButton";
import { PreDataContext } from "./router";
import { useNavigate } from "react-router-dom";
const Hero=()=>{
    const navigate = useNavigate()
    const { privew,fav,setFav } = useContext(PreDataContext);

    const favourite=(privew)=>{
        {privew&&setFav([...fav,privew])}
    }
    const moreInfo=()=>{
        navigate("/info")
    }
    return(
        <div className="hero">
            <h1 className="heroimg"><img src={ privew?.Poster }alt="poster" /></h1>
            <div className="info">
                <h1 className="title">{privew?.Title}</h1>
                <p className="about">{privew?.Year}</p>
                <div className="Herobtns">
                  <Button btnclr="White"  BtnTxt="Play movie"  txtclr="Black"/>
                  <Button btnclr="#fcfcff82"  BtnTxt="MoreInfo"  txtclr="black"btnfun={moreInfo}/>
                  <Button btnclr="#3e3e3f"  BtnTxt="Add to Favorite" txtclr="Red" btnfun={()=>favourite(privew)}/>
                </div>
            </div>
        </div>
    )
}
export default Hero


