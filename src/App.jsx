import React from 'react'

import logo from './assets/images/logo.png'

import './App.css'
import { Header } from './components/Header/Header'
import { ModalStart } from './components/Modals/ModalStart/ModalStart'
import { ModalLoading } from './components/Modals/ModalLoading/ModalLoading'

const App = () => {
  return (
    <>
      {/* <ModalStart /> */}
      {/* <ModalLoading /> */}
      {/* <div className='rectangle'></div> */}
      <div className='main'>
          <Header />
          <div className='main-container'>

          </div>
      </div>
    </>
  )
}

export default App