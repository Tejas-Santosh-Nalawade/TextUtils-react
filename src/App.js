import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//  BrowserRouter as Router,
//  Switch,
//  Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled","success");
      //document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
      //document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    {/*<Router>*/}
    <Navbar title="TexUtiles" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/*<Switch>*/}
          {/*<Route exact path="/about">
            <About/>
          </Route>*/}
          {/*<Route exact path="/">*/}
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>
          {/*</Route>*/}
    {/*</Switch>*/}
    </div>
    {/*</Router>*/}
    </>
  );
}

export default App;
