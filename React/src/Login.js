import React, { Component } from 'react'
import LoginLeft from './components/LoginLeft'
import LoginRight from './components/LoginRight'

export class Login extends Component {
  render() {
    return (
        <div className="login animate__animated animate__fadeIn animate__slower">
        <LoginLeft></LoginLeft>
        <LoginRight></LoginRight>
      </div>
    )
  }
}

export default Login