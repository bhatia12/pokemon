import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }

  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="cointainer">
          <Dashboard /> 
        </div>
      </div>
    );
  }
}

export default App;
