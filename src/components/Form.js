import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class Form extends Component {
  render() {
    return (
      <>
        <h2 className="title display-4 text-primary text-center my-4">Welcome to our starting Page</h2>
        <div className="container my-4">
          <div className="jumbotron">
          <span className="float-right mb-2">
              <NavLink to="/anmelden" className="nav-item">Sign in</NavLink>
          </span>
            <form className="text-center" onSubmit={this.props.formProps.handleSubmit}>
              <div className="input-group mb-3 input-group-lg">
                 <div className="input-group-prepend">
                   <span className="input-group-text">Username</span>
                </div>
                <input onChange={this.props.formProps.handleChange} ident="usr" type="text" className="form-control" value={this.props.formProps.userName} />
              </div>
              <div className="input-group mb-3 input-group-lg">
                 <div className="input-group-prepend">
                   <span className="input-group-text">Password</span>
                </div>
                <input onChange={this.props.formProps.handleChange} ident="pwd" type="password" className="form-control" value={this.props.formProps.password}/>
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Log in</button>
              <span>

              </span>
            </form>
            {this.props.formProps.hasFailed && <div className="alert alert-danger my-4">Either username or password was incorrect. Try again!</div>}
          </div>
        </div>
      </>
    )
  }
}
