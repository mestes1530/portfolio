import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


import './App.css';

class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return(
      <div>
        <h1>Contact</h1>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mainDiv">
          <Router>
            <Link to="/home">Home</Link>
            <br></br>
            <Link to="/contact">Contact</Link>
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
