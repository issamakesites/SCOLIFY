import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { ParentSidebar } from './components/ParentSidebar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import edit from './components/icons/edit.svg'
import EmploiTitle from './components/EmploiTitle'
import GestionUtilisateursRow from './components/GestionUtilisateursRow'
import search  from './components/icons/search.svg'

export class CahierTexte extends Component {
    constructor(props){
        super(props)
        this.state= {
            data: [],
            recherche: '',
            isadd: false,
            success: ''

        }
    }
    toggleAdd () {
      this.setState({
        isadd: !this.state.isadd
      })
    }
    
    handleChange(event) {  
      this.setState({recherche: event.target.value})
      console.log(this.state.recherche)
    }
    addUser = e => {
      e.preventDefault();
      if(this.login && this.password && this.prenom && this.nom && this.email && this.role)
      axios.post("adduser.php", JSON.stringify({
        login: this.login,
        password: this.password,
        prenom: this.prenom,
        nom: this.nom,
        email: this.email,
        role: this.role
        })).then(
        (res) => {
          console.log(res.data)
       if(JSON.stringify(res.data).includes("success")){
        this.setState({success:'Ajout avec success'});
        } 
        else 
        this.setState({success: "il y'a une erreur 😭"});
      }
      ).catch(
        err => console.log(err)
      )
      else 
        alert("les champs ne doivent pas etre vides");
    }
  handleSubmit = e => {
  e.preventDefault();
  axios.post("rechercheradmin.php", JSON.stringify({
    query : "SELECT id,nom,prenom,img,role,email from admin WHERE nom LIKE '%"+this.state.recherche+"%' or prenom LIKE '%"+this.state.recherche+"%' or role LIKE '%"+this.state.recherche+"%'"
  })).then(
    (res) =>  {
      console.log("ad:"+res.data)
      this.setState({data: res.data})
   }
  ).catch(
    err => console.log(err)
  )
  axios.post("rechercherprofs.php", JSON.stringify({
    query : "SELECT id,nom,prenom,img,role,contact as email from enseignants WHERE nom LIKE '%"+this.state.recherche+"%' or prenom LIKE '%"+this.state.recherche+"%' or role LIKE '%"+this.state.recherche+"%'"

    })).then(
    (res) =>  {
      console.log("ad:"+res.data)
      this.setState({data: res.data})
   }
  ).catch(
    err => console.log(err)
  )
  axios.post("recherchereleve.php", JSON.stringify({
    query : "SELECT id,nom,prenom,img,role,email from eleves WHERE nom LIKE '%"+this.state.recherche+"%' or prenom LIKE '%"+this.state.recherche+"%' or role LIKE '%"+this.state.recherche+"%'"
    })).then(
    (res) =>  {
      console.log("ad:"+res.data)
      this.setState({ data: [...this.state.data, ...res.data] })
   }
  ).catch(
    err => console.log(err)
  )
  axios.post("rechercherparents.php", JSON.stringify({
    query : "SELECT id,nom,prenom,img,role,email from parents  WHERE nom LIKE '%"+this.state.recherche+"%' or prenom LIKE '%"+this.state.recherche+"%' or role LIKE '%"+this.state.recherche+"%'"
    })).then(
    (res) =>  {
      console.log("ad:"+res.data)
      this.setState({ data: [...this.state.data, ...res.data] })

   }
  ).catch(
    err => console.log(err)
  )
}

    componentDidMount(){
      if(sessionStorage.getItem('userData')){
        let currentuser = JSON.parse(sessionStorage.getItem('userData'))
        let role = currentuser.userData.role
        if(role=="admin"){
          axios.post("getusersadmins.php", JSON.stringify({
             id: "0",
           })).then(
            (res) => {
             console.log("users:"+res.data)
            this.setState({data: res.data})
          }
          ).catch(
            err => console.log(err)
          )
          axios.post("getusers.php", JSON.stringify({
             id: "0",
           })).then(
            (res) => {
             console.log("users:"+res.data)
            this.setState({ data: [...this.state.data, ...res.data] })
          }
          ).catch(
            err => console.log(err)
          )
          axios.post("getusersprofs.php", JSON.stringify({
             id: "0",
           })).then(
            (res) => {
             console.log("users:"+res.data)
             this.setState({ data: [...this.state.data, ...res.data] })
          }
          ).catch(
            err => console.log(err)
          )
          axios.post("getusersparents.php", JSON.stringify({
             id: "0",
           })).then(
            (res) => {
             console.log("users:"+res.data)
             this.setState({ data: [...this.state.data, ...res.data] })
          }
          ).catch(
            err => console.log(err)
          )
        }
          }
           }
    
  render() {

    if(this.state.recherche)
    console.log(this.state.recherche)
    if(sessionStorage.getItem('userData')){
      let currentuser = JSON.parse(sessionStorage.getItem('userData'))
      let role = currentuser.userData.role
      if(role == "admin")
        if(this.state.data.length>0)
      return (
    <div className='parent-dashboard'>
      {this.state.isadd && 
      <div className='addusermodal'>
        <button onClick={this.toggleAdd.bind(this)}>fermer</button>
        <form onSubmit={this.addUser}>
          <p>Ajouter un utilisateur</p>
          <label for="nom">Nom:</label><br />
          <input type="text" name='nom' onChange={e => this.nom = e.target.value} /><br />
          <label for="prenom">Prenom:</label><br />
          <input type="text" name='prenom' onChange={e => this.prenom = e.target.value} /><br />
          <label for="role">Veuillez choisir le Role:</label><br />
          <select name='role' onChange={e => this.role = e.target.value}><br />
            <option value="parent">Parent</option>
            <option value="prof">Enseignant</option>
            <option value="eleve">Eleve</option>
            <option value="admin">Administrateur</option>
          </select>
          <label for="login">Login:</label><br />
          <input type="text" name='login' onChange={e => this.login = e.target.value} /><br />
          <label for="email">Adresse electronique:</label><br />
          <input type="email" name='email' onChange={e => this.email = e.target.value} /><br />
          <label for="password">Mot de passe:</label><br />
          <input type="password" name='password' onChange={e => this.password = e.target.value} /><br />
          <br /><button type='submit'>Ajouter</button>
        </form>
        <p>{this.state.success}</p>
        </div>}
        <ParentSidebar active="users"></ParentSidebar>
        <Navbar breadcrumbs='Tableau de bord/ Gestion des utilisateurs'></Navbar>
        <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
                <EmploiTitle content="Gestion des utilisateurs"></EmploiTitle>
                <div className='mesenfants'>
                <div className='mesenfants-top'>
                <div className='mesenfants-title'>
                <div className='gestion-top-flex'>
                  <form className='chercheruser-form' onSubmit={this.handleSubmit}>
                  <p>Rechercher un utilisateur</p>
                  <div className='inputset'>
                    <input type="text" value={this.state.recherche}  onChange={this.handleChange.bind(this)} placeholder="rechercher par nom,prenom ou role"/>
                  <button type='submit'><img src={search} /></button>
                  </div>
                  
                  </form>
                  <button className='ajouter' onClick={this.toggleAdd.bind(this)}>Ajouter un utilisateur</button>
                </div>
                  
                <table className='mesenfants-table'>
                  
                  
          <tr>
            <th></th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>E-mail</th>
            <th>Role</th>
            <th></th>

          </tr>
      {this.state.data.map((user) => 
            <GestionUtilisateursRow recherche={this.state.recherche} img={user.img} id={user.id} nom={user.nom} prenom={user.prenom} email={user.email} role={user.role} />
      )}
        </table>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
  )
  else 
  return (
    <div className='parent-dashboard'>
        <ParentSidebar active="users"></ParentSidebar>
        <Navbar breadcrumbs='Tableau de bord/ Gestion des utilisateurs'></Navbar>
        <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
                <EmploiTitle content="Gestion des utilisateurs"></EmploiTitle>
                <div className='mesenfants'>
                <div className='mesenfants-top'>
                <div className='mesenfants-title'>
                <div className='gestion-top-flex'>
                  <form className='chercheruser-form' onSubmit={this.handleSubmit}>
                  <p>Rehercher un utilisateur</p>
                  <div className='inputset'>
                    <input type="text" value={this.state.recherche}  onChange={this.handleChange.bind(this)} placeholder="rechercher par nom,prenom ou role"/>
                  <button type='submit'><img src={search} /></button>
                  </div>
                  
                  </form>
                  <button className='ajouter' onClick={this.toggleAdd.bind(this)}>Ajouter un utilisateur</button>
                </div>
                <p>aucun utilisateur trouve</p>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
  )

    }
    
  }
}

export default CahierTexte