import React, { Component } from 'react'
import axios from 'axios'
import retarddark from './icons/retarddark.svg'


export class Retards extends Component {
    constructor(props){
        super(props);
        this.state = {
            eleve: props.eleve
        }
    }
    componentDidMount(){
        axios.post('getretards.php',JSON.stringify({
          id: this.state.eleve
        })).then(res => 
        {
            if(res.data.length>0) 
            this.setState({data: res.data});
               }).catch(err => {
                 console.log(err)
               }); 
          }
      render() {
          if(this.state.data)
        return (
        <div className='mesenfants'>
        <div className='mesenfants-top'>
         <div className='mesenfants-title'>
            <img src={retarddark} alt='retards' />
             <h2>Retards</h2>
         </div>
        </div>
        <table className='matieres-table top-0'>
            <tr>
              <th>Heure</th>
              <th>Enseignant</th>
              <th>Matiere</th>
            </tr>

         
            {this.state.data.map((retard) => <tr key={retard.id} className='matiere-row'>
              <td>{retard.heure}</td>
              <td>{retard.profnom} {retard.profprenom}</td>
              <td>{retard.matiere}</td>
        </tr>
        )}
          </table>
    </div>      
        )
          else 
        return(
          <div className='mesenfants'>
          <div className='mesenfants-top'>
           <div className='mesenfants-title'>
           <img src={retarddark} alt='absences' />
               <h2>Absences</h2>
           </div>
          </div>
          <p className='success-para'>Aucun retard.</p>
      </div>
        )
  }
}

export default Retards