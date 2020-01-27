import React, { useRef } from 'react'
import {  Link} from 'gatsby'
import '../../css/main.css'

const FixedNavWrapper = (props) => (
  <div className="navBarPadded">
    { props.children }
  </div>
);

export { FixedNavWrapper }
