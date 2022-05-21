import React, { Component } from 'react'
import axios from 'axios'
import Tache from './Tache'

export class taskslist extends Component {
    constructor(props){
        super(props)
        this.state= {
            data: [],
            orderby: props.orderby
                  }
    }
    componentDidMount(){
        if(sessionStorage.getItem('userData')){
          let currentuser = JSON.parse(sessionStorage.getItem('userData'))
          let role = currentuser.userData.role
          if(role=="eleve")
              axios.post("gettasks.php", JSON.stringify({
               id: JSON.parse(sessionStorage.getItem('userData')).userData.id,
               orderby: this.state.orderby
             })).then(
              (res) => {
               console.log("eleve:"+res.data)
              this.setState({data: res.data})
            }
            ).catch(
              err => console.log(err)
            )
          if(role == "parent")
             if(sessionStorage.getItem('selectedEnfant'))
          axios.post("gettasks.php", JSON.stringify({
            id: JSON.parse(sessionStorage.getItem('selectedEnfant')),
            orderby: this.state.orderby
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
    if(this.state.data.length>0)
    return (
        <>
        {this.state.data.map((tache) => 
            <Tache key={tache.id} tacheid={tache.id} tache={tache.tache} matiere={tache.matiere} 
            date={tache.dateprof} deadline={tache.deadline} etat={tache.etat}
            ></Tache>
          )}
        </>
    )
    else return (
        <p className='success-para'>Aucune tache pour cet eleve</p>
    )
  }
}

export default taskslist