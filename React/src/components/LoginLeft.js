import React, { Component } from 'react'
import logofull from './logofull.svg'
import LoginForm from './LoginForm'
//Axios for get request
import axios from 'axios';
export class LoginLeft extends Component {


  render() {
    return (
      <div className='loginleft'>
        <img className='loginlogo' alt="logo" src={logofull}></img>
        <LoginForm></LoginForm>
      </div>
      
    )
  }
}

export default LoginLeft