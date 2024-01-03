import React, { Children } from "react";
import Header from "./header";
import Footer from "./footer";

const HeadFoot=({Children})=>{
    return(
        <>
            <Header/>
            {Children}
            <Footer/>
        </>
    )
}
export default HeadFoot