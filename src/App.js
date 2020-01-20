import React from 'react';
import './App.css';
import Navbar from './components/navBar';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
    <div className="App">
       <div className="home">
           <Navbar/>
           <Switch>
               <Route path="/home"  />
               <Route path="/about"  />
               <Route path="/shop"  />
           </Switch>

       </div>
        <Footer/>
    </div>
      </Router>
  );
}

export default App;

