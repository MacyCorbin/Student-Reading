 import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";

import Student from "./pages/Student";
import Books from "./pages/Books";  
import "./App.css"

import Search from "./pages/Search";
import Saved from "./pages/Saved";
import StudentProgress from "./pages/StudentProgress";
/* import Nav from "./components/Nav";
import Header1 from "./components/Header1"; */




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
         <Route exact path="/" component={Main} />
          <Route exact path="/books" component={Books}/>
          <Route exact path="/student" component={Student} /> 
          <Route exact path="/teacher" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
          <Route exact path="/StudentProgress" component={StudentProgress}/>
 
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
