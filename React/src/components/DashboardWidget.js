import React, { Component } from 'react'
import dollardark from './icons/dollardark.svg'
import backpack from './icons/backpack.svg'
import articledark from './icons/articledark.svg'
import download from './icons/download.svg'
import retarddark from './icons/retarddark.svg'
import alarm from './icons/alarm.svg'
import taches from './icons/taches.svg'
import absence from './icons/absence.svg'
import Span from './Span'
import PaymentSpan from './PaymentSpan'
import { Link } from 'react-router-dom'
import DashboardNote from './DashboardNote'
import ResourceSpan from './ResourceSpan'
import teacherdark from './icons/teacherdark.png'
import ElevesSpan from './ElevesSpan'
import bookdark  from './icons/bookdark.svg'


const month = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","août","Septembre","Octobre","Novembre","Decembre"];
    const d = new Date();
    let currentmonthtxt = month[d.getMonth()];
    let currentday = d.getDate();
    let currentyear = d.getFullYear();
export class DashboardWidget extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            content: props.content,
            phpfile: props.phpfile
        }
    }
  render() {
    
    if(this.state.content==='prof-taches'){
      let gg = JSON.parse(sessionStorage.getItem('userData'))
      return (
      <div className='dashboardwidget'>
       
          <img src={taches} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>Mes Taches</h3>
                    <p>{currentmonthtxt} {currentyear}</p>
              </div>
              <div className='dashboardwidget-right'>
                    <ElevesSpan content="taches"></ElevesSpan>
              </div>
          </div>
         <Link to='/dashboard/mes-eleves'><p>En savoir plus</p></Link>
      </div>
    )
    }
    if(this.state.content==='prof-eleves'){
      let gg = JSON.parse(sessionStorage.getItem('userData'))
      return (
      <div className='dashboardwidget'>
       
          <img src={teacherdark} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>Mes Eleves</h3>
                    <p>{currentmonthtxt} {currentyear}</p>
              </div>
              <div className='dashboardwidget-right'>
                    <ElevesSpan content="eleves"></ElevesSpan>
              </div>
          </div>
         <Link to='/dashboard/mes-eleves'><p>En savoir plus</p></Link>
      </div>
    )
    }
    if(this.state.content==='prof-cours'){
      let gg = JSON.parse(sessionStorage.getItem('userData'))
      return (
      <div className='dashboardwidget'>
       
          <img src={bookdark} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>Mes Cours</h3>
                    <p>{currentmonthtxt} {currentyear}</p>
              </div>
              <div className='dashboardwidget-right'>
                    <ElevesSpan content="cours"></ElevesSpan>
              </div>
          </div>
         <Link to='/dashboard/cours'><p>En savoir plus</p></Link>
      </div>
    )
    }
     
    if(this.state.content==='payments'){
      let gg = JSON.parse(sessionStorage.getItem('userData'))
      return (
      <div className='dashboardwidget'>
       
          <img src={dollardark} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>Etats de paiement</h3>
                    <p>{currentmonthtxt} {currentyear}</p>
              </div>
              <div className='dashboardwidget-right'>
                    <PaymentSpan></PaymentSpan>
              </div>
          </div>
         <Link to='/dashboard/paiements'><p>En savoir plus</p></Link>
      </div>
    )
    }
     


    if(this.state.content==='retards'){
     return (
      <div className='dashboardwidget'>
          <img src={retarddark} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>Retards</h3>
                    <p>{currentmonthtxt} {currentyear}</p>
              </div>
              <div className='dashboardwidget-right'>
                    <Span phpfile="getcurrentmonthretards.php" text='Retards'></Span>
              </div>
          </div>
         <Link to='/dashboard/absences-retards'><p>En savoir plus</p></Link>
      </div>
    )
 }

    if(this.state.content==='absencesadmin'){
      return (
      <div className='dashboardwidget admin-dashboard-widget'>
          <img src={absence} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>Absences</h3>
                    <p>{currentday} {currentmonthtxt} {currentyear}</p>
              </div>
              <div className='dashboardwidget-right'>
                <Span  phpfile="getdailyabsences.php"  text="Absences"></Span>
              </div>
          </div>
         <Link to='/dashboard/absences-retards'><p>En savoir plus</p></Link>
      </div>
    )
    }

    if(this.state.content==='retardsadmin'){
      return (
      <div className='dashboardwidget admin-dashboard-widget'>
          <img src={alarm} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>Retards</h3>
                    <p>{currentday} {currentmonthtxt} {currentyear}</p>
              </div>
              <div className='dashboardwidget-right'>
                <Span  phpfile="getdailyretards.php"  text="Absences"></Span>
              </div>
          </div>
         <Link to='/dashboard/absences-retards'><p>En savoir plus</p></Link>
      </div>
    )
    }
    if(this.state.content==='absences'){
      return (
      <div className='dashboardwidget'>
          <img src={absence} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>absences</h3>
                    <p>{currentmonthtxt} {currentyear}</p>
              </div>
              <div className='dashboardwidget-right'>
                <Span  phpfile="getcurrentmonthabsences.php"  text="Absences"></Span>
              </div>
          </div>
         <Link to='/dashboard/absences-retards'><p>En savoir plus</p></Link>
      </div>
    )
    }
    if(this.state.content==='taches'){
      return (
      <div className='dashboardwidget'>
          <img src={taches} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>taches a faire</h3>
                    <p>{currentmonthtxt} {currentyear}</p>
              </div>
              <div className='dashboardwidget-right'>
                <Span  phpfile="getremainingtasks.php"  text="Taches"></Span>
              </div>
          </div>
         <Link to='/dashboard/cahier-textes'><p>En savoir plus</p></Link>
      </div>
    )
    }
    if(this.state.content==='resources'){
      return (
      <div className='dashboardwidget'>
          <img src={download} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>Nouvelles ressources</h3>
                    <p>{currentmonthtxt} {currentyear}</p>
              </div>
              <div className='dashboardwidget-right'>
                <ResourceSpan></ResourceSpan>
              </div>
          </div>
         <Link to='/dashboard/cours'><p>En savoir plus</p></Link>
      </div>
    )
    }
    if(this.state.content==='mes-notes'){
      return (
      <div className='dashboardwidget'>
          <img src={download} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>Mes notes</h3>
                    <p>{currentmonthtxt} {currentyear}</p>
              </div>
          </div>
         <Link to='/dashboard/cours'><p>En savoir plus</p></Link>
      </div>
    )
    }
     
    
    if(this.state.content==='notes'){ 
      return (
      <div className='dashboardwidget-article'>
          <img src={articledark} className="dashboardwidget-icon" alt="" />
          <div className='dashboardwidget-content'>
              <div className='dashboardwidget-left'>
                    <h3>Notes</h3>
              </div>
          </div>
         <DashboardNote>  </DashboardNote>
        <Link to='/dashboard/notes'><p>Notes plus anciennes</p></Link>        
      </div>
    )
    }
     
  }
}

export default DashboardWidget