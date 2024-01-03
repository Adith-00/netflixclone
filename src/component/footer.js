import { StyledFooter } from "./styledComponents/styledFooter";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer =()=>{
    const location =useLocation();

    return  location.pathname !== "/" ? (
        <StyledFooter>
            <ul>
                <li>FAQ</li>
                <li>Investor Releations</li>
                <li>Privacy</li>
                <li>Speed-test</li>
            </ul>
            <ul>
                <li>Help center</li>
                <li>Job</li>
                <li>Cookie and Prefrences</li>
            </ul>
            <ul>
                <li>Account</li>
                <li>Security</li>
                <li>Privacy</li>
                <li>Contact-Us</li>
            </ul>
        </StyledFooter>
    ):null
}
export default Footer