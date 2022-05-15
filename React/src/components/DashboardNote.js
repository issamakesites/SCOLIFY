import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
export class DashboardNote extends Component {

  constructor(props){
    super(props);
    this.state = {
    notes: []
    }
    }

  componentDidMount(){
    axios.post('getnotes.php',JSON.stringify({
      limit: 1
    })).then(res =>  {
      console.log(res);
      this.setState({notes: res.data});
       }).catch(err => {
         console.log(err)
       });
  }

  render() {
    let sliced = this.state.notes.slice(0,3);
    return (
      <>
      {sliced.map((note) => <Link key={note.id} to='#'>
      <div className='dashboard-note'>
       <img src={'http://localhost:80/pfe/images/'+note.miniature}></img>
       <div className='dashboard-note-text'>
           <h3>{note.titre}
           </h3>
           <span>{note.day}</span>
       </div>
      </div>
  </Link>  
   )}
   </>
           
    )
  }
}

export default DashboardNote