import React, { Component } from 'react'
import DashboardWidget from './components/DashboardWidget'
import Navbar from './components/Navbar'
import { ParentSidebar } from './components/ParentSidebar'
import Mesenfants from './MesEnfants'
import { Navigate } from 'react-router'
import Matieres from './components/Matieres'
import MesClasses from './components/MesClasses'

export class ParentDashboard extends Component {
  render() {
    if(sessionStorage.getItem('userData')){
      let currentuser = JSON.parse(sessionStorage.getItem('userData'))
      let currentid = currentuser.userData.id
      let currentname = currentuser.userData.nom
      let role = currentuser.userData.role
      if(role == 'parent')
  return (
    <div className='parent-dashboard'>
      <ParentSidebar>
      </ParentSidebar>
      <Navbar breadcrumbs='Tableau de bord'></Navbar>
      <h1 className='Welcome-name'>Bonjour Mr. {currentname}</h1> 
      <div className='parent-dashboard-widgets'>
        <div className='parent-dashboard-left'>
          <div className='parent-dashboard-top-widgets'>
            <DashboardWidget content='payments'></DashboardWidget> 
            <DashboardWidget content='retards'></DashboardWidget> 
            <DashboardWidget content='absences' phpfile='getcurrentmonthabsences.php'></DashboardWidget> 
          </div>
          <Mesenfants></Mesenfants>
        </div>
        <div className='parent-dashboard-right'>
          <DashboardWidget content='notes'></DashboardWidget> 
        </div>
      </div>

    </div>
  )
      if(role == 'eleve')
  return (
    <div className='parent-dashboard'>
      <ParentSidebar>
      </ParentSidebar>
      <Navbar breadcrumbs='Tableau de bord'></Navbar>
      <h1 className='Welcome-name'>Bonjour {currentname}</h1> 
      <div className='parent-dashboard-widgets'>
        <div className='parent-dashboard-left'>
          <div className='parent-dashboard-top-widgets'>
            <DashboardWidget content='resources'></DashboardWidget> 
            <DashboardWidget content='taches'></DashboardWidget> 
            <DashboardWidget content='mes-notes'></DashboardWidget> 
          </div>
          <Matieres eleve={JSON.parse(sessionStorage.getItem('userData')).userData.id}></Matieres>
        </div>
        <div className='parent-dashboard-right'>
          <DashboardWidget content='notes'></DashboardWidget> 
        </div>
      </div>

    </div>
  )
      if(role == 'admin')
  return (
    <div className='parent-dashboard'>
      <ParentSidebar>
      </ParentSidebar>
      <Navbar breadcrumbs='Tableau de bord'></Navbar>
      <h1 className='Welcome-name'>Bonjour Mr. {currentname}</h1> 
      <div className='parent-dashboard-widgets'>
        <div className='parent-dashboard-left admin-left'>
          <div className='parent-dashboard-top-widgets'>
            <DashboardWidget content='retardsadmin'></DashboardWidget> 
            <DashboardWidget content='retardsadmin'></DashboardWidget> 
            <DashboardWidget content='absencesadmin' phpfile='getdailyabsences.php'></DashboardWidget> 
            <DashboardWidget content='absencesadmin' phpfile='getdailyabsences.php'></DashboardWidget> 
          </div>
        </div>
      </div>

    </div>
  )
      if(role == 'prof')
  return (
    <div className='parent-dashboard'>
      <ParentSidebar>
      </ParentSidebar>
      <Navbar breadcrumbs='Tableau de bord'></Navbar>
      <h1 className='Welcome-name'>Bonjour {currentname}</h1> 
      <div className='parent-dashboard-widgets'>
        <div className='parent-dashboard-left'>
          <div className='parent-dashboard-top-widgets'>
            <DashboardWidget content='prof-eleves'></DashboardWidget> 
            <DashboardWidget content='prof-cours'></DashboardWidget> 
            <DashboardWidget content='prof-taches'></DashboardWidget> 
          </div>
          <MesClasses></MesClasses>
        </div>
        <div className='parent-dashboard-right'>
          <DashboardWidget content='notes'></DashboardWidget> 
        </div>
      </div>
    </div>
  )
    }
  else 
  return <Navigate to="/login"></Navigate>
   
  }
}
export default ParentDashboard