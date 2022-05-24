import React, { Component } from 'react'
import axios from 'axios';
import backpack from './icons/backpack.svg'
import ProfCoursRow from './ProfCoursRow';
import AjouterCours from './AjouterCours';

export class ProfCours extends Component {
    constructor(props){
        super(props),
        this.state={
            prof: props.prof,
            cours: [],
            isadd: false
        }
    }
    toggleAdd () {
        this.setState({
          isadd: !this.state.isadd
        })
      }
  componentDidMount(){
    axios.post('getprofcours.php',JSON.stringify({
       prof: JSON.parse(sessionStorage.getItem('userData')).userData.id
      })).then(res => 
      {
      console.log(res.data);  
      this.setState({cours: res.data});
         }).catch(err => {
           console.log(err)
         }); 
  }
  render() {
      if(this.state.cours.length==0)
    return (
        <div className='mesenfants'>
        <div className='mesenfants-top'>
         <div className='mesenfants-title'>
             <img src={backpack} />
             <h2>Liste des cours</h2>
         </div>    
         <div class="gestion-top-flex flex-end">
        <button class="ajouter" onClick={this.toggleAdd.bind(this)}><span>+</span>Ajouter un cours </button>
        </div>
        {this.state.isadd &&
        <AjouterCours />}
        </div>
        <p className='lightnotice'>Vous ne disposez d'aucun cours
        </p>
    </div>  
    )
    else 
    return( <div className='mesenfants'>
    <div className='mesenfants-top'>
     <div className='mesenfants-title'>
         <img src={backpack} />
         <h2>Liste des cours</h2>
     </div>
     <div class="gestion-top-flex flex-end">
        <button class="ajouter"  onClick={this.toggleAdd.bind(this)}><span>+</span>Ajouter un cours </button>
        </div> 
        {this.state.isadd && <AjouterCours />}
    </div>
   

    <table className='matieresdownloads-table'>
            <thead>
                <tr>
                 <th>Titre</th>
                 <th>fichier</th>
                 <th>module</th>
                 <th>classe</th>
                 <th>date de modification</th>
                 <th></th>
                </tr>
            </thead>

     <tbody>
        {this.state.cours.map((download) => 
        <ProfCoursRow key={download.id} en={download.en} id={download.id} 
        titre={download.titre} fichier={download.fichier}
        module={download.module} classe={download.classe}
        date={download.date} />
    )}
         </tbody>
      </table>
</div>  
    )
  }
}

export default ProfCours