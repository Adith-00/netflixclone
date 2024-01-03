import React from "react";
import Cards from "./cards";
import { StyledDivcol } from "./styledComponents/styledColdiv";
import { PreDataContext } from "./router";
import { useContext } from "react";

const CardHolder=()=>{
  const { moviedata,top } = useContext(PreDataContext);

  return(
   <StyledDivcol>
    <Cards category="Movies" data={moviedata}/>
    <Cards category="Top10"data={top} />
    </StyledDivcol>
  )
}
export default CardHolder