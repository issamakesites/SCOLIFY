
import React, { Component } from 'react'
import bellshadow from './icons/bellshadow.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class Notificon extends Component {
    constructor(props){
        super(props)
        this.state={
            data: [],
            isopen: false
        }
    }
    toggleDropdown () {
        this.setState({
          isopen: !this.state.isopen
        })
      }
 
    handleSubmit = e => {
        e.preventDefault();
        axios.post("updatenotifs.php", JSON.stringify({
            user: JSON.parse(sessionStorage.getItem('userData')).userData.id,
            role: JSON.parse(sessionStorage.getItem('userData')).userData.role,
          })).then(
          (res) => {this.setState({notifnbr:0})
        }
        ).catch(
          err => console.log(err)
        )
        this.setState({
            isopen: !this.state.isopen
          })
      }

    componentDidMount(){
             axios.post('getnotifcount.php',JSON.stringify({
              user: JSON.parse(sessionStorage.getItem('userData')).userData.id,
              role: JSON.parse(sessionStorage.getItem('userData')).userData.role,
            })).then(res =>  {
              console.log("notifcount"+res.data.count);
              this.setState({notifnbr: res.data.count});
               }).catch(err => {
                 console.log(err)
               });
             
            axios.post('getnotifs.php',JSON.stringify({
              user: JSON.parse(sessionStorage.getItem('userData')).userData.id,
              role: JSON.parse(sessionStorage.getItem('userData')).userData.role,
            })).then(res =>  {
              this.setState({data: res.data});
              console.log(res.data)
               }).catch(err => {
                 console.log(err)
               });
        
      }
    render(){
        if(this.state.notifnbr == 0)
        return (
            <>
            <Link className='notif' to='#' onClick={this.handleSubmit}>
                        <img src={bellshadow} onClick={this.toggleDropdown.bind(this)}/>
                    </Link>
            {
                this.state.isopen &&
                <div className='notifs-dropdown visible'>
                    <h3>Notifications</h3>
                    <ul className='notifis-list'>
                {this.state.data.map((notif) => 
                <li key={notif.id}>
                    <p>{notif.content}</p>
                    <span>{notif.date}</span>
                </li>
                )}
                </ul>
            </div>
            }
            </>
        )
        else 
        return (
            <>
            <Link className='notif shown' to='#' onClick={this.handleSubmit}>
                        <img src={bellshadow} onClick={this.toggleDropdown.bind(this)}/>
            </Link>
            {
                this.state.isopen &&
                <div className='notifs-dropdown visible'>
                    <ul className='notifis-list'>
                {this.state.data.map((notif) => 
                <li key={notif.id}>
                    <p>{notif.content}</p>
                    <span>{notif.quand}</span>
                </li>
                )}
                </ul>
            </div>
            }
            </>
           
        )
    }

}
export default Notificon