import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import edit from './icons/edit.svg'
import trash from './icons/trash.svg'
import axios from 'axios'
export class GestionClassesRow  extends Component {
    constructor(props){
        super(props)
        this.state= {
            recherche:props.recherche,
            id:props.id,
            nom:props.nom,
            emploi:props.emploi,
            isedit: false,
            isdelete:false
        }
    }
    toggleEdit () {
        this.setState({
          isedit: !this.state.isedit
        })
      }
      toggleDelete () {
        this.setState({
          isdelete: !this.state.isdelete
        })
      }
    deleteClasse = e => {
        console.log("delete");
     //   e.preventDefault();
        axios.post("deleteclasse.php", JSON.stringify({
          id: this.state.id
          })).then(
          (res) => {
            console.log("delete:"+res.data)
          } 
        ).catch(
          err => console.log(err)
        )
        window.location.reload(false);
      }
    render() {
       console.log(this.state.recherche)
            return(<>
            
            <tr key={this.state.id} className='matiere-row'>
            <td>{this.state.id}</td>
            <td>{this.state.nom}</td>
            <td><a href={this.state.emploi}>voir emploi</a></td>
            <td>
            <Link to="#" onClick={this.toggleEdit.bind(this)}><img src={edit} className="enfants-edit-img" alt='' /></Link>
            <Link to="#" onClick={this.toggleDelete.bind(this)}><img src={trash} className="enfants-edit-img" alt='' /></Link></td>
            {
                this.state.isedit &&
                <div className='editmodal'>
                <button onClick={this.toggleEdit.bind(this)}>Fermer</button>
                editer cette classe
                </div>
            }
            {
                this.state.isdelete && 
                <div className='deletemodal'>
                <button onClick={this.toggleDelete.bind(this)}>Fermer</button>
                Vous souhaiter vraiement supprimer <br /> {this.state.nom} <br />
                <button className='warning-span' onClick={this.deleteClasse}>oui</button>
                <button className='success-span' onClick={this.toggleDelete.bind(this)}>non</button>
                </div>
            }
      </tr>
            </>
                
            )
            }

}
export default GestionClassesRow