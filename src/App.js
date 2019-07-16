import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Contact  from './pages/Contact';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="MainDiv">
        <Router>
          <Header />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Home} />
        </Router>
      </div>
    </div>
  );
}

export default App;
