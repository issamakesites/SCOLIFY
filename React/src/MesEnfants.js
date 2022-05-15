import React, { Component } from 'react'
import enfantsdark from './components/icons/enfantsdark.svg'
import axios from 'axios'
import edit from './components/icons/edit.svg'
import { Link, Navigate, Outlet } from 'react-router-dom'
import RetardMin from './components/RetardMin'
import AbsenceMin from './components/AbsenceMin'

export class Mesenfants extends Component {
  

  constructor(props) {
    super(props)
      this.state = {
        data: []
              }
      }
      // axios for http requests
      componentDidMount(){
        //get request
        let currentid = JSON.parse(sessionStorage.getItem('userData'))
        currentid = currentid.userData.id
        axios.post('mesenfants.php',JSON.stringify({
          id: currentid
        })).then(res => 
        {
        //console.log(res);  
        this.setState({data: res.data});
           }).catch(err => {
             console.log(err)
           }); 
        }
    render() {
      if(sessionStorage.getItem('userData'))
    return (
      <div className='mesenfants'>
          <div className='mesenfants-top'>
           <div className='mesenfants-title'>
               <img src={enfantsdark} alt='mes enfants' />
               <h2>Mes Enfants</h2>
           </div>
          </div>
          <table className='mesenfants-table'>
            <tr>
              <th></th>
              <th>Nom et Prenom</th>
              <th>Niveau</th>
              <th>Classe</th>
              <th>Retards</th>
              <th>Absences</th>
              <th></th>
            </tr>

         
        {this.state.data.map((enfant) => <tr key={enfant.id} className='enfant-row'>
        <td>
                <img className='enfant-avatar' src={'http://localhost:80/PFE/avatars/' + enfant.img} alt=""/>            
              </td>
              <td>{enfant.nom} {enfant.prenom}</td>
              <td>{enfant.niveau}</td>
              <td>{enfant.classenom}</td>
              <td><RetardMin id={enfant.id} ></RetardMin></td>
              <td><AbsenceMin id={enfant.id} ></AbsenceMin></td>
              <td><Link to={`/dashboard/edit/${enfant.id}`}><img src={edit} className="enfants-edit-img" alt='' /></Link></td>
        </tr>
        )}
          </table>
          <Outlet />
      </div>
    )
    else 
    return(<Navigate to="/login" />)
  }
}

export default Mesenfants