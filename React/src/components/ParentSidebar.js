import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//importing icons
import bata from './icons/bata.svg'
import teacher from './icons/teacher.svg'
import closedbook from './icons/closedbook.svg'
import book from './icons/book.svg'
import dollar from './icons/dollar.svg'
import calendar from './icons/calendar.svg'
import notes from './icons/notes.svg'
import retard from './icons/retard.svg'
import tacheslight from './icons/tacheslight.svg'

export class ParentSidebar extends Component {
  render() {
    if(sessionStorage.getItem('userData')){
      let role = JSON.parse(sessionStorage.getItem('userData'))
      role = role.userData.role
        if(role=="parent")
        return (
          <div className='ParentSidebar'>
            <div className='sidebarlogo-wrapper'>
              <Link to="/">
            <img  src={bata} className="ParentSidebarLogo" alt='logo' />
              </Link>
            </div>
          <div className='sidebarlinks'>
            <ul>
              <li>
                  <Link to="/dashboard/enseignants">
                    <img alt="" src={teacher} />
                    <p>enseignants</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/cours">
                    <img alt="" src={book} />
                    <p>Cours</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/cahier-textes">
                    <img alt="" src={closedbook} />
                    <p>Cahier de textes</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/emploidutemps">
                    <img alt="" src={calendar} />
                    <p>Emploi du temps</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/resultats">
                    <img alt="" src={notes} />
                    <p>Notes et bulletins</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/absences-retards">
                    <img alt="" src={retard} />
                    <p>Retard et absences</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/paiements">
                    <img alt="" src={dollar} />
                    <p>paiements</p>
                  </Link>
              </li>
            </ul>
          </div>
      </div>
        )
        if(role=="prof")
        return (
           <div className='ParentSidebar'>
            <div className='sidebarlogo-wrapper'>
              <Link to="/">
            <img  src={bata} className="ParentSidebarLogo" alt='logo' />
              </Link>
            </div>
          <div className='sidebarlinks'>
            <ul>
              <li>
                  <Link to="/dashboard/mes-eleves">
                    <img alt="" src={teacher} />
                    <p>Mes eleves</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/cours">
                    <img alt="" src={book} />
                    <p>Mes Cours</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/absences-retards">
                    <img alt="" src={retard} />
                    <p>Absences et Retards</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/absences-retards">
                    <img alt="" src={tacheslight} />
                    <p>Taches et Devoirs</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/resultats">
                    <img alt="" src={notes} />
                    <p>Notes</p>
                  </Link>
              </li>
            </ul>
          </div>
      </div>
        )
        if(role=="admin")
        return (
          <div className='ParentSidebar'>
            <div className='sidebarlogo-wrapper'>
            <Link to="/">
              <img  src={bata} className="ParentSidebarLogo" alt='logo' />
            </Link>
            </div>
          <div className='sidebarlinks'>
            <ul>
            <li>
                  <Link to="#">
                    <img alt="" src={teacher} />
                    <p>Vous etes un admin</p>
                  </Link>
              </li>
            </ul>
          </div>
      </div>
        )
        if(role=="eleve")
        return (
          <div className='ParentSidebar'>
            <div className='sidebarlogo-wrapper'>
              <Link to="/">
            <img  src={bata} className="ParentSidebarLogo" alt='logo' />
              </Link>
            </div>
          <div className='sidebarlinks'>
            <ul>
              <li>
                  <Link to="/dashboard/enseignants">
                    <img alt="" src={teacher} />
                    <p>enseignants</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/cours">
                    <img alt="" src={book} />
                    <p>Cours</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/cahier-textes">
                    <img alt="" src={closedbook} />
                    <p>Cahier de textes</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/emploidutemps">
                    <img alt="" src={calendar} />
                    <p>Emploi du temps</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/resultats">
                    <img alt="" src={notes} />
                    <p>Notes et bulletins</p>
                  </Link>
              </li>
              <li>
                  <Link to="/dashboard/absences-retards">
                    <img alt="" src={retard} />
                    <p>Retard et absences</p>
                  </Link>
              </li>
            </ul>
          </div>
      </div>
        )
      
    }
    
  }
}