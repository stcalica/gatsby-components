import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { Link} from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import {  Badge, Layout, Menu  } from 'antd'
import scrollTo from 'gatsby-plugin-smoothscroll'
import '../../css/main.css'
import 'antd/dist/antd.css'

const { Header } = Layout;

const LinkComponent = (props) => (
  <AnchorLink to={ props.link }> { props.title } </AnchorLink>
);

const AnchorLinkComponent = (props) => (
  <a onClick={() => scrollTo(`${props.link}`)}>{ props.title}</a>
);

const ReponsiveLogoNavBar = (props) => {

  const NavigationLink = (props) => {
    console.log(props);
    let contents = props.badge ? <Badge count={props.count}> { props.link.title } </Badge> : props.link.title
    console.log(contents);
    return props.link.link.includes('#') ?
      <AnchorLinkComponent  link={props.link.link.slice(props.link.link.search('#'))} title={contents}/>
      : <LinkComponent link={props.link.link} title={contents}/>
  }

  return (
    <Header style={{ position: 'fixed', zIndex: 100, width: '100%' }}>
    <a href="/"><img className="logo-header" src={props.logo}/></a>
      <Menu theme="dark" mode="horizontal">
        { props.links.map(link => (
            <Menu.Item key={`nav-${link.title}`}>
              { <NavigationLink link={link} count={props.count} badge={link.badge} /> }
            </Menu.Item>
        )) }
      </Menu>
    </Header>
  )
}

export { ReponsiveLogoNavBar }
