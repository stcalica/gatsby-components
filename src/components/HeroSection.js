import React, { useRef } from 'react'
import '../css/main.css'

/*

  Wrap around as HOC to make sure layout is create for a splash page

*/

const HeroSection = (props) => {

  return (
    <section className="hero" id={ props.sectionId }>
    {
      props.children
    }
    </section>
  )

}

export {  HeroSection }
