import React, { useRef } from 'react'
import {  Link} from 'gatsby'
import '../../css/main.css'

const ReponsiveLogoNavBar = (props) => {
  const mobileMenu = useRef()

  const displayMenu = () => {
    console.log(mobileMenu.current.style.display);
    mobileMenu.current.style.display = (mobileMenu.current.style.display === "none" || mobileMenu.current.style.display === "") ? "flex" : "none";
  }

  return (
    <nav>
      <div className = "nav-bar" >
      <a className="logo-anchor" href="/"><img className = "header-logo" src = "#" / ></a>
      <ul className = "nav-list" > {
        props.links.map((link, index) => < li key = {
            `nav-${index}`
          }
          className = "nav-item" > < Link to = {
            link.link
          } > {
            link.title
          } < /Link></li > )
      } </ul>
      <div className = "nav-mobile-btn"
      id = "mobile-btn"
      onClick = {
        () => {
          displayMenu()
        }
      } >
        <span className = "mobile-bar" ></span>
        <span className = "mobile-bar"></span>
        <span className = "mobile-bar"></span>
      </div>
      <div id = "mobile-nav-menu"  ref = { mobileMenu }>
    <ul className = "mobile-nav-menu">
    {
      props.links.map((link, index) => < li key = {
          `mobile-${index}`
        }
        className = "mobile-nav-item" > < Link to = {
          link.link
        } > {
          link.title
        } < /Link></li > )
    } <
    /ul></div> < /
    div > <
    /nav>
  )
}

export { ReponsiveLogoNavBar }
