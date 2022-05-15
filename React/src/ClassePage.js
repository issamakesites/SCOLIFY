import React from 'react'
import Classe from './components/Classe';
import { useParams } from 'react-router';
import Navbar from './components/Navbar';
import { ParentSidebar } from './components/ParentSidebar';

export default function ClassePage() {
    let params = useParams()
  
    return (
        <div className='parent-dashboard'>
          <ParentSidebar>
          </ParentSidebar>
          <Navbar breadcrumbs='Tableau de bord/ Notes au parents'></Navbar>
          <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
             <Classe classe={params.classe}></Classe>
            </div>
          </div>
      </div>
      )
}
