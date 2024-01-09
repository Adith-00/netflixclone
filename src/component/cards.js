import React, { useContext, useState } from "react";
import LoadingSpin from "react-loading-spin";
import { PreDataContext } from "./router"; 
import { useNavigate } from "react-router-dom";

const Cards = ({ category ,data}) => {
    const navigate = useNavigate()
    const { setPrivew } = useContext(PreDataContext);
    const [first,setFirst]=useState(0)
    const[last,setLast]=useState(5)

 const next=()=>{
  {first<= data.length-5&& setFirst(first+1)
    setLast(last+1)}
  }

 const previous = () => (
    last > 5
        ? (setFirst(first - 1), setLast(last - 1))
        : (setFirst(0), setLast(5))
);


  const handleHover = (item) => {
      setPrivew(item);
  };

   const onclickfun=(item)=>{
    setPrivew(item)
    navigate('/info')
   }

  return (
    <div className="CardHolder">
      <h1 className="Category">{category}</h1>
      {data?<div className="cardcontent"> 
          <div className="cards">
            <div className="itm1"> 
            {data?.map((item, index) => (
                  <h1 key={index} onClick={()=>onclickfun(item)} onMouseOver={() => handleHover(item)}>
                    <img src={item?.Poster} alt={"filimcard"} />
                  </h1>
              ))}
              </div>
           
          </div>
      </div>:<LoadingSpin />}
      
    </div>
     
  );
};

export default Cards;
