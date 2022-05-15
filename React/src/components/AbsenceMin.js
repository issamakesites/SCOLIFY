import React, { Component } from 'react'
import axios from 'axios'
import Span from './Span';

export class AbsenceMin extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            data: []
        }
    }

    componentDidMount(){
        //get request
        axios.post('getabsencecount.php',JSON.stringify({
          eleve: this.state.id
        })).then(res => 
        {
        //console.log(res);  
        this.setState({data: res.data});
           }).catch(err => {
             console.log(err)
           }); 
        }
  render() {
    return (
       <> {this.state.data.map((absence) => <Span key={absence.count}  nombre={absence.count} text="Absences"></Span>) } </> 
    )
  }
}

export default AbsenceMin