import React, { useRef } from 'react'
import '../css/main.css'

const SlantedSections = (props) => {
  return(
    <section className="hero" sectionId="home">
      <header className="heading slant-right black">{ props.header }</header>
        <article className="content">
          { props.children }
        </article>
        </section>
  )
}

export { SlantedSections }
