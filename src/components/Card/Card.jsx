import React, { useState } from 'react'

import back from '../../assets/images/back.png'
import gender from '../../assets/icons/Gender.svg'
import status from '../../assets/icons/Status.svg'
import origin from '../../assets/icons/Origin.svg'
import { DataCard } from '../DataCard/DataCard'

import './Card.css'
export const Card = () => {

    const [flip, setFlip] = useState('back')

    const handleFlip = () =>{
        const front = document.querySelector('.face-front')
        const back = document.querySelector('.face-back')
        if(flip == 'back'){
            front.classList.add('front-active')
            back.classList.add('back-desactive');
            setFlip('front')
        }else{
            front.classList.remove('front-active')
            back.classList.remove('back-desactive');
            setFlip('back')
        }
    }

  return (
    <div className='card' onClick={handleFlip}>
            <div className='face  face-back'>
                <img src={back} alt="img back" />
            </div>
            <div className='face  face-front'>
                <div className='face-front_post'>
                    <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="image card" />
                    <div className='species'>
                        <p>human</p>
                    </div>
                </div>
                <div className='face-front_info'>
                    <p className='info_name'>Morty Smith</p>
                    <div className='info_data'>
                        <DataCard icon={gender} type={'gender'} text={'Male'}/>
                        <DataCard icon={status} type={'status'} text={'Alive'}/>
                    </div>
                    <div className='info_data'>
                        <DataCard icon={origin} type={'origin'} text={'Dimension C-137'}/>
                    </div>

                </div>
            </div>
    </div>
  )
}
