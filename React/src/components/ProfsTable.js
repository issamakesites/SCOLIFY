import React, { Component } from 'react'
import axios from 'axios'
import teacherdark from './icons/teacherdark.svg'
import SelectEnfant from './SelectEnfant'


export class ProfsTable extends Component {
  constructor(props){
      super(props)
      this.state = {
          data: [],
          role: props.role
      }
  }

  componentDidMount(){
 //   this.setState({eleve: 1})
  if(this.state.role == "parent"){
    let currentid = JSON.parse(sessionStorage.getItem('userData'));
    currentid = currentid.userData.id;
    this.setState({eleve: JSON.parse(sessionStorage.getItem('selectedEnfant'))}) 
    
    axios.post("getprofs.php", JSON.stringify({
      eleve: JSON.parse(sessionStorage.getItem('selectedEnfant')),
      id: currentid,
      role: "parent"
      })).then(
      (res) => {
      console.log(res.data)
      this.setState({data: res.data})
    }
    ).catch(
      err => console.log(err)
    )
  
  }
  if(this.state.role == "eleve"){
    let currentid = JSON.parse(sessionStorage.getItem('userData'));
    currentid = currentid.userData.id;
    this.setState({eleve: JSON.parse(sessionStorage.getItem('selectedEnfant'))}) 
    axios.post("getprofs.php", JSON.stringify({
      eleve: JSON.parse(sessionStorage.getItem('userData')).userData.id,
      role: "eleve"
      })).then(
      (res) => {
      console.log(res.data)
      this.setState({data: res.data})
    }
    ).catch(
      err => console.log(err)
    )
  }  
  }

  render() {
  if(this.state.role == "parent")
    if(JSON.parse(sessionStorage.getItem('selectedEnfant')))
    return (
        <div className='mesenfants'>
        <div className='mesenfants-top'>
         <div className='mesenfants-title'>
             <img src={teacherdark} alt='mes enfants' />
             <h2>Liste des enseignants</h2>
         </div>
        </div>
        <table className='mesenfants-table'>
          <tr>
            <th></th>
            <th>Nom et Prenom</th>
            <th>Matiere</th>
            <th>Contact</th>
            <th>Eleve</th>
          </tr>

       
      {this.state.data.map((enseignant) => <tr key={enseignant.id} className='enfant-row'>
            <td>
              <img className='enfant-avatar' src={'http://localhost:80/PFE/avatars/' + enseignant.img} alt=""/>            
            </td>
            <td>{enseignant.nom} {enseignant.prenom}</td>
            <td>{enseignant.matiere}</td>
            <td>{enseignant.contact}</td>
            <td>{enseignant.elevenom} {enseignant.eleveprenom}</td>
      </tr>
      )}
        </table>

        <SelectEnfant></SelectEnfant>
    </div>
    )
    else 
    return(
      <div className='mesenfants'>
        <p>Veuillez selectionner un de vos enfants.</p>
     <SelectEnfant></SelectEnfant>
    </div>
    )
  if(this.state.role == "eleve")
    return (
      <div className='mesenfants'>
      <div className='mesenfants-top'>
      <div className='mesenfants-title'>
         <img src={teacherdark} alt='mes enfants' />
         <h2>Liste des enseignants</h2>
      </div>
      </div>
      <table className='mesenfants-table'>
        <tr>
         <th></th>
         <th>Nom et Prenom</th>
         <th>Matiere</th>
         <th>Contact</th>
          <th>Eleve</th>
        </tr>
      {this.state.data.map((enseignant) => <tr key={enseignant.id} className='enfant-row'>
        <td>
          <img className='enfant-avatar' src={'http://localhost:80/PFE/avatars/' + enseignant.img} alt=""/>            
        </td>
        <td>{enseignant.nom} {enseignant.prenom}</td>
        <td>{enseignant.matiere}</td>
        <td>{enseignant.contact}</td>
        <td>{enseignant.elevenom} {enseignant.eleveprenom}</td>
       </tr>
      )}
    </table>

    </div>
  )
  }
}

export default ProfsTable