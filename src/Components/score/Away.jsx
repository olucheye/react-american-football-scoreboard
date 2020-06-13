import React, { Component } from "react";

class Away extends Component{
   
   render(){
      return(
         <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{this.props.awayScore}</div>
         </div>
      )
   }
}

export default Away;