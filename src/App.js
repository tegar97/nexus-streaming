import logo from './logo.svg';
import {   BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from 'Pages/Home/Home';
function App() {

  return (
      <Router >
        <Switch>
          <Route path="/"><Home/></Route>
        </Switch>
      </Router>
  );
}

export default App;
