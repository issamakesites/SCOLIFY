import React,{Component} from "react";
import axios from "axios";
import DashboardWidget from './DashboardWidget'
import { ParentSidebar } from './ParentSidebar'
import Navbar from './Navbar'
class EditEnfant extends Component {
constructor(props){
    super(props);
    this.state = {
        eleveid: props.eleveid,
        eleve: []
    }
}
componentDidMount(){
    let currentid = JSON.parse(sessionStorage.getItem('userData'))
        currentid = currentid.userData.id
        axios.post('geteleve.php',JSON.stringify({
        parentid: currentid,
        eleveid: this.state.eleveid
      })).then(res => 
      {
        this.setState({eleve: res.data});
      }).catch(err =>{
        console.log(err)
      }); 
}
    render(){
        return(
            <div className='parent-dashboard'>
            <ParentSidebar></ParentSidebar>
            <Navbar breadcrumbs={"Editer Enfant / "+ this.state.eleve.nom } key={this.eleveid}></Navbar>
            <h1 className='Welcome-name'></h1> 
            <div className='parent-dashboard-widgets'>
              <div className='dashboard-body'>
                <div className='editer-eleve'>
                  <img src={'http://localhost:80/pfe/avatars/'+ this.state.eleve.img}/>
                  <p className="editer_eleve_para">nom: <span>{this.state.eleve.nom}</span></p>
                  <p className="editer_eleve_para">prenom: <span>{this.state.eleve.prenom}</span></p>
                  <p className="editer_eleve_para">Date de naissance: <span>{this.state.eleve.naissance}</span></p>
                  <form className="editer_eleve_form">
                    <label for="login">Login</label>
                    <input type="text" name="login" id="login" placeholder={this.state.eleve.login} />
                    <label for="password">mot de passe</label>
                    <input type="text" name="password" id="password" placeholder={this.state.eleve.password} />
                    <button value="submit" name="submit" id="submit">Modifier</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default EditEnfant