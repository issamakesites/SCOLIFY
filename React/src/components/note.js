import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Note extends Component {
    constructor(props){
        super(props);
        this.state= {
            idnote : props.idnote,
            titre: props.titre,
            date: props.date,
            img: props.img,
        }
    }
  render() {
    return (
        <div className='content-note-wrapper'>
            <Link key={this.state.idnote} to={`/dashboard/notes/${this.state.idnote}`}>
        <div className='content-note'>
         <img src={'http://localhost:80/pfe/images/'+this.state.img}></img>
         <div className='content-note-text'>
             <h3>{this.state.titre}
             </h3>
             <span>{this.state.date}</span>
         </div>
        </div>
    </Link>  
        </div>
        
    )
  }
}

export default Note