import React, { Component } from 'react'
import axios from 'axios'

export class CheckTast extends Component {
    constructor(props){
        super(props)
        this.state ={
            tacheid: props.tacheid
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        axios.post("checktask.php", JSON.stringify({
          id: this.state.tacheid
          })).then(
          (res) => {this.setState({etat:1})
        }
        ).catch(
          err => console.log(err)
        )
    
      }
  render() {
    return (
        <button  id={this.state.tacheid} onClick={this.handleSubmit}>HHH</button>
    )
  }
}

export default CheckTast