import React from "react";
import {NavLink, Redirect} from "react-router-dom";


class NavList extends React.Component{
   constructor(props){
      super(props);
      this.state = {wantsOut: false}
      this.goToLogin = this.goToLogin.bind(this);
   }

   goToLogin(event){
       this.setState({wantsOut: true})
   }

   componentWillUnmount(){
     this.props.unauthorize();
   }


  render(){
      return(
      <>
        <ul className="nav my-4">
          <li className="nav-item">
            <NavLink to="/user" className="nav-link">Main</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/user/dashboard" className="nav-link">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/user/friends" className="nav-link">Your Friends</NavLink>
          </li>

          <li className="nav-item float-right">
            <button onClick={this.goToLogin} className="btn btn-danger btn-sm">Sign Out</button>
         </li>
        </ul>

        {this.state.wantsOut && <Redirect to="/logout" />}
      </>
    )
  }
}

export default NavList;
