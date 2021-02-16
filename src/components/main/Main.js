import React from 'react'
import './Main.scss'

const SVGClip = () => (
    <svg xmlns='http://www.w3.org/2000/svg' >
    <clipPath id='clip-path' clipPathUnits="objectBoundingBox">
        <rect x='.75' y='.25' height='.1' width='.4' />
        <rect x='.75' y='.75' height='.1' width='.4' />
        <rect x='0' y='.75' height='.1' width='.25' />
        <rect x='.25' y='.0' height='.35' width='.1' />
    
      </clipPath>
    </svg>
  )


const Main = ({ children }) => {

  return (
    <main id='main'>
      <div id='clip'>
        <SVGClip />
      </div>
      <div id='content' >
        { children }
      </div>
    </main>
  )
}

export default Main