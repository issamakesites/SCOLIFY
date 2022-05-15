import React, { Component } from 'react'
import axios from 'axios';

const month = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","août","Septembre","Octobre","Novembre","Decembre"];
    const d = new Date();
    let currentmonthtxt = month[d.getMonth()];
    let currentmonth = d.getMonth()+1;
    let currentyear = d.getFullYear();
    let currentday = d.getDate();
    let currentid=0;
    let query;
   
export class Span extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: props.nombre,
            text: props.text,
            phpfile: props.phpfile,
        }
    }
    componentDidMount(){
      if(sessionStorage.getItem('userData')){
      let  currentuser = JSON.parse(sessionStorage.getItem('userData'))
      currentid = currentuser.userData.id
      let currentrole = currentuser.userData.role
      if(currentrole=="parent"){
         query = "SELECT id_absence as monthcount from absences a,eleves e where month(heure)="+currentmonth+" and year(heure)="+currentyear+" and e.id=a.eleve and e.parent_id="+currentid+";";
        }
     if(this.state.phpfile){
        //get request
       axios.post(this.state.phpfile,JSON.stringify({
          month: currentmonth,
          year: currentyear,
          day: currentday,
          parent_id: currentid,
          query: query
        })).then(res =>  {
       console.log(res.data)
          this.setState({nombre: res.data.length});
           }).catch(err => {
             console.log(err)
           }); 
        }  
      }
      }


  render() {
    
    if(this.state.nombre==0)
    
    return (
      <span className='success-span'>{this.state.nombre} {this.state.text}</span>
    )
    else
   {
    return(
      <span className='warning-span'>{this.state.nombre} {this.state.text}</span>
    )
   } 
  }
}

export default Span