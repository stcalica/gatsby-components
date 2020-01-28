import React, { useRef } from "react"
import '../../css/main.css'

import { SocialIcon } from "react-social-icons"

const BasicSocialBar = (props) => (

  <div className="basic-social-bar-wrapper">
    <div className="basic-social-bar-map">
    {
      props.links.map(link => (
        <span className="social-icon">
          <SocialIcon url={ link.url } />
        </span>
      )
    )}
    </div>
  </div>

)

export { BasicSocialBar }
