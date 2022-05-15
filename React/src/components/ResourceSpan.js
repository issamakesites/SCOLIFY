import axios from 'axios';
import React, { Component } from 'react'

export class ResourceSpan extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
      if(sessionStorage.getItem('userData')){
      const d = new Date();
      let currentmonth = d.getMonth() +1;
      let currentyear = d.getFullYear();
      let  currentuser = JSON.parse(sessionStorage.getItem('userData'))
      let currentid = currentuser.userData.id
        //get request
       axios.post('getcurrentmonthdownloads.php',JSON.stringify({
          month: currentmonth,
          year: currentyear,
          parent_id: currentid
        })).then(res =>  {
       console.log(res.data.length)
          this.setState({value: res.data.length});
           }).catch(err => {
             console.log(err)
           }); 
        }
      }
  render() {
    if(this.state.value!=0)
    return (
      <span className='success-span'>{this.state.value} Resource</span>
    )
    else 
    return(
        <></>
    )
  }
}
export default ResourceSpan