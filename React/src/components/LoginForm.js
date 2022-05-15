import React, { Component } from 'react'
import axios from 'axios'
import key from './key.svg'
import user from './user.svg'
import { Link, Navigate } from 'react-router-dom'

export class LoginForm extends Component {
  constructor(){
    super();
    this.state = {
    redirectToReferrer: false
    }
    }

  handleSubmit = e => {
    const data = {
      rdrct: false
    }
    e.preventDefault();
    if(this.login && this.password)
    axios.post("login.php", JSON.stringify({
      login: this.login,
      pass: this.password
      })).then(
      (res) => {
     if(JSON.stringify(res.data).includes("userData")){
        
      sessionStorage.setItem('userData',JSON.stringify(res.data))
      this.setState({redirectToReferrer: true});
      } 
      else 
      this.setState({erreur: "il y'a une erreur 😭"});
    }
    ).catch(
      err => console.log(err)
    )
    else 
      alert("les champs ne doivent pas etre vides");
  }
  render() { 
    if(this.state.redirectToReferrer || sessionStorage.getItem('userData')){
    return (<Navigate to="/dashboard/"/>)
    }
    
    else {
      if(this.state.erreur)
       return (
        <div className='loginform-wrapper'>
            <h1 className='loginform-title'>Se Connecter</h1>
            <p className='loginform-notice'>
            si c’est votre premiere connexion, veuillez utiliser 
            les coordonnés fournit par l’administration
            </p>
            <p className='loginform-notice warning'>
            {this.state.erreur}
            </p>
            <form className='loginform' onSubmit={this.handleSubmit}>
              <div className='logininput'>
                <img src={user} alt=""></img>
                <input onChange={e => this.login = e.target.value}  type="text" 
                placeholder='Votre Login ou e-mail'
                name='login' id='login'/>
              </div>
              <div className='logininput'>
                <img src={key} alt=""></img>
                <input onChange={e => this.password = e.target.value} 
                type="password"
                placeholder='Votre mot de passe'
                name='password' id='password'/>
              </div>
              <p>
              <Link to='' className='loginform-forgotpass'>
              vous avez oublié votre mot de passe ?
              </Link>
              </p>
              <button className='loginsubmit' type='submit'>Se Connecter</button>
            </form>
        </div>
      )
       else 
       return (
        <div className='loginform-wrapper'>
            <h1 className='loginform-title'>Se Connecter</h1>
            <p className='loginform-notice'>
            si c’est votre premiere connexion, veuillez utiliser 
            les coordonnés fournit par l’administration
            </p>
            <form className='loginform' onSubmit={this.handleSubmit}>
              <div className='logininput'>
                <img src={user} alt=""></img>
                <input onChange={e => this.login = e.target.value}  type="text" 
                placeholder='Votre Login ou e-mail'
                name='login' id='login'/>
              </div>
              <div className='logininput'>
                <img src={key} alt=""></img>
                <input onChange={e => this.password = e.target.value} 
                type="password"
                placeholder='Votre mot de passe'
                name='password' id='password'/>
              </div>
              <p>
              <Link to='' className='loginform-forgotpass'>
              vous avez oublié votre mot de passe ?
              </Link>
              </p>
              <button className='loginsubmit' type='submit'>Se Connecter</button>
            </form>
        </div>
      )
    }
  }
}

export default LoginForm
