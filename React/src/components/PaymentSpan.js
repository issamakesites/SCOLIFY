import axios from 'axios';
import React, { Component } from 'react'

export class PaymentSpan extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
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
      if(currentrole=="parent"){
        //get request
       axios.post('getpaiementstatus.php',JSON.stringify({
          month: currentmonth,
          year: currentyear,
          parent_id: currentid
        })).then(res =>  {
       console.log(res.data.etat)
          this.setState({value: res.data.etat});
           }).catch(err => {
             console.log(err)
           }); 
      }
    }
      }
  render() {
    if(this.state.value==1)
    return (
      <span className='success-span'>Payé</span>
    )
    else 
    return(
        <span className='warning-span'>En attente</span>
    )
  }
}

export default PaymentSpan