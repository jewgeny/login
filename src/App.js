import React, { Component } from 'react';
import Form from './components/Form';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import User from "./components/UserArea";
import Logout from "./components/Logout";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: '', password: '', hasFailed: false, isAuth: false}
    this.changeFormField = this.changeFormField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.unauthorize = this.unauthorize.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  changeFormField(event) {
    switch(event.target.getAttribute('ident')) {
      case 'usr':
        this.setState({userName: event.target.value});
        break;
        case 'pwd':
        this.setState({password: event.target.value});
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userName === 'Eugen' && this.state.password === '123') {
        this.setState({hasFailed: false, isAuth: true});
    } else {
      this.setState({hasFailed: true});
    }
  }

  unauthorize(ev){
     this.setState({isAuth: false})
  }

  resetFields(ev){
     this.setState({
        userName: "", password: ""
     })
  }

  render() {
    const formProps = {
      userName: this.state.userName,
      password: this.state.password,
      handleChange: this.changeFormField,
      handleSubmit:this.handleSubmit,
      hasFailed: this.state.hasFailed
    }

    return (
       <BrowserRouter>
         <>
             <Route exact path="/" render={() => <Form formProps={ formProps }/>} />
              <Switch>
                 <Route path="/logout" render={() => <Logout  resetFields={this.resetFields} />}/>
                 <Route path="/user" render={() => <User unauthorize={this.unauthorize} formProps={formProps} />} />
                 {this.state.isAuth && <Redirect to="/user" />}
              </Switch>

      </>
      </BrowserRouter>
    )
  }
}
