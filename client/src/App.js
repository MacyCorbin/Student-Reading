import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";

import Student from "./pages/Student";

import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/books" component={Books}/>
          <Route exact path="/student" component={Student} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
