import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import MatiereDownloadTitle from './MatiereDownloadTitle';

export class MatiereDownloads extends Component {
 constructor(props){
     super(props);
     this.state = {
         data: [],
         enseignement: props.enseignement
     }
 }
 componentDidMount(){
    axios.post('getmatieredownloads.php',JSON.stringify({
      enseignement: this.state.enseignement
    })).then(res => 
    {
    this.setState({data: res.data});
       }).catch(err => {
         console.log(err)
       }); 
 }
  render() {
      if(this.state.data.length>0)
    return (
      <>
      <MatiereDownloadTitle enseignement={this.state.enseignement}></MatiereDownloadTitle>
        <table className='matieresdownloads-table'>
            <thead>
                <tr>
                 <th>Titre</th>
                 <th>fichier</th>
                 <th>date de modification</th>
                </tr>
            </thead>

     <tbody>
        {this.state.data.map((download) => 
        <tr key={download.id} className="whitebg">
          <td>{download.titre}</td>
          <td><a href={download.fichier} target="_blank" className='bolda'>Telecharger</a></td>
          <td>{download.date}</td>
    </tr>
    )}
         </tbody>
      </table>
      </>
    )
    else 
    return (
        <div className='caption-white'>
          <p>Il n'existe pas de cours a telecharger pour cette matiere.</p>
          <Link to='/dashboard/cours'>Revenir a la page des matieres</Link>
        </div>
    )
  }
}
export default MatiereDownloads