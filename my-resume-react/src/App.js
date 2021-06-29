import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css"
import Navbar from './components/Navbar'
import About from './components/About'



function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Route exact path="/" component={About}/>
      </Router>
      

    </div>

  );
}

export default App;
