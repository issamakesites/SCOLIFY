import React, { Component } from 'react'
import axios from 'axios'
export class Tache extends Component {
  constructor(props){
      super(props)
      this.state={
          id: props.tacheid,
          tache: props.tache,
          matiere: props.matiere,
          date: props.date,
          deadline: props.deadline,
          etat: props.etat
      }
  }
  handleSubmit = e => {
    e.preventDefault();
    axios.post("checktask.php", JSON.stringify({
      id: this.state.id
      })).then(
      (res) => {this.setState({etat:1})
    }
    ).catch(
      err => console.log(err)
    )

  }
  render() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    console.log("date:"+today)

    if(this.state.etat == 1)
            return (
                 <tr key={this.state.id} className='matiere-row'>
                 <td>{this.state.tache}</td>
                 <td>{this.state.matiere}</td>
                 <td>{this.state.date}</td>
                 <td>{this.state.deadline}</td>
                  <td><span className='tache-success'>Faite</span></td>
                 <td></td>
                  </tr>
         )
    if(today < this.state.deadline)
            return (
                <tr key={this.state.id} className='matiere-row'>
                <td>{this.state.tache}</td>
                <td>{this.state.matiere}</td>
                <td>{this.state.date}</td>
                <td>{this.state.deadline}</td>
                <td><span className='tache-remaining'>en attente</span></td>
                <td><input type="checkbox"  onClick={this.handleSubmit}/></td>
                </tr>)
else
    return (
        <tr key={this.state.id} className='matiere-row'>
        <td>{this.state.tache}</td>
        <td>{this.state.matiere}</td>
        <td>{this.state.date}</td>
        <td>{this.state.deadline}</td>
        <td><span className='tache-timedout' onClick={this.handleSubmit}>c'est passé</span></td>
        </tr>
    )
  }
}

export default Tache