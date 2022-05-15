import React from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import SelectEnfant from './components/SelectEnfant'
import Matieres from './components/Matieres'
import Navbar from './components/Navbar'
import { ParentSidebar } from './components/ParentSidebar'
import { Navigate } from 'react-router'
import MatiereDownloads from './components/matiereDownloads'


function CoursPage() {
    let params = useParams()
    console.log(params.matiere)
    if(sessionStorage.getItem('userData')){
    let currentuser = JSON.parse(sessionStorage.getItem('userData'))
    let role = currentuser.userData.role
    if(role == "parent")
    if(JSON.parse(sessionStorage.getItem('selectedEnfant')))
      return (
        <div className='parent-dashboard'>
          <ParentSidebar>
          </ParentSidebar>
          <Navbar breadcrumbs='Tableau de bord/ Cours'></Navbar>
          <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
            <SelectEnfant></SelectEnfant>
             <MatiereDownloads enseignement={params.matiere}></MatiereDownloads>
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
      return (
        <div className='parent-dashboard'>
          <ParentSidebar>
          </ParentSidebar>
          <Navbar breadcrumbs='Tableau de bord/ Cours'></Navbar>
          <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
             <MatiereDownloads enseignement={params.matiere}></MatiereDownloads>
            </div>
          </div>
    
        </div>
      )
        }
      else 
      return <Navigate to="/login"></Navigate>
       
      }

export default CoursPage