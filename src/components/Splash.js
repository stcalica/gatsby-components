import React, {
  useRef
} from 'react'

/*

  Wrap around as HOC to make sure layout is create for a splash page

*/

const Splash = (props) => {

  return ( <
    section className = "hero"
    id = {
      props.sectionId
    } > {
      props.children
    } <
    /section>
  )

}

export {
  Splash
}