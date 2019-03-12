import React, { Component } from 'react';
import Form from './components/Form';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import User from "./components/UserArea";
import Logout from "./components/Logout";
import Anmelden from "./components/Anmelden";
import "./App.css";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: '',
                  password: '',
                  hasFailed: false,
                  isAuth: false,
                  passwordSignIn: '',
                  userNameSignIn: '',
                  confirmToHome: false }

    this.changeFormField = this.changeFormField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.unauthorize = this.unauthorize.bind(this);
    this.resetFields = this.resetFields.bind(this);
    this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
    this.changeSignIn = this.changeSignIn.bind(this);
  }

  changeFormField(event) {
    switch(event.target.getAttribute('ident')) {
      case 'usr':
        this.setState({userName: event.target.value});
        break;
        case 'pwd':
        this.setState({password: event.target.value});
        break;
        default:
        return;
    }
  }

  changeSignIn(event){
    switch(event.target.getAttribute("identsign")){
      case "usrsignin":
      this.setState({userNameSignIn: event.target.value});
      break;
      case "pwdsignin":
      this.setState({passwordSignIn: event.target.value});
      break;
      default:
      return;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.userName === this.state.userNameSignIn && this.state.password === this.state.passwordSignIn) {
        this.setState({hasFailed: false,
                      isAuth: true,
                      confirmToHome: false,
                      });
    } else {
      this.setState({hasFailed: true});
    }
  }

  handleSubmitSignIn(event){
    event.preventDefault();
    this.setState({
       confirmToHome: true
    })
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

    const formPropsSignIn = {
      handleSubmitSignIn: this.handleSubmitSignIn,
      handleChange: this.changeSignIn,
      passwordSignIn: this.state.passwordSignIn,
      userNameSignIn: this.state.userNameSignIn,
      confirmToHome: this.state.confirmToHome
    }

    return (
       <BrowserRouter>
         <>
             <Route exact path="/" render={() => <Form formProps={ formProps }/>} />
             <Route path="/anmelden" render={() => <Anmelden formPropsSignIn= {formPropsSignIn} />} />
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
