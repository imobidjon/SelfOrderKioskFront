import React from 'react'
import './HScreen.css'
import bgImage1 from '../../assets/images/hpageimg1.png'
import bgImage2 from '../../assets/images/hpageimg2.png'
import { NavLink } from 'react-router-dom'
import DoubleArrowGif from '../../assets/images/double-right-icon.gif'

export default function Screen() {
  return (
    <div className='bgColor bgStyle'>
        <div className='bgImage1'>
            <img src={bgImage1} alt='bg1' />
        </div>
        <div className='bgImage2'>
            <img src={bgImage2} alt='bg2' />
        </div>
        <div className='title'>
            <h1>obi roxat kafe</h1>
            <NavLink to={'/choose'}>
              <button >Boshlash  <img src={DoubleArrowGif} alt='double-right-icon' /> </button>
            </NavLink>
        </div>
    </div>
  )
}
