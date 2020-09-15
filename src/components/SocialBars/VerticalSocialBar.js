import React, { useRef } from "react"
import '../../css/main.css'

import { SocialIcon } from "react-social-icons"

const VerticalSocialBar = (props) => (

  <div className="basic-sb-vertical-wrapper">
      {
        props.links.map(link => (
          <span className="social-icon">
            <SocialIcon url={link.url} />
          </span>
          )
        )
      }
  </div>

)

export { VerticalSocialBar }