import React, { Component } from 'react'
import SelectEnfant from './components/SelectEnfant'
import Navbar from './components/Navbar'
import { ParentSidebar } from './components/ParentSidebar'
import { Navigate } from 'react-router'
import Resultats from './components/Resultats'
import EmploiTitle from './components/EmploiTitle'

export class ResultatsPage extends Component {
    render() {
        if(sessionStorage.getItem('userData')){
          let currentuser = JSON.parse(sessionStorage.getItem('userData'))
          let role = currentuser.userData.role
          if(role == "parent")
          if(JSON.parse(sessionStorage.getItem('selectedEnfant')))
      return (
        <div className='parent-dashboard'>
          <ParentSidebar active="resultats">
          </ParentSidebar>
          <Navbar breadcrumbs='Tableau de bord/ Notes'></Navbar>
          <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
            <SelectEnfant></SelectEnfant>
            <EmploiTitle content="Resultats des devoirs de " eleve={JSON.parse(sessionStorage.getItem('selectedEnfant'))}></EmploiTitle>
              <Resultats role={role}></Resultats>
            </div>
          </div>
    
        </div>
      )
      else 
      return (
        <div className='parent-dashboard'>
        <ParentSidebar active="resultats">
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
          <ParentSidebar active="resultats">
          </ParentSidebar>
          <Navbar breadcrumbs='Tableau de bord/ Notes'></Navbar>
          <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
            <EmploiTitle content="Resultats des devoirs de " eleve={JSON.parse(sessionStorage.getItem('userData')).userData.id}></EmploiTitle>
              <Resultats role={role}></Resultats>
            </div>
          </div>
    
        </div>
      )
        }
      else 
      return <Navigate to="/login"></Navigate>
       
      }
}

export default ResultatsPage