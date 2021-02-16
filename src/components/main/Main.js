import React from 'react'
import './Main.scss'

const SVGClip = () => (
    <svg xmlns='http://www.w3.org/2000/svg' >
    <clipPath id='clip-path' clipPathUnits="userSpaceOnUse">
        {/* <rect x='.75' y='.25' height='.1' width='.4' />
        <rect x='.75' y='.75' height='.1' width='.4' />
        <rect x='0' y='.75' height='.1' width='.25' />
        <rect x='.25' y='.0' height='.35' width='.1' /> */}
      <path d="M0,192L48,202.7C96,213,192,235,288,245.3C384,256,480,256,576,229.3C672,203,768,149,864,144C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>

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