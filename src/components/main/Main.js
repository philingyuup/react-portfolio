import React from 'react'
import './Main.scss'

const SVGClip = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='0' height='0'>
    <defs>
      <clipPath id='clip-shape' clipPathUnits="objectBoundingBox" transform="scale(0.00071428571, 0.00518)" >
        <path d="M0,128L120,133.3C240,139,480,149,720,149.3C960,149,1200,139,1320,133.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </clipPath>
    </defs>
    </svg>
  )


const Main = ({ children }) => {

  return (
    <main id='main'>
      <SVGClip />
      <div id='clip'>
      </div>
      <div id='content' >
        { children }
      </div>
    </main>
  )
}

export default Main