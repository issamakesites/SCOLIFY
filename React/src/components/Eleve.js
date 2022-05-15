import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import DashboardWidget from './DashboardWidget'
import { ParentSidebar } from './ParentSidebar'
import axios from 'axios'
import Navbar from './Navbar'



export default function Eleve() {
  let params = useParams()
  const url = 'http://localhost:80/pfe/geteleve.php';
  const [eleve, setEleve] = useState([]);

  let currentid = JSON.parse(sessionStorage.getItem('userData'))
  currentid = currentid.userData.id
  useEffect(() => {
    axios.post('geteleve.php',JSON.stringify({
    parentid: currentid,
    eleveid: params.eleveid
  })).then(res => 
  {
    setEleve(res.data)
    console.log(res);  
  }).catch(err =>{
    console.log(err)
  }); 
  })

  return (
    <div className='parent-dashboard'>
        <ParentSidebar></ParentSidebar>
        {eleve.map(currenteleve =>  <Navbar breadcrumbs={`Editer Enfant / ${currenteleve.nom}`} key={currenteleve.id}></Navbar>)}
        <h1 className='Welcome-name'>hhh</h1> 
        <div className='parent-dashboard-widgets'>
          <div className='dashboard-body'>
            
          </div>
        </div>
      </div>
  )
}
