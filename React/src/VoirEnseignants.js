import React, { Component } from 'react'
import DashboardWidget from './components/DashboardWidget'
import Navbar from './components/Navbar'
import { ParentSidebar } from './components/ParentSidebar'
import Mesenfants from './MesEnfants'
import { Navigate } from 'react-router'
import ProfsTable from './components/ProfsTable'
import SelectEnfant from './components/SelectEnfant'

export class VoirEnseignants extends Component {
  render() {
    if(sessionStorage.getItem('userData')){
      let currentuser = JSON.parse(sessionStorage.getItem('userData'))
       let role = currentuser.userData.role
  return (
    <div className='parent-dashboard'>
      <ParentSidebar active="enseignants">
      </ParentSidebar>
      <Navbar breadcrumbs='Tableau de bord/ Enseignants'></Navbar>
      <div className='parent-dashboard-widgets'>
        <div className='parent-dashboard-left margin-auto first-element'>
          <ProfsTable role={role}></ProfsTable>
        </div>
      </div>
    </div>
  )
    }
  else 
  return <Navigate to="/login"></Navigate>
   
  }
}
export default VoirEnseignants