import React from 'react';
import './App.less';
import Navbar from './components/navBar';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home} from "./Home";
import 'antd/dist/antd.css';
function App() {
  return (
      <Router>
    <div className="App">
       <div className="home">
           <Navbar/>

           <Switch>
               <Route path="/" component={Home} />
               {/*<Route path="/about"  />*/}
               {/*<Route path="/shop"  />*/}
           </Switch>

       </div>
        <Footer/>
    </div>
      </Router>
  );
}

export default App;

