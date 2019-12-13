import React, { useRef } from 'react'
import { Link } from 'gatsby'
import '../css/main.css'

const ReponsiveLogoNavBar = ( props ) => {
  const mobileMenu = useRef()

  const displayMenu = () => {
      mobileMenu.current.style.display = (mobileMenu.current.style.display === "none" || mobileMenu.current.style.display === "") ? "flex" : "none";
  }

  return(
  <nav>
    <div className="nav-bar">
      <img className="header-logo" src="#" />
    <ul className="nav-list">
      {
        props.links.map( (link,index) => <li key={ `nav-${index}` } className="nav-item"><Link to={link.link}> { link.title } </Link></li> )
      }
    </ul>
    <div className="nav-mobile-btn" id="mobile-btn" onClick={ () => { displayMenu() } } >
      <span className="mobile-bar"></span>
      <span className="mobile-bar"></span>
      <span className="mobile-bar"></span>
    </div>
      <ul className="mobile-nav-menu" id="mobile-nav-menu" ref={ mobileMenu }>
      {
        props.links.map( (link,index) => <li key={ `mobile-${index}` } className="mobile-nav-item"><Link to={link.link}> { link.title } </Link></li> )
      }
      </ul>
      </div>
  </nav>
  )
}

export { ReponsiveLogoNavBar }
