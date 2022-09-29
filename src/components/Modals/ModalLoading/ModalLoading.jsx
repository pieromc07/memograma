import React from 'react'
import { useEffect } from 'react'

import loading from '../../../assets/images/loader.png'
import './ModalLoading.css'
export const ModalLoading = ({ show }) => {

  useEffect(() => {
    (show) ?
      document.getElementById('modal-loading').style.display = 'flex'
      :
      document.getElementById('modal-loading').style.display = 'none'
  }, [show])

  return (
    <div id='modal-loading' className='modal-loading'>
      <img src={loading} alt="loading" />
      <p className='modal-loading_text'>
        Cargando...
      </p>

    </div>
  )
}
