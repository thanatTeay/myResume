import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css"
import Navbar from './components/Navbar'
import Home from './components/Home'



function App() {
  return (
    <div className="App">
      <Router>
      <Route path='/' component={Home} />



      </Router>

    </div>

  );
}

export default App;
