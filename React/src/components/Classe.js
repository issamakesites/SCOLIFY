import React, { Component } from 'react'
import axios from 'axios';
import enfantsdark from './icons/enfantsdark.svg';
import { Outlet } from 'react-router';

export class Classe extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            classe: props.classe
        }
    }
    componentDidMount(){
        if(JSON.parse(sessionStorage.getItem('userData'))){
            axios.post('classestudents.php',JSON.stringify({
              classe: this.state.classe
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
    return (
        <div className='mesenfants'>
        <div className='mesenfants-top'>
         <div className='mesenfants-title'>
             <img src={enfantsdark} alt='mes enfants' />
             <h2>Liste des eleves</h2>
         </div>
        </div>
        <table className='mesenfants-table'>
          <tr>
            <th></th>
            <th>Nom et Prenom</th>
            <th>Date de naissance</th>
            <th>Parent</th>
          </tr>

       
      {this.state.data.map((enfant) => <tr key={enfant.id} className='enfant-row'>
      <td>
              <img className='enfant-avatar' src={'http://localhost:80/PFE/avatars/' + enfant.img} alt=""/>            
            </td>
            <td>{enfant.nom} {enfant.prenom}</td>
            <td>{enfant.naissance}</td>
            <td>{enfant.pnom} {enfant.pprenom}</td>
  </tr>
      )}
        </table>
        <Outlet />
    </div>
    )
  }
}

export default Classe