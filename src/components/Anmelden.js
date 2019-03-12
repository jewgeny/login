import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Anmelden extends Component{
  render(){
    return(
      <>
        <h2 className="title display-4 text-primary text-center my-4">Sign in</h2>
        <div className="container my-4">
          <div className="jumbotron">
          <span className="float-right mb-2">
              <NavLink to="/" className="nav-item">Back to home page </NavLink>
          </span>
            <form className="text-center" onSubmit={this.props.formPropsSignIn.handleSubmitSignIn}>
              <div className="input-group mb-3 input-group-lg">
                 <div className="input-group-prepend">
                   <span className="input-group-text">Username</span>
                </div>
                <input onChange={this.props.formPropsSignIn.handleChange} identsign="usrsignin" type="text" className="form-control" value={this.props.formPropsSignIn.userNameSignIn} />
              </div>
              <div className="input-group mb-3 input-group-lg">
                 <div className="input-group-prepend">
                   <span className="input-group-text">Password</span>
                </div>
                <input onChange={this.props.formPropsSignIn.handleChange} identsign="pwdsignin" type="password" className="form-control" value={this.props.formPropsSignIn.passwordSignIn}/>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Confirm</button>
              <span>

              </span>
            </form>
            {this.props.formPropsSignIn.confirmToHome &&
                        <div className="alert alert-success my-4 d-flex justify-content-between align-items-center">Go back to home page
                         <NavLink to="/">
                           <button className="btn btn-success px-5">Enter</button>
                         </NavLink>
                        </div>
            }
          </div>
        </div>
      </>
    )
  }
}

export default Anmelden;
