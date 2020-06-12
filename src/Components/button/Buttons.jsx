import React, {Component} from "react";

class Buttons extends Component{
   constructor(){
      super();
   }

   render(){
      return(
         <section className="buttons">
            <div className="homeButtons">
               {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
               <button className="homeButtons__touchdown" onClick={this.homeTouch}>Home Touchdown</button>
               <button className="homeButtons__fieldGoal" onClick={this.homeField}>Home Field Goal</button>
            </div>
            <div className="awayButtons">
               <button className="awayButtons__touchdown" onClick={this.awayTouch}>Away Touchdown</button>
               <button className="awayButtons__fieldGoal" onClick={this.awayField}>Away Field Goal</button>
            </div>
         </section>
      )
   }
}

export default Buttons;