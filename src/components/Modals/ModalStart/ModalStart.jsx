import React, { useEffect, useState } from 'react'

import { ModalLoading } from '../ModalLoading/ModalLoading'
import logo from '../../../assets/images/logo.png'
import './ModalStart.css'
export const ModalStart = ({ handleLoading, show }) => {

    const [tigger, setTigger] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const modal = document.getElementById('modal-launch')
        tigger ? modal.style.display = 'block' : modal.style.display = 'none'



    }, [tigger])

    const handleStarGame = () => {
        if (show && !tigger) {
            setLoading(false)
            setTigger(true)
        }else{

            handleLoading(true)
            setTigger(!tigger)
            setLoading(true)
        }
    }


    return (
        <>
            <div id='modal-launch'>
                <div className='rectangle'></div>
                <div className='modal-start'>
                    <div className='modal-start-content'>
                        <img src={logo} alt="logo" />
                        <button className='modal-start-content_button' onClick={handleStarGame}>
                            jugar
                        </button>
                    </div>
                </div>
            </div>
            <ModalLoading show={loading} />
        </>
    )
}

