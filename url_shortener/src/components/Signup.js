import React from "react";
import "./signup.css";
import { useState , useEffect  } from "react";
import {useNavigate} from 'react-router-dom';

const SignUpForm = () => {
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    useEffect(()=>{
        if(error){
          setError(error)
        }
},[error])


    const navigate = useNavigate();

    const SignupUser = async (event) =>{
        // event.preventDefault();
        console.log("singup user hit in react");

        const userObj = {
            "fullName": fname+" "+lname,
            "email" : email,
            "password" : password, 
            "username" : username
        }

        var result = await fetch("http://localhost:8080/auth/signup/",
        {
            body : JSON.stringify(userObj),
            method : "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        });

        result = await result.json()
        console.log(result);

        if(result.status===400){
            setError(result.message); 
          }
  
          else if(result.status===200 && result.extra.token){
            localStorage.setItem("userData",JSON.stringify(result.data));
            localStorage.setItem("token",JSON.stringify(result.extra.token));
            setEmail("");
            setPassword("");
            setFname("");
            setLname("");
            setPassword("");
            navigate("/");
          }

    }


  return (
    <div className="wrapper">
        <div className="form-left">
            <h2 style={{color:"red"}}>{error}</h2>
            <h2 className="text-uppercase">information</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.
            </p>
            <p className="text">
                <span>Sub Head:</span>
                Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.
            </p>
            <div className="form-field">
                <input type="submit" className="account" value="Have an Account?" />
            </div>
        </div>
        <form className="form-right">
            <h2 className="text-uppercase">Registration form</h2>
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label>First Name</label>
                    <input type="text" name="first_name" id="first_name" className="input-field" onChange={(val)=>{
                        setFname(val.target.value);
                        console.log(val.target.value)
                    }} />
                </div>
                <div className="col-sm-6 mb-3">
                    <label>Last Name</label>
                    <input type="text" name="last_name" id="last_name" className="input-field" onChange={(val)=>{
                        setLname(val.target.value);
                        console.log(val.target.value)
                    }} />
                </div>
            </div>
            <div className="mb-3">
                <label>Your Email</label>
                <input type="email" className="input-field" name="email" required onChange={(val)=>{
                        setEmail(val.target.value);
                        console.log(val.target.value)
                    }} />
            </div>
            <div className="mb-3">
                <label>Your Username</label>
                <input type="Username" className="input-field" name="email" required onChange={(val)=>{
                        setUsername(val.target.value);
                        console.log(val.target.value)
                    }} />
            </div>
            <div className="row">
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" name="pwd" id="pwd" className="input-field" onChange={(val)=>{
                        setPassword(val.target.value);
                        console.log(val.target.value)
                    }} />
                </div>
                
            </div>
            
            <div className="form-field">
                <input type="button" onClick={()=>{SignupUser()}} value="Register" className="register" name="register" />
            </div>
        </form>
    </div>
  );
};

export default SignUpForm;
