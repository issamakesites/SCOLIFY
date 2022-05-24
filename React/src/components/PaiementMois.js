import React, { Component } from 'react'
import axios from 'axios';

export class PaiementMois extends Component {
    constructor(props){
        super(props);
        this.state={
            month:  props.month,
            annee: props.annee,
            parent: props.parent,
            first: props.annee.substring(0, 4),
            second: props.annee.substring(5, 9),
            paiementinfo: []
        }
    }
    componentDidMount(){
        const month = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","août","Septembre","Octobre","Novembre","Decembre"];
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        axios.post("getpaiementinfo.php", JSON.stringify({
            parent: this.state.parent,
            month: this.state.month,
            annee: this.state.annee
            })).then(
            res => {
                this.setState({paiementinfo: res.data})
              //  console.log(res.data) 
            }    
            ).catch(
            err => console.log(err)
          )
    }
  render() {

    const month = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","août","Septembre","Octobre","Novembre","Decembre"];
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var day = 28;
    today = yyyy + '-' + mm + '-' + dd;
    if(this.state.paiementinfo.length>0)
    return (
    <a className='paid-month'><span><strong>{this.state.month}</strong> <br/>{month[this.state.month -1]}</span></a>
    )
    if(this.state.paiementinfo.length==0){
        if(yyyy == this.state.first || yyyy == this.state.second){// case current year 
          if(this.state.month=='09' || this.state.month=='10' || this.state.month=='11'
           || this.state.month=='12'){
             var year = this.state.first;
            var date = year + '-' + this.state.month + '-' + 28;

           }
            
          else {
            year = this.state.second;
            var date = year + '-' + this.state.month + '-' + 28;
          }
            
           // console.log("date: "+date)
            //console.log("today: "+today)
          if(today>date)
            return(
              <a className='unpaid-month'><span><strong>{this.state.month}</strong> <br/>{month[this.state.month -1]}</span></a>
            )
          else 
            return(
              <a className='still-month'><span><strong>{this.state.month}</strong> <br/>{month[this.state.month -1]}</span></a>
            ) 
          
        }
        else { // case year past 
          return(
            <a className='unpaid-month'><span><strong>{this.state.month}</strong> <br/>{month[this.state.month -1]}</span></a>
           )
        }
    }
     
    }

  }


export default PaiementMois