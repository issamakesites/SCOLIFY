import React, { Component } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router'

export class SelectEnfant extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            redirect: props.redirect
        }
    }
  componentDidMount(){
    //get request
    if(JSON.parse(sessionStorage.getItem('userData'))){
      let currentid = JSON.parse(sessionStorage.getItem('userData'))
      currentid = currentid.userData.id
      axios.post('mesenfants.php',JSON.stringify({
        id: currentid
      })).then(res => 
      {
      this.setState({eleve: res.data[0].id});
      this.setState({data: res.data});
         }).catch(err => {
           console.log(err)
         }); 
    }
    else return (
      <Navigate to="/login"></Navigate>
    )
    }

    handleSubmit = e => {
        const data = {
        }
        if(JSON.parse(sessionStorage.getItem('userData'))){
          sessionStorage.setItem('selectedEnfant',this.state.eleve)

        }
      }
  render() {

    return (
      <div>
          <form onSubmit={this.handleSubmit} className="selectstudentForm">
              <select name="eleve" onChange={(e) => {
                this.setState({eleve: e.target.value});
              }}>
                {this.state.data.map((enfant) => 
                    <option key={enfant.id} value={enfant.id}>{enfant.nom} {enfant.prenom}</option>)
                }
              </select>
              <button className='primary-btn' type='submit'>Sélectionner</button>
          </form>
      </div>
    )
    
  }
}

export default SelectEnfant