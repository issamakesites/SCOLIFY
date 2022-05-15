import React, { Component } from 'react'
import axios from 'axios'
import Span from './Span';

export class RetardMin extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            data: []
        }
    }

    componentDidMount(){
        //get request
        axios.post('getretardcount.php',JSON.stringify({
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
       <> {this.state.data.map((retard) => <Span key={retard.count} nombre={retard.count} text="Retards"></Span>) } </> 
    )
  }
}

export default RetardMin