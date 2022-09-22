import React from 'react'

import './Button.css'

export const Button = ({text}) => {
  return (
    <button className='button'>
        {text}
    </button>
  )
}
