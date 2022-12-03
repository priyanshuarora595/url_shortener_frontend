import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const[loggedIn,setLoggedIn] = useState(false);

  const loadLocalStorage = () =>{
    let userData = localStorage.getItem("userData")
    return userData;
  }
  

  const signupLogin = ( <> <li className="nav-item">
  <Link to="/signup" className="nav-link">Signup</Link>
    
  </li>
  <li className="nav-item">
  <Link to="/login" className="nav-link">login</Link>
  </li></>);

  // const logout = (<><li className="nav-item"><Link to="/signup" className="nav-link">Signup</Link> </>);
  const logout = (<> <li className="nav-item">
  <Link to="/logout" className="nav-link">Logout</Link>
  </li>
  </>);


useEffect((signupLogin,loggedIn,logout)=>{
  const userData = loadLocalStorage();
  
  if(userData){
    setLoggedIn(true);
    // this.forceUpdate();
  }
  },[loggedIn])
  

  return (
    <div id="headerDiv">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          Welcome
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>

                {/* <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a> */}
              </li>
              
              
            </ul>
            
            <ul className="navbar-nav mx-4">
              { loggedIn ? 
                logout : signupLogin
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};