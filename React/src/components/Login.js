import React, { Component } from 'react'
import LoginLeft from './LoginLeft'

export class Login extends Component {
  render() {
    return (
      <div className='loginwrapper'>
          <LoginLeft></LoginLeft>
          <loginRight></loginRight>
      </div>
    )
  }
}

export default Login