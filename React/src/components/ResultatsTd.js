import React, { Component } from 'react'
import axios from 'axios';

export class ResultatsTd extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            matiere: props.matiere,
            enseignemant: props.enseignemant,
            eleve: props.eleve
        }
    }
    componentDidMount(){    
        let currentid = JSON.parse(sessionStorage.getItem('userData'));
           currentid = currentid.userData.id;
           //this.setState({eleve: JSON.parse(sessionStorage.getItem('selectedEnfant'))}) 
           axios.post("getresults.php", JSON.stringify({
            eleve: this.state.eleve,
            enseignemant: this.state.enseignemant
             })).then(
             (res) => {
             console.log(res.data)
             this.setState({data: res.data})
           }
           ).catch(
             err => console.log(err)
           );
    }
  render() {
    return (
      <tr  className='matiere-row'>
          <td><strong className='blue-text'>{this.state.matiere}</strong></td>
          {this.state.data.map((note) => <td className='center-text'>{note.note}</td>)}
      </tr>
    )
  }
}

export default ResultatsTd