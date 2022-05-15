import React, { Component } from 'react'
import MesClasses from './components/MesClasses';
import Navbar from './components/Navbar';
import { ParentSidebar } from './components/ParentSidebar';

export class MesEleves extends Component {
  render() {
    return (
        <div className='parent-dashboard'>
        <ParentSidebar>
        </ParentSidebar>
        <Navbar breadcrumbs='Tableau de bord/ Mes eleves'></Navbar>
        <div className='parent-dashboard-widgets'>
        <div className='parent-dashboard-left margin-auto first-element'>
        <p>Veuillez choisir une classe</p>
        <MesClasses></MesClasses>
        </div>
        </div>
        </div>
    )
  }
}

export default MesEleves