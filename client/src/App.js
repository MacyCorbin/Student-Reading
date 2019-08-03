import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import StudentRegister from "./pages/StudentRegister"
import TeacherRegister from "./pages/TeacherRegister"
import Header from "./components/Header";
import Books from "./pages/Books";
import WhatWeDo from "./pages/WhatWeDo";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/studentregister" component={StudentRegister} />
          <Route exact path="/teacherregister" component={TeacherRegister} />
          <Route exact path="/WhatWeDo" component={WhatWeDo} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;
