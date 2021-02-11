import React, { forwardRef, useState } from 'react'
import './stylesheets/GradientButton.scss'

/**
 * Button with a gradient border
 * @param {object} props
 * @param {any} props.children
 * @param {string} props.className
 * @param {object} props.style
 */
const GradientButton = forwardRef((props, ref) => {

  const {
    children,
    className = '',
    style = {},
    height = '3rem',
    width = 'auto'
  } = props

  const containerStyle = {
    height: height,
    width: width
  }

  return (
    <div className='gradient-button' 
      style={containerStyle}
    >
      <button 
        style={{
          ...style
        }}
        ref={ref}
      >
        <span>{children}</span>
      </button>
    </div>
  )
})

export default GradientButton