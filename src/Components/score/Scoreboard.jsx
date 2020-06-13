import BottomRow from "../../BottomRow";
import React, {Component} from "react";
import Home from './Home';
import Away from './Away';


class Scoreboard extends Component{

   render(){
      return(
         <section className="scoreboard">
            <div className="topRow">
               <Home
                  homeScore={this.props.homeScore}
               />
            
               <div className="timer">00:03</div>
            
               <Away
                  awayScore={this.props.awayScore}
               />
            </div>

            <BottomRow />
       </section>
      )
   }
}

export default Scoreboard;