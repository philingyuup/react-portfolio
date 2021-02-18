import React from 'react'
import GradientLink from '../util/GradientLink'
import './Header.scss'

const Header = ({ children }) => {



  return (
    <header id='header'>
      <GradientLink href='/' alt='link to home' noUnderline='true' className='link'>
        PHILIP YU
      </GradientLink>
      { children }
    </header>
  )
}

export default Header