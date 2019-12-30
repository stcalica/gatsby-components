import React, { useRef } from 'react'
import '../css/main.css'

/*

  Wrap around as HOC to make sure layout is create for a splash page

*/

const CallToAction = (props) => {
  return (
    <section  id="hero-main" className="hero callToAction" style={{ background:`url(${ props.heroImage }) no-repeat center` }}>
      <div className="hero-call">
        <div className="hero-text">
          { props.children }
        </div>
        <button className="hero-action-button">
          { props.buttonText }
        </button>
      </div>
    </section>
  );

}

export {  CallToAction }
