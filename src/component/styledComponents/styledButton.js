import React from "react";
import styled from "styled-components";

  const StyledBtns=styled.button`
  background: ${props => props.btnclr};
  border: none;
  outline: none;
  font-weight: 800;
  padding: 12px;
  border-radius: 10px;
  width: auto;
  color: ${props => props.txtclr};
  cursor: pointer;
  &:hover {
    background: ${props => props.hoverclr};
  }
  @media all and (max-width:480px){
    height: 40px;
    font-size: 11px;
    padding: 6px;
  }
  @media all and (max-width:360px){
    height: 40px;
    font-size: 11px;
    padding: 6px;
  }
`;
const Button = (props) => {
    const { btnclr, txtclr, hoverclr, btnfun, BtnTxt } = props;
  
  
    return(
        <StyledBtns btnclr={btnclr} txtclr={txtclr} hoverclr={hoverclr} onClick={btnfun}>
            {BtnTxt}
        </StyledBtns>
    )
}
export default Button
