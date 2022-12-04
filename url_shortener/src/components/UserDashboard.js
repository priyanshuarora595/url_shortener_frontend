import React from "react";
import { AllUrls } from './allUrls';
// import {Redirect} from './components/Redirect'
import { AddUrl } from './addUrl';
import {Header} from './Header';
import {Footer} from './Footer';
import { BrowserRouter as Router  } from 'react-router-dom';

export const UserDashboard = () => {


    const loadLocalStorage = () =>{
        let userData = localStorage.getItem("userData")
        return userData;
      }


    
    console.log(loadLocalStorage());
    return(
        <>
        <Router>
        
        <Header />
        {loadLocalStorage() &&
        <>
        <AddUrl />
        <div className='container'>
            < AllUrls />
        </div>
        </>
        }
        <Footer />
        
        </Router>
        </>
    )
    
}