//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React,{ useState } from "react";
function App() {
  const [mode,setmode]=useState('light');
  const toggle=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor="#042743";
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor="white";
    }
  }
  const green = ()=>{
    document.body.style.backgroundColor = '#198754'
  }
  const yellow = ()=>{
    document.body.style.backgroundColor = '#ffc107'
  }
  const red = ()=>{
    document.body.style.backgroundColor = '#dc3545'
  }
  const purple = ()=>{
    document.body.style.backgroundColor = '#6f42c1'
  }
  return (
    //within return JSX is written
    <>
    <Router>
      <Navbar title="TEXT CASE CONVERTER" Home="Home" About="About" mode={mode} toggle={toggle} changeg={green} changey={yellow} changer={red} changep={purple}></Navbar>
      {/*<Navbar></Navbar>*/}
      <div className="container my-3">
      <Routes> 
          <Route exact path="/about" element={<About mode={mode} changeg={green} changey={yellow} changer={red} changep={purple}/>} />
          <Route exact path="/" element={<Form heading="Enter the text" mode={mode}/>} />
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;