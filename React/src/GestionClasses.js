import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { ParentSidebar } from './components/ParentSidebar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import edit from './components/icons/edit.svg'
import EmploiTitle from './components/EmploiTitle'
import GestionClassesRow from './components/GestionClassesRow'
import search  from './components/icons/search.svg'

export class GestionClasses extends Component {
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
      //e.preventDefault();
      if(this.cle && this.nom && this.emploi)
      axios.post("addclasse.php", JSON.stringify({
        cle:this.cle,
        nom:this.nom,
        emploi:this.emploi
        })).then(
        (res) => {
          console.log(res.data)
       if(JSON.stringify(res.data).includes("success")){
        this.setState({success:'Ajout avec success'});
        window.location.reload(false);
        
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
    query : "SELECT id_classe as cle,nom,emploi_du_temps as emploi from classe WHERE nom LIKE '%"+this.state.recherche+"%' or id_classe LIKE '%"+this.state.recherche+"%'"
  })).then(
    (res) =>  {
      console.log("ad:"+res.data)
      this.setState({data: res.data})
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
          axios.post("getclasses.php", JSON.stringify({
             id: "0",
           })).then(
            (res) => {
             console.log("classes:"+res.data)
            this.setState({data: res.data})
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
          <p>Ajouter une classe</p>
          <label for="cle">numero de la classe:</label><br />
          <input type="number" name='cle' onChange={e => this.cle = e.target.value} /><br />
          <label for="nom">nom:</label><br />
          <input type="text" name='nom' onChange={e => this.nom = e.target.value} /><br />
          <label for="emploi">emploi du temps:</label><br />
          <input type="text" name='emploi' onChange={e => this.emploi = e.target.value} /><br />
          <br /><button type='submit'>Ajouter</button>
        </form>
        <p>{this.state.success}</p>
        </div>}
        <ParentSidebar active="classes"></ParentSidebar>
        <Navbar breadcrumbs='Tableau de bord/ Gestion des classes'></Navbar>
        <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
                <EmploiTitle content="Gestion des utilisateurs"></EmploiTitle>
                <div className='mesenfants'>
                <div className='mesenfants-top'>
                <div className='mesenfants-title'>
                <div className='gestion-top-flex'>
                  <form className='chercheruser-form' onSubmit={this.handleSubmit}>
                  <p>Rechercher une classe</p>
                  <div className='inputset'>
                    <input type="text" value={this.state.recherche}  onChange={this.handleChange.bind(this)} 
                    placeholder="rechercher par numero de classe ou par nom"/>
                  <button type='submit'><img src={search} /></button>
                  </div>
                  
                  </form>
                  <button className='ajouter' onClick={this.toggleAdd.bind(this)}>Ajouter une classe</button>
                </div>
                  
                <table className='matieres-table'>
                  
                  
          <tr>
            <th>Numero</th>
            <th>Nom</th>
            <th>Emploi du temps</th>
            <th></th>
          </tr>
      {this.state.data.map((classe) => 
            <GestionClassesRow recherche={this.state.recherche}
            nom={classe.nom}  id={classe.cle} emploi={classe.emploi}/>
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
        <ParentSidebar active="classes"></ParentSidebar>
        <Navbar breadcrumbs='Tableau de bord/ Gestion des utilisateurs'></Navbar>
        <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
                <EmploiTitle content="Gestion des utilisateurs"></EmploiTitle>
                <div className='mesenfants'>
                <div className='mesenfants-top'>
                <div className='mesenfants-title'>
                <div className='gestion-top-flex'>
                  <form className='chercheruser-form' onSubmit={this.handleSubmit}>
                  <p>Rechercher une classe</p>
                  <div className='inputset'>
                    <input type="text" value={this.state.recherche}  onChange={this.handleChange.bind(this)} 
                    placeholder="rechercher par numero de classe ou par nom"/>
                  <button type='submit'><img src={search} /></button>
                  </div>
                  
                  </form>
                  <button className='ajouter' onClick={this.toggleAdd.bind(this)}>Ajouter une classe</button>
                </div>
                <p>aucune classe a ete trouve</p>
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

export default GestionClasses