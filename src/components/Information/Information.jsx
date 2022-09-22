import React from 'react'

import './Information.css'
export const Information = ({ icon, info }) => {
    return (
        <div className='info'>
         
            <img src={icon} alt="icon" className='info_icon' />
            <p className='info_text'>
                {info}
            </p>
            
        </div>

    )
}
