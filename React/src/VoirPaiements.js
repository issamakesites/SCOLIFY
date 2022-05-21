import React, { Component } from 'react'
import DashboardWidget from './components/DashboardWidget'
import Navbar from './components/Navbar'
import { ParentSidebar } from './components/ParentSidebar'
import dollardark from './components/icons/dollardark.svg'
import axios from 'axios'

export class VoirPaiements extends Component {
    
    constructor(props){
        super(props);
        this.state={
        data: []
       }
    }
    componentDidMount(){
        if(sessionStorage.getItem('userData')){
        axios.post('getpaiements.php',JSON.stringify({
            parent: JSON.parse(sessionStorage.getItem('userData')).userData.id
          })).then(res => 
          {
          this.setState({data: res.data});
             }).catch(err => {
               console.log(err)
             }); 
            }
      }
    render() {
        const month = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","août","Septembre","Octobre","Novembre","Decembre"];
      return (
        <div className='parent-dashboard'>
          <ParentSidebar active="paiements">
          </ParentSidebar>
          <Navbar breadcrumbs='Tableau de bord/ Paiements'></Navbar>
          <div className='parent-dashboard-widgets'>
            <div className='parent-dashboard-left margin-auto first-element'>
                   

          <div className='mesenfants'>
      <div className='mesenfants-top'>
       <div className='mesenfants-title'>
       <img src={dollardark} alt='absences' />
           <h2>Historique des paiements</h2>
       </div>
      </div>
      <table className='matieres-table top-0'>
          <tr>
            <th>Montant</th>
            <th>Mois</th>
            <th>Année</th>
            <th>Date de paiement</th>
            <th>Methode de paiement</th>
          </tr>
          {this.state.data.map((paiement) => <tr key={paiement.id} className='matiere-row'>
<td className='montant-td'><strong>{paiement.montant}</strong> <span>MAD</span></td>
<td>{month[paiement.mois -1]}</td>
<td>{paiement.annee}</td>
<td>{paiement.datepaiement}</td>
<td>{paiement.methode}</td>
</tr>
)}
        </table>
  </div>  
  <div className="mesenfants">
                        <p>Pour vos virements: <br/><br />
                        <strong>RIB: </strong> 007 763 0007631000000042 58
                        <br/></p>
                    </div>
              
            </div>
          </div>
    
        </div>
      )
      }
}

export default VoirPaiements


