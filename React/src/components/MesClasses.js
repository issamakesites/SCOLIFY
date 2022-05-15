import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import enfantsdark from "./icons/enfantsdark.svg"
import { Outlet } from 'react-router';
import { Navigate } from 'react-router';

export class MesClasses extends Component {
    constructor(props) {
        super(props)
          this.state = {
            data: []
                  }
          }
          // axios for http requests
          componentDidMount(){
            //get request
            if(JSON.parse(sessionStorage.getItem('userData'))){
                axios.post('mesclasses.php',JSON.stringify({
                  id: JSON.parse(sessionStorage.getItem('userData')).userData.id
                })).then(res => 
                {
                console.log(res.data);  
                this.setState({data: res.data});
                   }).catch(err => {
                     console.log(err)
                   }); 
            }
            
            }
        render() {
          if(sessionStorage.getItem('userData'))
        return (
          <div className='mesenfants'>
              <div className='mesenfants-top'>
               <div className='mesenfants-title'>
                   <img src={enfantsdark} alt='mes enfants' />
                   <h2>Mes Classes</h2>
               </div>
              </div>
              <table className='matieres-table'>
                <tr>
                  <th>Classe</th>
                  <th>Matiere</th>
                  <th>Emploi du temps</th>
                </tr>
    
             
            {this.state.data.map((classe) => <tr key={classe.id_classe} className='matiere-row'>
                  <td><Link to={"/dashboard/mes-classes/"+classe.id_classe}>{classe.nom}</Link></td>
                  <td>{classe.matierenom}</td>
                  <td><a href={classe.emploi_du_temps}>Teclecharger</a></td>
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

export default MesClasses