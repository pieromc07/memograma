import React from 'react'

import logo from './assets/images/logo.png'

import './App.css'
import { Header } from './components/Header/Header'
import { ModalStart } from './components/Modals/ModalStart/ModalStart'
import { ModalLoading } from './components/Modals/ModalLoading/ModalLoading'
import { Card } from './components/Card/Card'

const App = () => {
  return (
    <>
      {/* <ModalStart /> */}
      {/* <ModalLoading /> */}
      {/* <div className='rectangle'></div> */}
      <div className='main'>
          <Header />
          <div className='main-container'>
              <Card />
          </div>
      </div>
    </>
  )
}

export default App