import React, { Component } from "react";

class Away extends Component{
   
   render(){
      return(
         <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={()=>this.props.awayTouch('awayTouch', 7)}>Away Touchdown</button>
            <button className="awayButtons__fieldGoal" onClick={()=>this.props.awayField('awayField', 3)}>Away Field Goal</button>
         </div>
      )
   }
}

export default Away;