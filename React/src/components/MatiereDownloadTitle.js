import React, { Component } from 'react'
import axios from 'axios'

export class MatiereDownloadTitle extends Component {
    constructor(props){
        super(props);
        this.state = {
            enseignement: props.enseignement
        }
    }
    componentDidMount(){
        axios.post('getmatieredownloadname.php',JSON.stringify({
          enseignement: this.state.enseignement
        })).then(res => 
        {
            console.log(res.data)
        this.setState({data: res.data.nom});
           }).catch(err => {
             console.log(err)
           }); 
     }
  render() {
    return (
      <h1 className='matieredownloadname'>Telechargements pour <span className='matieredownloadspan'>{this.state.data}</span></h1>
    )
  }
}

export default MatiereDownloadTitle