import axios from 'axios';
import React, { Component } from 'react'

export class ElevesSpan extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            content:props.content
        }
    }
    componentDidMount(){
      this.setState({value: 1})
      if(sessionStorage.getItem('userData')){
      const month = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","août","Septembre","Octobre","Novembre","Decembre"];
      const d = new Date();
      let currentmonth = d.getMonth() +1;
      let currentmonthtxt = month[d.getMonth()];
      let currentyear = d.getFullYear();
      let  currentuser = JSON.parse(sessionStorage.getItem('userData'))
      let currentid = currentuser.userData.id
      let currentrole = currentuser.userData.role
      if(currentrole=="prof"){
          if(this.state.content=="eleves")
        //get request
       axios.post('getelevesnbr.php',JSON.stringify({
         prof: currentid
        })).then(res =>  {
          this.setState({value: res.data.count});
           }).catch(err => {
             console.log(err)
           }); 
           if(this.state.content=="cours")
        //get request
       axios.post('getcoursnbr.php',JSON.stringify({
         prof: currentid
        })).then(res =>  {
          console.log(res.data);
          this.setState({value: res.data.count});
           }).catch(err => {
             console.log(err)
           });
           if(this.state.content=="taches")
        //get request
       axios.post('gettachesnbr.php',JSON.stringify({
         prof: currentid
        })).then(res =>  {
          console.log(res.data);
          this.setState({value: res.data.length});
           }).catch(err => {
             console.log(err)
           });
      }
    }
      }
  render() {
    if(this.state.value!=0)
    return(
        <span className='success-span'>{this.state.value} {this.state.content}</span>
    )
    else 
    return(
        <span className='warning-span'>{this.state.value} {this.state.content}</span>
    )
  }
}

export default ElevesSpan