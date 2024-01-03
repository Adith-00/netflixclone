import React, { useState } from "react";
import Button from "./styledComponents/styledButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorDialog from "./error";

const NetflixLogin = () => {
    const navigate =useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loged,setLoged]=useState(true)

  const handleLogin = () => {
    {email && password ? (
      navigate("/home")
    ) : (
      setLoged(false)
    )}
    
  };
  const close=()=>{
      setLoged(true)
  };

  return (
    <div className="netflix-login-container">
          <div className="netflix-login">
              <h1 className="netflix-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"alt="Netflix Logo"/></h1>
              <div className="login-form">
                  <h1>Sign In</h1>      
                      <input type="email"placeholder="Email or phone number"value={email} onChange={(e) => setEmail(e.target.value)}/>
                      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <Button btnclr="red"  BtnTxt="Sign-In" txtclr="White"btnfun={handleLogin}/>
                  <div className="bottom-links">
                          <p>
                          New to Netflix? <Link to="#">Sign up now.</Link>
                          </p>
                          <p>
                          This page is protected by Google reCAPTCHA to ensure you're not a
                          bot. <Link to="#">Learn more.</Link>
                          </p>
                  </div>
              </div>
              {loged? console.log("loged in"):<ErrorDialog closeFun={close}/>}
              
           </div>
     </div>
  );
};

export default NetflixLogin;
