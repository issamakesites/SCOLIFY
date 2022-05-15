import React, { Component } from 'react'
import axios from 'axios'
import absence from './icons/absence.svg'


export class Absences extends Component {
    constructor(props){
        super(props);
        this.state = {
            eleve: props.eleve
        }
    }
    componentDidMount(){
        axios.post('getabsences.php',JSON.stringify({
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
       <img src={absence} alt='absences' />
           <h2>Absences</h2>
       </div>
      </div>
      <table className='matieres-table top-0'>
          <tr>
            <th>Heure</th>
            <th>Enseignant</th>
            <th>Matiere</th>
          </tr>

       
          {this.state.data.map((absence) => <tr key={absence.id} className='matiere-row'>
            <td>{absence.heure}</td>
            <td>{absence.profnom} {absence.profprenom}</td>
            <td>{absence.matiere}</td>
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
         <img src={absence} alt='absences' />
             <h2>Absences</h2>
         </div>
        </div>
        <p className='success-para'>Aucune absence.</p>
    </div>  
      )
}
}

export default Absences