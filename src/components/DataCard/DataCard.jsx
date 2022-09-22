import React, { useEffect } from 'react'

import './DataCard.css'
export const DataCard = ({ icon, type, text }) => {
    var bgIcon = 'data_icon ';
    if (type == 'gender') {
        bgIcon += 'bg-yellow';
    } else if (type == 'status') {
        bgIcon += 'bg-green'
    } else {
        bgIcon += 'bg-blue'
    }


    return (
        <div className='card-data'>
            <div className={bgIcon}>

                <img src={icon} alt="icon data" />
            </div>
            <p className='data_text'>{text}</p>
        </div>
    )
}
