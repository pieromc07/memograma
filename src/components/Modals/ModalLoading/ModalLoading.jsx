import React from 'react'

import loading from '../../../assets/images/loader.png'
import './ModalLoading.css'
export const ModalLoading = () => {
  return (
    <div className='modal-loading'>
        <img src={loading} alt="loading" />
        <p>Cargando...</p>
    </div>
  )
}
