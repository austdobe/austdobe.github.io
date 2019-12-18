import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import DisplayNav from './components/navbar';

function App() {
  return (
    <div>
      <DisplayNav />
      <Router>
        <Switch>
          <Route exact path="/" ></Route>
          <Route exact path="/portfolio"></Route>
          <Route exact path="/contact"></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
