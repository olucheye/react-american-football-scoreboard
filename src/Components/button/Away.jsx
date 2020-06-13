import React, { Component } from "react";

class Away extends Component{
   
   render(){
      return(
         <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={this.props.awayTouch}>Away Touchdown</button>
            <button className="awayButtons__fieldGoal" onClick={this.props.awayField}>Away Field Goal</button>
         </div>
      )
   }
}

export default Away;