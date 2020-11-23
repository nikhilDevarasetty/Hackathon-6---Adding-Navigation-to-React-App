import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation,
} from "react-router-dom";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
          <LocationDisplay />
        </Router>
      </div>
    );
  }
}

export function NotFound() {
  return <h3>No match</h3>;
}

export function Home() {
  return <h3>You are home</h3>;
}

export function About() {
  return <h3>You are on the about page</h3>;
}

export function LocationDisplay() {
  let location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

export default App;
