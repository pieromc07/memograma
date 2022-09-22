import React from 'react'

import { Button } from '../../Button/Button'
import logo from '../../../assets/images/logo.png'
import './ModalStart.css'
export const ModalStart = () => {
    return (
        <div className='modal-start'>
            <div className='modal-start_content'>
                <img src={logo} alt="logo" />
                <Button text={'jugar'} className='rojo' />
            </div>
        </div>
    )
}
