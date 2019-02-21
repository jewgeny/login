import React from "react";
import {NavLink, Redirect} from "react-router-dom";

class Logout extends React.Component{
  constructor(props){
     super(props);

     this.state = {isRedirectSet: false, count: 5};
  }

  componentDidMount(){
      const timer =  setInterval(() => {
        if(this.state.count === 0){
           clearInterval(timer);
            setTimeout(() => this.setState({isRedirectSet: true}), 0);
        }
        else{
           this.setState({count: this.state.count-1})
         }
       }, 1000);
    }


   render(){

     return(
      <>
        <div className="container my-3">
          <div className="jumbotron">
            <h2>In {this.state.count} sec you will switch to Login Area</h2>
            <p className="lead">Or you can click
               <NavLink to="/" className="text-primary"> here</NavLink>
            </p>
          </div>
        </div>
        {this.state.isRedirectSet && <Redirect to="/" />}
      </>
     )
   }
}

export default Logout;
