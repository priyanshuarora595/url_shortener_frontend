// import logo from './logo.svg';
import './App.css';
import { AllUrls } from './components/allUrls';
import {Header} from './components/Header';
import {Redirect} from './components/Redirect'

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { AddUrl } from './components/addUrl';

function App() {


  if(String(window.location.pathname).match("/[^*]"))
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
      <Header/>
      <AddUrl />
      <div className='container'>
          < AllUrls />
      </div>
        <Routes>
          <Route path="/"  />
        </Routes>
      </Router>
    </>
);
}
}

export default App;
