import React, { Component } from 'react'
import axios from 'axios'
import SelectEnfant from './components/SelectEnfant'
import Matieres from './components/Matieres'
import Navbar from './components/Navbar'
import { ParentSidebar } from './components/ParentSidebar'
import { Navigate } from 'react-router'

export class Cours extends Component {
 
  render() {
    if(sessionStorage.getItem('userData')){
      let currentuser = JSON.parse(sessionStorage.getItem('userData'))
      let role = currentuser.userData.role
      if(role == "parent") 
       if(JSON.parse(sessionStorage.getItem('selectedEnfant')))
       return (
         <div className='parent-dashboard'>
          <ParentSidebar active="cours">
         </ParentSidebar>
         <Navbar breadcrumbs='Tableau de bord/ Cours'></Navbar>
         <div className='parent-dashboard-widgets'>
         <div className='parent-dashboard-left margin-auto first-element'>
         <SelectEnfant></SelectEnfant>
         <Matieres eleve={JSON.parse(sessionStorage.getItem('selectedEnfant'))}></Matieres>
         </div>
         </div>
         </div>
             )
       else 
        return (
          <div className='parent-dashboard'>
          <ParentSidebar active="cours">
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
          <ParentSidebar active="cours">
          </ParentSidebar>
          <Navbar breadcrumbs='Tableau de bord/ Cours'></Navbar>
          <div className='parent-dashboard-widgets'>
          <div className='parent-dashboard-left margin-auto first-element'>
          <Matieres eleve={JSON.parse(sessionStorage.getItem('userData')).userData.id}></Matieres>
          </div>
          </div>
          </div>
              )
        }
        else 
        return <Navigate to="/login"></Navigate>
   
  }
}

export default Cours