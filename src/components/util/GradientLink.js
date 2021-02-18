import React, { forwardRef } from 'react'

import './stylesheets/GradientLink.scss'

const additionalColors = (color) => {
  let colorClassName

  switch (color) {
    case 'primary-color':
      colorClassName = 'primary-color'
      break
    case 'secondary-color':
      colorClassName = 'secondary-color'
      break
    case 'muted-color':
      colorClassName = 'muted-color'
      break
    default:
      colorClassName = ''
      break
  }

  return colorClassName
}

const GradientLink = forwardRef((props, ref) => {

  const {
    href,
    children,
    alt,
    className = '',
    changeColor = '',
    noUnderline = false
  } = props

  return (
    <a href={href} ref={ref} alt={alt} className={`gradient-link ${additionalColors(changeColor)} ${noUnderline && 'underline'} ${className}`}>
      {children}
    </a>
  )
})

export default GradientLink