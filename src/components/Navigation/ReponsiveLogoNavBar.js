import React, { useRef } from 'react'
import ReactDOM from 'react-dom';
import { Link} from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import scrollTo from 'gatsby-plugin-smoothscroll'
import '../../css/main.css'

const LinkComponent = (props) => (
  <li key={props.indexKey}  className = "nav-item">
  <AnchorLink to={ props.link }> { props.title } </AnchorLink></li >
);

const AnchorLinkComponent = (props) => (
  <li key={props.indexKey} className = "nav-item">
  <button onClick={() => scrollTo(`${props.link}`)}>{ props.title}</button>
  </li>
);

const ReponsiveLogoNavBar = (props) => {
  const mobileMenu = useRef()

  const displayMenu = () => {
    mobileMenu.current.style.display = (mobileMenu.current.style.display === "none" || mobileMenu.current.style.display === "") ? "flex" : "none";
  }

  return (
    <nav>
      <div className = "nav-bar" >
      <a className="logo-anchor" href="/"><img className = "header-logo" src = "#" / ></a>
      <ul className = "nav-list" > {
        props.links.map((link, index) => (
        link.link.includes('#') ? <AnchorLinkComponent key={`nav-${index}`} link={link.link.slice(link.link.search('#'))} title={link.title}/> : <LinkComponent  key={`nav-${index}`} link={link.link} title={link.title}/>
      ))
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
    <
    ul className = "mobile-nav-menu"
    id = "mobile-nav-menu"
    ref = {
      mobileMenu
    } > {
      props.links.map((link, index) => < li key = {
          `mobile-${index}`
        }
        className = "mobile-nav-item" > < AnchorLink to = {
          link.link
        } > {
          link.title
        } < /AnchorLink></li > )
    } <
    /ul> < /
    div > <
    /nav>
  )
}

export { ReponsiveLogoNavBar }
