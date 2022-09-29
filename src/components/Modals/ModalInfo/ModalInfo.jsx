import React from 'react'

import logo from '../../../assets/images/logo.png'
import { Button } from '../../Button/Button'
import './ModalInfo.css'
export const ModalInfo = ({ modalInfo, handleModalInfo, handleRestartGame }) => {

  const handleShow = () => {
    if (modalInfo.msgButton === 'volver a jugar') {
      handleRestartGame(true)
      handleModalInfo({ ...modalInfo, show: false })
      document.getElementById('modal-launch').style.display= 'block'
    }
    handleModalInfo({ ...modalInfo, show: false })
  }

  return (
    <div className={modalInfo.show ? 'show' : 'hide'}>
      <div className='rectangle'></div>
      <div className='modalInfo'>
        <img src={logo} alt="logo" className='modalInfo_logo' />
        <h2 className='modalInfo_text' >{modalInfo.msg}</h2>
        <button className='modalInfo_button' onClick={handleShow}>
          {modalInfo.msgButton}
        </button>
      </div>
    </div>
  )
}
