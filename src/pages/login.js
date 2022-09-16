import React  , { useState } from "react";
import { Alert } from "react-bootstrap";
import Category from "../components/category/category";

const Login  = () =>{
        const [emaillog, setEmaillog] = useState(" ");
        const [passwordlog, setPasswordlog] = useState(" ");
        const [flag, setFlag] = useState(false);
        const [home, setHome] = useState(false);
      
        const handleLogin = (e) => {
          e.preventDefault();
          let pass = localStorage
            .getItem("password")
            .replace(/"/g, "");
          let mail = localStorage.getItem("email").replace(/"/g, "");
          
      
          if (!emaillog || !passwordlog) {
            setFlag(true);
          } else if (passwordlog !== pass || emaillog !== mail) {
            setFlag(true);
          } else {
            setHome(!home);
            setFlag(false);
          }
        }
    return (<div>
        {home ? (<Category/>) :( <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <h2>Get access to your orders, Wishlist and Recommendations</h2>
            <div className="form-group">          
                   <label>Email </label>
                <input type="email"
                 className="form control"
                 placeholder="Email" 
                 onChange = {(e)=>setEmaillog(e.target.value)}/>
           </div> 
           <div className="form-group">                          
                   <label>Password</label>
                <input type="password"
                 className="form control"
                 placeholder="Password" 
                 onChange = {(e)=>setPasswordlog(e.target.value)}/>
           </div> 
           <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>
          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}    
        </form>)}
       
    </div>)
}

export default Login;