import React, { useRef } from 'react'
import '../../css/main.css'

const CurvedSection = (props) => {
  return(
    <section className="hero" id={ props.sectionId }>
      <header className="curved">{ props.header }</header>
        <article className="content">
          { props.children }
        </article>
        </section>
  )
}

export { CurvedSection }
