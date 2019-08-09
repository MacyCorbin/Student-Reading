import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";

import Student from "./pages/Student";
import "./App.css"

import Search from "./pages/Search";
import Saved from "./pages/Saved";
import StudentProgress from "./pages/StudentProgress";
/* import Nav from "./components/Nav";
import Header1 from "./components/Header1"; */
import StudentRegister from "./pages/StudentRegister"
import TeacherRegister from "./pages/TeacherRegister"
import WhatWeDo from "./pages/WhatWeDo";




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {//Home page, login and register
          }
          <Route exact path="/" component={Main} />
          <Route exact path="/studentregister" component={StudentRegister} />
          <Route exact path="/teacherregister" component={TeacherRegister} />
          <Route exact path="/WhatWeDo" component={WhatWeDo} />

          {//<Route exact path="/books" component={Books}>
          }

          {/*Student page*/}
          <Route exact path="/student" component={Student} />

          {/*Teacher page*/}
          <Route exact path="/teacher" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/StudentProgress" component={StudentProgress} />


          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
