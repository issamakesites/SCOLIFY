import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import bellshadow from './icons/bellshadow.svg'
import avatar from './icons/avatar.svg'
import faq from './icons/faq.svg'
import axios from 'axios'
import Logout from './Logout'

export class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            breadcrumbs: props.breadcrumbs,
            isopen: false
        }
    }
    toggleDropdown () {
        this.setState({
          isopen: !this.state.isopen
        })
      }
 
      componentDidMount(){
        axios.post('getuserdata.php',JSON.stringify({
            id: JSON.parse(sessionStorage.getItem('userData')).userData.id,
            role: JSON.parse(sessionStorage.getItem('userData')).userData.role,
          })).then(res =>  {
            console.log(res);
            this.setState({data: res.data});
             }).catch(err => {
               console.log(err)
             });
      }
  render() {
    return (
      <div className='top-navbar'>
          <div className='navbar-left'>
            <h1 className='breadcrumbs'>{this.state.breadcrumbs}</h1>
          </div>
          <div className='navbar-right'>
            <ul className='navbar-icons'>
                <li>
                    <Link to='#'>
                        <img src={faq} />
                    </Link>
                </li>
                <li>
                    <Link to='#'>
                        <img src={bellshadow} />
                    </Link>
                </li>
                <li>
                    <span className='showdropdown' onClick={this.toggleDropdown.bind(this)}>
                        <img src={avatar} />
                    </span>{
                        this.state.isopen &&
                        <div className='myaccount-dropdown visible'>
                        <div className='dropdown-img'>
                            <img src={'http://localhost:80/PFE/avatars/' + this.state.data.img} />
                        </div>
                        <h1>{this.state.data.nom} {this.state.data.prenom}</h1>
                       <Logout></Logout>
                    </div>
                    }
                    
                </li>
            </ul>
          </div>
      </div>
    )
  }
}

export default Navbar