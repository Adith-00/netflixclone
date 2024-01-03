import React from "react";
import { HeadDiv } from "./styledComponents/styledHeader";
import Logo from '../assets/image/logo1.png'
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
const location =useLocation();
const[toggle,setToggle]=useState(false)
    const toggler=()=>{
        {toggle==true?
        setToggle(false)
        :
        setToggle(true)} 
    }
    
    
  return location.pathname !== "/" ? (
    <HeadDiv isToggled={toggle}>
      <div className="left">
        <h1>
          <img  onClick={toggler} src={Logo} alt="" />
        </h1>
        <ul>
        <Link to="/home"><li>Home</li></Link>  
        <Link to="/fav"> <li>My Favourite</li></Link>  
          <li>Browse by Languages</li>
        </ul>
      </div>
    
    </HeadDiv>
  ):null;
};


export default Header;
