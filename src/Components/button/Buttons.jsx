import React, {Component} from "react";
import Home from './Home';
import Away from './Away';

class Buttons extends Component{

   render(){
      return(
         <section className="buttons">

            <Home
               homeTouch={this.props.homeTouch}
               homeField={this.props.homeField}
            />
            
            <Away
               awayTouch={this.props.awayTouch}
               awayField={this.props.awayField}
            />
         </section>
      )
   }
}

export default Buttons;