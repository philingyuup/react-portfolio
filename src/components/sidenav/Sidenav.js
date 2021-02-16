import React from 'react'
import GradientLink from '../util/GradientLink'
import GradientButton from '../util/GradientButton'

import './SideNav.scss'


const SideNav = () => {

  return (
    <nav id='sidenav'>
      <ul>
        <li>
          <GradientLink>
            ABOUT
          </GradientLink>
        </li>
        <li>
          <GradientLink>
            WORK
          </GradientLink>
        </li>
        <li>
          <GradientLink>
            STACK
          </GradientLink>
        </li>
        <li>
          <GradientLink>
            CONTACT
          </GradientLink>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav