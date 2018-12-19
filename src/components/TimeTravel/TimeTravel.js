import React, { Component } from "react";

class TimeTravel extends Component {

  render(){
    return (  
      <div>Time Travel
        <div>How far into the future do you want to go?</div>
        <input type="number" name="time " id="time" max="6" min="0"/>


      </div>
    )
  }
}

export default TimeTravel;