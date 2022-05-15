import React, { Component } from 'react'
import axios from 'axios'


export class EmploiTempsFrame extends Component {
    constructor(props){
        super(props);
        this.state={
            eleve: props.eleve
        }
    }
    componentDidMount(){
        axios.post('getemploi.php',JSON.stringify({
          eleve: this.state.eleve
        })).then(res =>  {
          this.setState({emploi: res.data.emploi_du_temps});
           }).catch(err => {
             console.log(err)
           });
      }
  render() {
    return (
    
        <div className='emploi-frame'>
          <iframe  width="100%" height="500px" src={this.state.emploi}> </iframe>
        </div>
      
    )
  }
}

export default EmploiTempsFrame