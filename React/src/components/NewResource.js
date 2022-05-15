import React, { Component } from 'react'
import axios from 'axios'
import newgif from './icons/new.gif'


const d = new Date();
let currentmonth = d.getMonth()+1;
export class NewResource extends Component {
    constructor(props){
        super(props)
        this.state={
            enseignement: props.enseignement,
        }
    }
    componentDidMount(){
    axios.post('getnewresource.php',JSON.stringify({
        enseignement: this.state.enseignement,
        month: currentmonth
      })).then(res => 
      {

      this.setState({data: res.data.count});
         }).catch(err => {
           console.log(err)
         }); 
    }

  render() {
    if(this.state.data != 0)
      return(
        <span className='nouveau'>Nouveau</span>
      )
  }
}

export default NewResource