import React from 'react'

import logo from '../../assets/images/logo.png'
import { Button } from '../../Button/Button'
import './ModalInfo.css'
export const ModalInfo = ({text, button}) => {
  return (
    <div className='modal'>
        <img src={logo} alt="logo"  className='modal_logo'/>
        <h2 className='modal_text' >{text}</h2>
        <Button text={button} />
    </div>
  )
}
