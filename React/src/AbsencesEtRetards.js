import React, { Component } from 'react'
import SelectEnfant from './components/SelectEnfant'
import Navbar from './components/Navbar'
import { ParentSidebar } from './components/ParentSidebar'
import { Navigate } from 'react-router'
import Absences from './components/Absences'
import Retards from './components/Retards'
import EmploiTitle from './components/EmploiTitle'


export class AbsencesEtRetards extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    render() {
        if(sessionStorage.getItem('userData')){
          let currentuser = JSON.parse(sessionStorage.getItem('userData'))
           let role = currentuser.userData.role
          if(role =="parent")
          if(JSON.parse(sessionStorage.getItem('selectedEnfant')))
      return (
        <div className='parent-dashboard'>
          <ParentSidebar  active="absences">
          </ParentSidebar>
          <Navbar breadcrumbs='Tableau de bord/ Absences et retards'></Navbar>
          <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
            <SelectEnfant></SelectEnfant>
            <EmploiTitle eleve={JSON.parse(sessionStorage.getItem('selectedEnfant'))} content="Absences et retards de "></EmploiTitle>
            <Absences eleve={JSON.parse(sessionStorage.getItem('selectedEnfant'))}></Absences>
            <Retards eleve={JSON.parse(sessionStorage.getItem('selectedEnfant'))}></Retards>
            </div>
          </div>
    
        </div>
      )
      else 
      return (
        <div className='parent-dashboard'>
        <ParentSidebar  active="absences">
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
      return (
        <div className='parent-dashboard'>
          <ParentSidebar  active="absences">
          </ParentSidebar>
          <Navbar breadcrumbs='Tableau de bord/ Absences et retards'></Navbar>
          <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
            <EmploiTitle eleve={JSON.parse(sessionStorage.getItem('userData')).userData.id} content="Absences et retards de "></EmploiTitle>
            <Absences eleve={JSON.parse(sessionStorage.getItem('userData')).userData.id}></Absences>
            <Retards eleve={JSON.parse(sessionStorage.getItem('userData')).userData.id}></Retards>
            </div>
          </div>
        </div>
      )
        }
      else 
      return <Navigate to="/login"></Navigate>
       
      }
}

export default AbsencesEtRetards