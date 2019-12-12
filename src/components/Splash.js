import React, { useRef } from 'react'

/*

  Wrap around as HOC to make sure layout is create for a splash page

*/

const Splash = () => {

  return(
      <section className="hero">
        {
          props.children
        }
      </section>
  )

}

export default Splash
