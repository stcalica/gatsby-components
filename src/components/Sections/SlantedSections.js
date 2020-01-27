import React, { useRef } from 'react'
import '../../css/main.css'

const SlantedSections = (props) => {
  let slant = (props.slant === 'right') ? 'slant-right' : 'slant-left' ;
  return(
    <section className="hero" id={ props.sectionId }>
      <header className={ slant +  ' heading black' }>{ props.header }</header>
        <article className="content">
          { props.children }
        </article>
        </section>
  )
}

export { SlantedSections }
