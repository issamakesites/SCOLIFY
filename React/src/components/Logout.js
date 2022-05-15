import React, { Component } from 'react'

export class Logout extends Component {
    logout() {
        window.sessionStorage.clear();
        window.location.href = '/';
    }
  render() {
    return (
        <span to="#" className='logout-button' onClick={this.logout.bind()}>
        Se deconnecter
    </span>
    )
  }
}

export default Logout