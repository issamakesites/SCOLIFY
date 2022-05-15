import React, { Component } from 'react'
import Note from './components/note';
import axios from 'axios';
import { ParentSidebar } from './components/ParentSidebar';
import Navbar from './components/Navbar';

export class Notes extends Component {
    constructor(props){
        super(props)
        this.state={
            data: []
        }
    }
    componentDidMount(){      
        if(sessionStorage.getItem('userData')){
            axios.post('getnotes.php',JSON.stringify({
              })).then(res => 
              {
              this.setState({data: res.data});
                 }).catch(err => {
                   console.log(err)
                 }); 
                }
    }
  render() {

    return (
      <div className='parent-dashboard'>
        <ParentSidebar>
        </ParentSidebar>
        <Navbar breadcrumbs='Tableau de bord/ Notes au parents'></Navbar>
        <div className='parent-dashboard-widgets'>
          <div className='parent-dashboard-left margin-auto first-element'>
            <div className='notes'>
             {this.state.data.map((note) => <Note img={note.miniature} key={note.id} titre={note.titre} date={note.day} idnote={note.id}></Note>)}
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default Notes