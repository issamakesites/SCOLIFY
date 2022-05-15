import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import backpack from './icons/backpack.svg'
import NewResource from './NewResource';

export class Matieres extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      eleve: props.eleve
    }
  }

  componentDidMount(){
    axios.post('getmatieres.php',JSON.stringify({
      id: this.state.eleve
    })).then(res => 
    {
    console.log(res.data);  
    this.setState({data: res.data});
       }).catch(err => {
         console.log(err)
       }); 
  }
  render() {
    return (
      <div className='mesenfants'>
          <div className='mesenfants-top'>
           <div className='mesenfants-title'>
               <img src={backpack} />
               <h2>Liste des matieres</h2>
           </div>
          </div>
          <table className='matieres-table'>
            <tr>
              <th>Matiere</th>
              <th>Enseignant</th>
              <th>Classe</th>
              <th>Eleve</th>
            </tr>

         
            {this.state.data.map((matiere) => <tr key={matiere.enid} className='matiere-row'>
              <td><Link to={"/dashboard/cours/"+matiere.enid}>{matiere.matierenom}</Link></td>
              <td>{matiere.profnom} {matiere.profprenom}</td>
              <td>{matiere.classenom}</td>
              <td>{matiere.elevenom} {matiere.eleveprenom}</td>
              <td><NewResource enseignement={matiere.enid}></NewResource></td>
        </tr>
        )}
          </table>
      </div>   
    )
  }
}

export default Matieres