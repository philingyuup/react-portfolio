import React from 'react'
import GradientLink from '../util/GradientLink'
import GradientButton from '../util/GradientButton'

import './SideNav.scss'


const SideNav = () => {

  return (
    <div id='sidenav'>
      <ul>
        <li>
          <GradientLink>
            HOME
          </GradientLink>
        </li>
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
            SKILLS
          </GradientLink>
        </li>
      </ul>
      <div className='bottom-contact'>
        <GradientButton style={{fontSize: '1rem'}} width='100%'>  
          CONTACT
        </GradientButton>
      </div>
    </div>
  )
}

export default SideNav