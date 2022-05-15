import React, { Component } from 'react'
import axios from 'axios';
import SelectEnfant from './SelectEnfant';
import ResultatsTd from './ResultatsTd';
import Note from './note';

export class Resultats extends Component {
    constructor(props){
        super(props)
        this.state= {
            data: [],
            role: props.role
        }
    }
    componentDidMount(){

           let currentid = JSON.parse(sessionStorage.getItem('userData'));
           currentid = currentid.userData.id;
           if(this.state.role == "parent"){
            axios.post("getmatieres.php", JSON.stringify({
              id: JSON.parse(sessionStorage.getItem('selectedEnfant')),
              })).then(
              (res) => {
                console.log("parent:"+res.data)
              this.setState({data: res.data})
            }
            ).catch(
              err => console.log(err)
            )
            }
           if(this.state.role == "eleve"){
             axios.post("getmatieres.php", JSON.stringify({
              id: JSON.parse(sessionStorage.getItem('userData')).userData.id,
            })).then(
             (res) => {
              console.log("eleve:"+res.data)
             this.setState({data: res.data})
           }
           ).catch(
             err => console.log(err)
           )
           }
           
            
            
         }
       
         render() {
          if(this.state.role === "parent")
           if(JSON.parse(sessionStorage.getItem('selectedEnfant')))
           return (
               <div className='mesenfants'>
               <table className='matieres-table top-0'>
                 <tr>
                   <th>Matiere</th>
                   <th className='center-text'>Devoir 1</th>
                   <th className='center-text'>Devoir 2</th>
                   <th className='center-text'>Devoir 3</th>
                   <th className='center-text'>Participation</th>
                 </tr>
       
              
             {this.state.data.map((matiere) => 
             <ResultatsTd key={matiere.id} matiere={matiere.matierenom} 
             eleve={JSON.parse(sessionStorage.getItem('selectedEnfant'))} enseignemant={matiere.enid} />
             )}
               </table>
           </div>
           )
           else 
           return(
             <div className='mesenfants'>
               <p>Veuillez selectionner un de vos enfants.</p>
            <SelectEnfant></SelectEnfant>
           </div>
           )
          if(this.state.role === "eleve")
          return (
            <div className='mesenfants'>
            <table className='matieres-table top-0'>
              <tr>
                <th>Matiere</th>
                <th className='center-text'>Devoir 1</th>
                <th className='center-text'>Devoir 2</th>
                <th className='center-text'>Devoir 3</th>
                <th className='center-text'>Participation</th>
              </tr>
    
           
          {this.state.data.map((matiere) => 
          <ResultatsTd key={matiere.id} matiere={matiere.matierenom} 
          eleve={JSON.parse(sessionStorage.getItem('userData')).userData.id} enseignemant={matiere.enid} />
          )}
            </table>
        </div>
        )
         }
}

export default Resultats