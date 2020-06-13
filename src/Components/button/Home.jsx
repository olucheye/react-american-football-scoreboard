import React, { Component } from "react";

class Home extends Component{

   render(){
      return(
         <div className="homeButtons">
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button className="homeButtons__touchdown" onClick={this.props.homeTouch}>Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={this.props.homeField}>Home Field Goal</button>
         </div>
      )
   }
}

export default Home;