// import logo from './logo.svg';

// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Login} from './components/Login';
import { About } from './components/About';
import SignUpForm from './components/Signup';
// import { AllUrls } from './components/allUrls';
import {Redirect} from './components/Redirect'
// import { AddUrl } from './components/addUrl';
import { UserDashboard } from "./components/UserDashboard";


import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';



function App() {

  const[loggedIn,setLoggedIn] = useState(false);

  

  const loadLocalStorage = () =>{
    let userData = localStorage.getItem("userData")
    return userData;
  }

  useEffect((signupLogin,loggedIn,logout)=>{
    const userData = loadLocalStorage();
    
    if(userData){
      setLoggedIn(true);
      // this.forceUpdate();
    }else{
      setLoggedIn(false);
    }
    },[loggedIn])



    // console.log(window.location.pathname);

  if(String(window.location.pathname)==="/user")
  {

    return(
      <>
      <UserDashboard />
      </>
    )
  }
  else if(String(window.location.pathname).match("/[^*]"))
  {
    console.log("hi");
    return(
      <Router>
        <Routes>
          <Route>
          <Route path = "/*" element={<Redirect/>} />
          </Route>
        </Routes>
      </Router>
    )
  }
  else{
    return(
      <>
    <Router>
      <Header title="Hello world"/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
      
    <Footer />
    </Router>
    </>
);
}
}










// import './App.css';
// import { AllUrls } from './components/allUrls';
// import {Header} from './components/Header';
// import {Redirect} from './components/Redirect'

// import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
// import { AddUrl } from './components/addUrl';

// function App() {


//   if(String(window.location.pathname).match("/[^*]"))
//   {
//     console.log("hi");
//     return(
//       <Router>
//         <Routes>
//           <Route>
//           <Route path = "/*" element={<Redirect/>} />
//           </Route>
//         </Routes>
//       </Router>
//     )
//   }
//   else{
//     return(
//       <>
//       <Router>
//       <Header/>
//       <AddUrl />
//       <div className='container'>
//           < AllUrls />
//       </div>
//         <Routes>
//           <Route path="/"  />
//         </Routes>
//       </Router>
//     </>
// );
// }
// }

export default App;

