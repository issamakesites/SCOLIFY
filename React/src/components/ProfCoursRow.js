import React, { Component } from 'react'
import edit from './icons/pen.svg'
import trash from './icons/trash.svg'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class ProfCoursRow extends Component {
    constructor(props){
        super(props)
        this.state={
            id:props.id,
            titre:props.titre,
            fichier:props.fichier,
            module:props.module,
            classe:props.classe,
            date:props.date,
            enseignement:props,
            isedit: false,
            isdelete:false,
            file: null,
            message:null
        }
    }
    handleFile(e){
      console.log(e.target.files,"$$$"),
      console.log(e.target.files[0],"$$$")
      this.setState({file: e.target.files[0]})
      this.setState({filename: e.target.files[0].name})
    }


    handleUpload(e){
      e.preventDefault();

      axios.post('setcourstitle.php',JSON.stringify({
        titre: this.state.titre,
        id:this.state.id
       })).then(res => 
       {
          if(this.state.file==null)
          this.setState({
            isedit: false,
            isdelete: false
          })
        }).catch(err => {
            console.log(err)
          })

      if(this.state.file!=null){

        const data = new FormData();

        data.append("fileToUpload[]", this.state.file);

        axios.post('uploadcours.php',data,JSON.stringify({
          id: this.state.id
         })).then(res => 
         {
           if(!(res.data.includes("success")))
           this.setState({message: res.data})
           console.log(res.data)
           if(res.data.includes("success"))
             axios.post('updatefilename.php',JSON.stringify({
            name: this.state.filename,
            id:this.state.id
           })).then(res => 
           {
           console.log(res.data); 
           this.setState({
             isedit: false,
             isdelete: false
           }) 
              }).catch(err => {
                console.log(err)
              }); 

          }).catch(err => {
            console.log(err)
          });
           
           }
           
      }
    
   handleChangeTitre(event) {
       this.setState({titre : event.target.value})
      }
    toggleEdit () {
        this.setState({
          isedit: !this.state.isedit
        })
        this.setState({
          isdelete: false
        })
      }
      toggleDelete () {
        this.setState({
          isdelete: !this.state.isdelete
        })
        this.setState({
          isedit: false
        })
      }
      deleteCours = e => {
        console.log("delete");
     //   e.preventDefault();
        axios.post("deletecours.php", JSON.stringify({
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
    if(this.state.isdelete==false)
    return (
     <>
        {this.state.isedit == false ?
             <tr key={this.state.id} className="whitebg">
             <td>{this.state.titre}</td>
             <td><a href={this.state.fichier} target="_blank" className='bolda'>Télécharger</a></td>
             <td>{this.state.module}</td>
             <td>{this.state.classe}</td>
             <td>{this.state.date}</td>
             <td>
                 <Link to="#" onClick={this.toggleEdit.bind(this)}>
                   <img src={edit} className="tr-action enfants-edit-img" alt='' />
                 </Link>
                 <Link to="#" onClick={this.toggleDelete.bind(this)}>
                     <img src={trash} className="tr-action enfants-edit-img" alt='' />
                 </Link>
             </td> 
             </tr>
         : 
         <>
                {this.state.message ? <tr className='warning'>{this.state.message}</tr> : <></>}
         <tr key={this.state.id} className="whitebg">
         <td><input type="text" onChange={this.handleChangeTitre.bind(this)}
         placeholder={this.state.titre} className="courstitreupdate"/></td>
         <td>
         <input
                type="file"
                className="form-control"
                
                name="fileToUpload"
                onChange={(e) =>this.handleFile(e)}
              />
            </td>
         <td>{this.state.module}</td>
         <td>{this.state.classe}</td>
         <td>{this.state.date}</td>
         <td>
             <Link to="#" onClick={(e) => this.handleUpload(e)}>
               <img src={edit} className="tr-action enfants-edit-img" alt='' />
             </Link>
             <Link to="#" onClick={this.toggleDelete.bind(this)}>
                 <img src={trash} className="tr-action enfants-edit-img" alt='' />
             </Link>
         </td>  
         </tr>
        </>}
     </>     
    )
    else 
    return (  <>
      <tr key={this.state.id} className="whitebg">
      <td>{this.state.titre}</td>
      <td><a href={this.state.fichier} target="_blank" className='bolda'>Télécharger</a></td>
      <td>{this.state.module}</td>
      <td>{this.state.classe}</td>
      <td>{this.state.date}</td>
      <td>
          <Link to="#" onClick={this.toggleEdit.bind(this)}>
            <img src={edit} className="tr-action enfants-edit-img" alt='' />
          </Link>
          <Link to="#" onClick={this.toggleDelete.bind(this)}>
              <img src={trash} className="tr-action enfants-edit-img" alt='' />
          </Link>
      </td> 
      </tr>
      <tr>
      <td>Souhaitez vous vraiement supprimer<br/> le cours: "{this.state.titre}" ?</td>
      <td>
          <button className='warning-span' onClick={this.deleteCours}>oui</button>
          <button className='success-span' onClick={this.toggleDelete.bind(this)}>non</button>    
      </td>
      </tr>
     </>)
  }
}

export default ProfCoursRow