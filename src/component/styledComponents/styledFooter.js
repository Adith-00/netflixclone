import styled from "styled-components";

export const StyledFooter= styled.footer`
background-color: #101010;
padding: 50px;
ul{
    list-style: none;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    @media all and (max-width:640px){
        padding: 30px;
        ul{
            font-size: 12px;
        }
    }
   
`;
