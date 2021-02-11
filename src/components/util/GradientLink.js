import React, { forwardRef } from 'react'

import './stylesheets/GradientLink.scss'

const GradientLink = forwardRef((props, ref) => {

  const {
    href,
    children,


  } = props

  return (
    <a href={href} ref={ref} className='gradient-link'>
      {children}
    </a>
  )
})

export default GradientLink