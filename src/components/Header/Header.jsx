import React from 'react'

import logo from '../../assets/images/logo.png'
import money from '../../assets/icons/Money.svg'
import heart from '../../assets/icons/Heart.svg'
import { Information } from '../Information/Information'
import './Header.css'
export const Header = () => {
  return (
    <header className='header'>
        <img src={logo} alt="logo" className='header-logo'/>
        <div className='header-content'>
            <Information icon={money}info={'$0000'}
            />
            <Information icon={heart} info={'x3'} />
        </div>
    </header>
  )
}
