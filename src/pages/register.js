import React ,{useState} from "react";
import Login from "./login";
import { Alert } from "react-bootstrap";
import Home from "./../pages/home";

const Register = () =>{
    const [ firstName , setFirstName ] = useState("");
    const [ lastName , setLastName ] = useState("");
    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ confirmPassword , setconfirmPassword ] = useState("");
    const [ flag, setFlag] = useState(false);
    const [ login, setLogin ] = useState(false);
    const [ error , setError ] = useState({})

    const validateEmail = (email) =>{
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        return regex.test(email)
    }
    const validatePassword = (password) =>{
        const isWhitespace = /^(?=.*\s)/;
        if (isWhitespace.test(password)) {
          return "Password must not contain Whitespaces.";
        }
        const isContainsLowercase = /^(?=.*[A-Za-z])/;
        if (!isContainsLowercase.test(password)) {
          return "Password must have at least alphabet.";
        }

        const isContainsNumber = /^(?=.*[0-9])/;
        if (!isContainsNumber.test(password)) {
          return "Password must contain at least one Digit.";
        }
        const isValidLength = /^.{6,}$/;
        if (!isValidLength.test(password)) {
          return "Password must be 6 Characters Long.";
        }
        return "";
    }
   const handleSubmit = (e) =>{
     e.preventDefault();
    if(!firstName  || !lastName || !password || !email || !confirmPassword){
        setFlag(true);
        setError({...error, signinError :"All fields are mandatory"})
    }
    else if (!validateEmail(email)) {
        setFlag(true);
        setError({...error, emailError :"Email incorrect"})
    }
    else if(validatePassword(password) !==""){
        setFlag(true);
        setError({...error, passwordError :validatePassword(password)})
    }else if ( password !== confirmPassword ){
        setFlag(true);
        setError({...error, confirmPasswordError: "Passwords did not match" })  
     }else{
        setFlag(false);
        setError({});
        localStorage.setItem("email",JSON.stringify(email));
        localStorage.setItem("password",JSON.stringify(password));
        setLogin(!login);
     }
    }  
  
    return (<div>
        {login ?  (  <Home/>): 
        (<form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <h2> We do not share your personal details with anyone </h2>
            <div className="form-group">
                <label>First Name</label>
                <input type="text"
                 className="form control"
                 placeholder="First Name" 
                 onChange = {(e)=>setFirstName(e.target.value)}/>
            </div>   
            <div className="form-group">  
                   <label>Last Name</label>
                <input type="text"
                 className="form control"
                 placeholder="Last Name" 
                onChange = {(e)=>setLastName(e.target.value)}/>
               </div>   
             <div className="form-group">          
                   <label>Email </label>
                <input type="text"
                 className="form control"
                 placeholder="Email" 
                 onChange = {(e)=>setEmail(e.target.value)}/>
                 <p>{error.EmailError}</p>
           </div> 
           <div className="form-group">                          
                   <label>Password</label>
                <input type="password"
                 className="form control"
                 placeholder="Password" 
                 onChange = {(e)=>setPassword(e.target.value)}/>
           </div> 
            <div className="form-group">  
                   <label>Confirm Password</label>
                <input type="password"
                 className="form control"
                 placeholder="Confirm Password"
                 onChange = {(e)=>setconfirmPassword(e.target.value)}/> 
            </div>
            <button >Signup</button>
            {flag && (
                <Alert color="primary" variant="warning">
            {Object.values(error).map(el =>{
                return <div>{el}</div>
            })}
            </Alert>
          )}   
        </form>) }   
    </div>)
}

export default Register ;