//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import Scoreboard from "../src/Components/score/Scoreboard"
import Buttons from "../src/Components/button/Buttons"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(32);
  const [awayScore, setAwayScore] = useState(32);

  //using switch case to loop through value
//   function calcScore(foo){
//     switch (foo) {
//         case homeTouch:
//             return setHomeScore(homeScore + 7)
//             break
//         case homeField:
//             return setHomeScore(homeScore + 3)
//             break
//         case awayTouch:
//             return setAwayScore(awayScore + 7)
//             break
//         case awayField:
//             return setAwayScore(awayScore + 3);
//         default:
//             break;
//     }
//   }


  //changes state for home TouchDown
  const homeTouch = () =>{
      return setHomeScore(homeScore + 7);
  }
  
  //change state for home FieldGoal
  const homeField = () =>{
    return setHomeScore(homeScore + 3);
  }  

  //change state for Away TouchDown
  const awayTouch = ()=>{
      return setAwayScore(awayScore + 7);
  }

  //change state for awau Field Goal
  const awayField = () =>{
    return setAwayScore(awayScore + 3);
  }  

  return (
    <div className="container">
     <Scoreboard
        homeScore={homeScore}
        awayScore={awayScore}
     />

     <Buttons
        homeTouch={homeTouch}
        homeField={homeField}
        awayTouch={awayTouch}
        awayField={awayField}
     />
    </div>
  );
}

export default App;