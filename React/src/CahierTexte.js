import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { ParentSidebar } from './components/ParentSidebar'
import EmploiTitle from './components/EmploiTitle'
import taches from './components/icons/taches.svg'
import axios from 'axios'
import Tache from './components/Tache'
import SelectEnfant from './components/SelectEnfant'

export class CahierTexte extends Component {
    constructor(props){
        super(props)
        this.state= {
            data: [],

        }
    }
    componentDidMount(){
      if(sessionStorage.getItem('userData')){
        let currentuser = JSON.parse(sessionStorage.getItem('userData'))
        let role = currentuser.userData.role
        if(role=="eleve")
            axios.post("gettasks.php", JSON.stringify({
             id: JSON.parse(sessionStorage.getItem('userData')).userData.id,
           })).then(
            (res) => {
             console.log("eleve:"+res.data)
            this.setState({data: res.data})
          }
          ).catch(
            err => console.log(err)
          )
        if(role == "parent")
           if(sessionStorage.getItem('selectedEnfant'))
        axios.post("gettasks.php", JSON.stringify({
          id: JSON.parse(sessionStorage.getItem('selectedEnfant')),
        })).then(
         (res) => {
          console.log("eleve:"+res.data)
         this.setState({data: res.data})
       }
       ).catch(
         err => console.log(err)
       )
          }
        }
    
  render() {
    if(sessionStorage.getItem('userData')){
      let currentuser = JSON.parse(sessionStorage.getItem('userData'))
      let role = currentuser.userData.role
      if(role == "parent")
      if(JSON.parse(sessionStorage.getItem('selectedEnfant')))
      if(this.state.data.length>0)
      return (
    <div className='parent-dashboard'>
    <ParentSidebar>
    </ParentSidebar>
    <Navbar breadcrumbs='Tableau de bord/ Cahier de textes'></Navbar>
    <div className='parent-dashboard-widgets'>
      <div className='parent-dashboard-left margin-auto first-element'>
      <EmploiTitle content="Cahier de textes " eleve={JSON.parse(sessionStorage.getItem('selectedEnfant'))}></EmploiTitle>
      <div className='mesenfants'>
    <div className='mesenfants-top'>
     <div className='mesenfants-title'>
         <img src={taches} alt='mes enfants' />
         <h2>Liste des taches</h2>
     </div>
    </div>
    <table className='matieres-table'>
    <tr>
        <th>Tache</th>
        <th>Matiere</th>
        <th>Date</th>
        <th>Dernier delais</th>
        <th>Etat</th>
        <th></th>
      </tr>
  
        {this.state.data.map((tache) => 
  <Tache key={tache.id} tacheid={tache.id} tache={tache.tache} matiere={tache.matiere} 
  date={tache.dateprof} deadline={tache.deadline} etat={tache.etat}
  ></Tache>
  )}
      </table>
  </div>  
  <SelectEnfant></SelectEnfant>
      </div>
    </div>
  
  </div>
  
  )
  else return (
    <div className='parent-dashboard'>
    <ParentSidebar>
    </ParentSidebar>
    <Navbar breadcrumbs='Tableau de bord/ Cahier de textes'></Navbar>
    <div className='parent-dashboard-widgets'>
      <div className='parent-dashboard-left margin-auto first-element'>
      <EmploiTitle content="Cahier de textes " eleve={JSON.parse(sessionStorage.getItem('selectedEnfant'))}></EmploiTitle>
      <div className='mesenfants'>
    <div className='mesenfants-top'>
     <div className='mesenfants-title'>
         <img src={taches} alt='mes enfants' />
         <h2>Liste des taches</h2>
     </div>
    </div>
   <p className='success-para'>Aucune tache pour cet eleve</p>
  </div>  
  <SelectEnfant></SelectEnfant>
      </div>
    </div>
  
  </div>
  
  )
  else 
  return (
    <div className='parent-dashboard'>
    <ParentSidebar>
    </ParentSidebar>
    <Navbar breadcrumbs='Tableau de bord/ Cours'></Navbar>
    <div className='parent-dashboard-widgets'>
      <div className='parent-dashboard-left margin-auto first-element'>
      <div class="mesenfants">
        <p>Veuillez selectionner un de vos enfants.</p>
        <SelectEnfant></SelectEnfant>
      </div>
      </div>
    </div>

  </div>
  )
if(role == "eleve")
return  (
  <div className='parent-dashboard'>
  <ParentSidebar>
  </ParentSidebar>
  <Navbar breadcrumbs='Tableau de bord/ Cahier de textes'></Navbar>
  <div className='parent-dashboard-widgets'>
    <div className='parent-dashboard-left margin-auto first-element'>
    <EmploiTitle content="Cahier de textes " eleve={JSON.parse(sessionStorage.getItem('userData')).userData.id}></EmploiTitle>
    <div className='mesenfants'>
  <div className='mesenfants-top'>
   <div className='mesenfants-title'>
       <img src={taches} alt='mes enfants' />
       <h2>Liste des taches</h2>
   </div>
  </div>
  <table className='matieres-table'>
  <tr>
      <th>Tache</th>
      <th>Matiere</th>
      <th>Date</th>
      <th>Dernier delais</th>
      <th>Etat</th>
      <th></th>
    </tr>

      {this.state.data.map((tache) => 
<Tache key={tache.id} tacheid={tache.id} tache={tache.tache} matiere={tache.matiere} 
date={tache.dateprof} deadline={tache.deadline} etat={tache.etat}
></Tache>
)}
    </table>
</div>  

    </div>
  </div>

</div>
)
    }
    
  }
}

export default CahierTexte