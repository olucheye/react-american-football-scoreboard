import React, { Component } from "react";

class Home extends Component{

   render(){
      return(
         <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{this.props.homeScore}</div>
         </div>
      )
   }
}

export default Home;