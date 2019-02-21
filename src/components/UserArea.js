import React from "react";
import NavList from "./Navlist";
import {Route} from "react-router-dom";

class User extends React.Component{
   render(){
     return(
       <>
        <div className="container">
           <NavList unauthorize={this.props.unauthorize} />
            <div className="jumbotron">
              <Route exact path="/user/" render={() => <h2>Welcome home, {this.props.formProps.userName}</h2>}/>
              <Route path="/user/dashboard" render={() => <h2>{this.props.formProps.userName}, that is your dashboard </h2>}/>
              <Route path="/user/friends" render={() => <h2>{this.props.formProps.userName}, that are your friends</h2>}/>
            </div>
        </div>
      </>
     )
   }
}

export default User;
