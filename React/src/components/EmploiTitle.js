import React, { Component } from 'react'
import axios from 'axios'

export class EmploiTitle extends Component {
    constructor(props){
        super(props);
        this.state = {
            eleve: props.eleve,
            content: props.content
        }
    }
    componentDidMount(){
        axios.post('getemploititle.php',JSON.stringify({
          eleve: this.state.eleve
        })).then(res => 
        {
            console.log(res.data)
        this.setState({nom: res.data.nom});
        this.setState({prenom: res.data.prenom});
           }).catch(err => {
             console.log(err)
           }); 
     }
  render() {
    return (
      <h1 className='matieredownloadname'>{this.state.content}<span className='matieredownloadspan'>{this.state.nom} {this.state.prenom}</span></h1>
    )
  }
}

export default EmploiTitle