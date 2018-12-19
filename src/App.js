import React, { Component } from 'react';
import './styles/main.css';
import TimeTravel from "./components/TimeTravel/TimeTravel"

class App extends Component {
  render() {
    return (
      <div className="App h1">
        time travel app
        <TimeTravel />
      </div>
    );
  }
}

export default App;
