import React from 'react'

import logo from '../../assets/images/logo.png'
import money from '../../assets/icons/Money.svg'
import heart from '../../assets/icons/Heart.svg'
import level from '../../assets/icons/Level.svg'
import { Information } from '../Information/Information'
import './Header.css'
export const Header = ({ lifes, reward }) => {
  return (
    <header className='header'>
      <img src={logo} alt="logo" className='header-logo' />
      <div className='header-content'>
        <Information icon={money} info={'$' + reward} />
        <Information icon={heart} info={'x' + lifes} />
        {/* <Information icon={level} info={7} /> */}
      </div>
    </header>
  )
}
