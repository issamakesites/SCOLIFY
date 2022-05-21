import React, { Component } from 'react'
import MesClasses from './components/MesClasses'
import { ParentSidebar } from './components/ParentSidebar'
import Navbar from './components/Navbar'

export class ProfClasses extends Component {
  render() {
      if(JSON.parse(sessionStorage.getItem('userData')).userData.role == "prof") 
      return (
        <div className='parent-dashboard'>
        <ParentSidebar active="classes">
        </ParentSidebar>
        <Navbar breadcrumbs='Tableau de bord/ Mes Classes'></Navbar>
        <div className='parent-dashboard-widgets'>
        <div className='parent-dashboard-left margin-auto first-element'>
        <MesClasses></MesClasses>
        </div>
        </div>
        </div>
    )
  }
}

export default ProfClasses