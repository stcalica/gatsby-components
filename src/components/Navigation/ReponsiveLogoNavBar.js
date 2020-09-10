import React, { useRef } from 'react'
import ReactDOM from 'react-dom';
import { Link} from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import {  Badge, Layout  } from 'antd'
import scrollTo from 'gatsby-plugin-smoothscroll'
import '../../css/main.css'
import 'antd/dist/antd.css'

const { Header } = Layout;

const LinkComponent = (props) => (
  <li key={props.indexKey}  className = "nav-item">
  <AnchorLink className="button-link" to={ props.link }> { props.title } </AnchorLink></li >
);

const AnchorLinkComponent = (props) => (
  <li key={props.indexKey} className = "nav-item">
  <button className="button-link" onClick={() => scrollTo(`${props.link}`)}>{ props.title}</button>
  </li>
);

const BuildNavLink = (props) => {
  console.log(props)
  let { link, index, count } = props
  let contents = link.badge ? <Badge count={count}>{ link.title } </Badge> :  link.title
  return link.link.includes('#') ? <AnchorLinkComponent key={`nav-${index}`} link={link.link.slice(link.link.search('#'))} title={contents}/> : <LinkComponent  key={`nav-${index}`} link={link.link} title={contents}/>

}

const ReponsiveLogoNavBar = (props) => {
  const mobileMenu = useRef()

  const displayMenu = () => {
    mobileMenu.current.style.display = (mobileMenu.current.style.display === "none" || mobileMenu.current.style.display === "") ? "flex" : "none";
  }

  return (
    <Header>
    <nav>
      <div className = "nav-bar" >
      <a className="logo-anchor" href="/"><img className = "header-logo" src = "#" / ></a>
      <ul className = "nav-list" > {
        props.links.map((link, index) => (
          <BuildNavLink link={link} index={index} count={props.count} />
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
    div >
    { props.children }
    </nav>
    </Header>
  )
}

export { ReponsiveLogoNavBar }
